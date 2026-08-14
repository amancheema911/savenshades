import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import CallToAction from "@/components/CallToAction";
import Heading from "@/components/Heading";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import { BASE_URL } from "@/lib/config";
import { blogPosts } from "@/lib/blog";

const POSTS_PER_PAGE = 12;

export const metadata: Metadata = {
  title: "Blog | Seven Shades Epoxy Flooring Insights",
  description:
    "Epoxy flooring tips, comparisons, and maintenance guides from Seven Shades — helping you choose, install, and care for garage, residential, and commercial floors.",
  keywords: [
    "epoxy flooring blog",
    "epoxy flooring tips",
    "garage floor maintenance",
    "epoxy vs rubber flooring",
    "epoxy installation guide",
  ],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | Seven Shades Epoxy Flooring Insights",
    description:
      "Tips, comparisons, and maintenance guides for garage, residential, and commercial epoxy flooring.",
    type: "website",
    images: [
      {
        url: BASE_URL + "/images/services/garage-1.webp",
        alt: "Epoxy flooring blog cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Seven Shades Epoxy Flooring Insights",
    description:
      "Epoxy flooring tips, comparisons, and maintenance guides from Seven Shades.",
    images: [BASE_URL + "/images/services/garage-1.webp"],
  },
};

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam } = await searchParams;

  const [featured, ...rest] = blogPosts;
  const totalPages = Math.max(1, Math.ceil(rest.length / POSTS_PER_PAGE));
  const requestedPage = Number(pageParam);
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, requestedPage), totalPages)
    : 1;
  const pageStart = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = rest.slice(pageStart, pageStart + POSTS_PER_PAGE);

  return (
    <>
      <PageHeader
        eyebrow="OUR BLOG"
        title={
          <>
            Flooring Insights{" "}
            <span className="text-[var(--brand-color)]">&amp; Advice.</span>
          </>
        }
        description="Guides, comparisons, and maintenance tips to help you choose and care for the right epoxy or rubber system."
        primaryAction={{ href: "/contact-us", label: "Get Free Quote" }}
        secondaryAction={{
          href: "#latest-articles",
          label: "Browse Articles",
          icon: "arrow",
        }}
        aside={{
          label: "Articles",
          value: `${blogPosts.length}+`,
          description: "Practical guidance from our epoxy install team.",
        }}
      />

      <section className="relative bg-gray-50 pt-14 sm:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="LATEST ARTICLES"
                title={<>Learn Before You <span className="text-[var(--brand-color)]">Install.</span></>}
                description="Real guidance from the crews who prep and pour these systems every day."
              />
            </div>
          </div>

          {/* Featured spotlight */}
          {featured ? (
            <div className="mt-10 sm:mt-12">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--brand-color)] uppercase shadow-sm">
                    Featured
                  </span>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--black)]/50">
                    <span>{featured.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featured.date}</span>
                    <span aria-hidden="true">·</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--black)] transition-colors duration-300 group-hover:text-[var(--brand-color)]">{featured.title}</h3>
                  <p>{featured.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--brand-color)]">
                    Read Article
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-[var(--brand-color)]/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-[var(--brand-color)] group-hover:text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ) : null}

          {/* Article grid */}
          {pagePosts.length > 0 ? (
            <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {pagePosts.map((post) => (
                <li key={post.id}>
                  <BlogCard
                    href={`/blog/${post.slug}`}
                    image={post.image}
                    imageAlt={post.imageAlt}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                  />
                </li>
              ))}
            </ul>
          ) : null}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/blog"
            hash="#latest-articles"
          />
        </div>
      </section>

      <CallToAction />
    </>
  );
}
