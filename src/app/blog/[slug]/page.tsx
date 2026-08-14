import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import CallToAction from "@/components/CallToAction";
import FaqAccordion from "@/components/faq-accordion";
import Heading from "@/components/Heading";
import Button from "@/components/ui/Button";
import { APP_NAME, BASE_URL } from "@/lib/config";
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog";
import FlooringQuoteForm from "@/components/FlooringQuoteForm";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 9.5 17 19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 10h17M8 3.5V7M16 3.5V7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: `Post Not Found | ${APP_NAME}`,
      description: "Sorry, the article you're looking for does not exist.",
    };
  }

  const url = `${BASE_URL}/blog/${post.slug}`;
  const image = `${BASE_URL}${post.image}`;

  return {
    title: `${post.title} | ${APP_NAME} Blog`,
    description: post.excerpt,
    keywords: [post.category, "epoxy flooring blog", "epoxy flooring tips", APP_NAME],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: APP_NAME,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogPosts(post.slug, 4);
  const initials = getInitials(post.author);

  return (
    <>
      <header className="relative overflow-hidden bg-white pt-14 sm:pt-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(13,127,232,0.08),transparent_60%)]" aria-hidden="true" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <Heading
              tag="h1"
              size="section"
              tone="dark"
              eyebrow={post.category}
              title={post.title}
              description={post.excerpt}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-6 border-y border-black/8 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-sm font-bold text-white">
                  {initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-black">{post.author}</div>
                  <div className="text-xs text-black/45">{post.authorRole}</div>
                </div>
              </div>

              <span className="hidden h-8 w-px bg-black/10 sm:block" aria-hidden="true" />

              <div className="flex items-center gap-2 text-sm text-black/55">
                <CalendarIcon />
                {post.date}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/blog" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-black/55 transition-colors hover:text-[var(--brand-color)]">
                All Articles
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowIcon size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="lg:col-span-2">
              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[16/7] overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgba(10,16,24,0.35)] sm:rounded-[2rem]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>
              </div>

              {post.keyTakeaways?.length ? (
                <div className="my-6 rounded-2xl border border-[var(--brand-color)]/20 bg-[var(--brand-color)]/5 p-6 sm:p-7">
                  <div className="text-xs font-bold tracking-[0.14em] text-[var(--brand-color)] uppercase">Key Takeaways</div>
                  <ul className="mt-4 space-y-3">
                    {post.keyTakeaways.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-medium text-black/75">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-white">
                          <CheckIcon />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="space-y-5">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {post.faqs?.length ? (
                <div className="mt-14">
                  <Heading
                    tag="h2"
                    size="section"
                    tone="dark"
                    eyebrow="QUESTIONS"
                    title={
                      <>
                        Frequently Asked <span className="text-[var(--brand-color)]">Questions.</span>
                      </>
                    }
                  />
                  <div className="mt-8">
                    <FaqAccordion items={post.faqs} defaultOpenIndex={0} />
                  </div>
                </div>
              ) : null}
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              
              {/* Flooring quote form */}
              <FlooringQuoteForm tone="light" />
            
              {/* Author card */}
              <div className="rounded-[1.5rem] border border-black/[0.06] bg-gray-50 p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)] text-base font-bold text-white">
                    {initials}
                  </span>
                  <div>
                    <div className="font-bold text-black">{post.author}</div>
                    <div className="text-sm text-black/50">{post.authorRole}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-black/60">
                  Trusted epoxy flooring installers in Surrey, BC — sharing what we learn on every job site.
                </p>
              </div>

              {/* Call to action */}
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[var(--black)] p-6 sm:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,127,232,0.25),transparent_60%)]" />
                <div className="relative z-10 space-y-3">
                  <h3 className="text-lg font-bold text-white">Ready to upgrade your floors?</h3>
                  <p className="text-sm text-white/65">Get a free, no-obligation quote from our team.</p>
                  <Button href="/contact-us" size="sm" fullWidth>Get Free Quote</Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="relative bg-gray-50 pt-14 sm:pt-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="KEEP READING"
                title={
                  <>
                    More From The <span className="text-[var(--brand-color)]">Blog.</span>
                  </>
                }
                description="More guides and comparisons from our install team."
              />
              <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-black/45 transition-colors hover:text-[var(--brand-color)]"
              >
                All articles
                <span className="text-[var(--brand-color)] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowIcon size={14} />
                </span>
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <li key={item.id}>
                  <BlogCard
                    href={`/blog/${item.slug}`}
                    image={item.image}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    excerpt={item.excerpt}
                    category={item.category}
                    date={item.date}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CallToAction />
    </>
  );
}
