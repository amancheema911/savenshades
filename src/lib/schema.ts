import { BASE_URL, APP_NAME, contactInfo, socialLinks } from "@/lib/config";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { serviceFaqs } from "@/lib/service-faqs";
import { services } from "@/lib/services";

type Breadcrumb = {
  name: string;
  path: string;
};

type PageSchemaConfig = {
  type?: string | string[];
  path: string;
  name: string;
  description: string;
  image?: string;
  mainEntityId?: string;
  breadcrumbs: Breadcrumb[];
  extraNodes?: Record<string, unknown>[];
};

const orgId = `${BASE_URL}/#organization`;
const websiteId = `${BASE_URL}/#website`;

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function absoluteUrl(path: string) {
  if (!path || path === "/") return BASE_URL;
  if (path.startsWith("http")) return path;
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

const organizationNode = {
  "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": orgId,
  "name": APP_NAME,
  "url": BASE_URL,
  "logo": `${BASE_URL}${contactInfo.logo}`,
  "image": {
    "@type": "ImageObject",
    "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
    "width": 1200,
    "height": 630,
  },
  "description": "Premium epoxy flooring in Surrey, BC — durable, beautiful garage, residential, and commercial floors installed by local experts. Free quotes.",
  "slogan": "Premium Epoxy Solutions",
  "email": contactInfo.email,
  "telephone": contactInfo.phone,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "23-17528 60 Avenue",
    "addressLocality": "Surrey",
    "addressRegion": "BC",
    "postalCode": "V3S 1T8",
    "addressCountry": "CA",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "17:00",
    },
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Surrey",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "British Columbia",
      },
    },
    {
      "@type": "AdministrativeArea",
      "name": "Greater Vancouver",
    },
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "availableLanguage": ["English"],
      "areaServed": "CA",
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "availableLanguage": ["English"],
      "areaServed": "CA",
    },
  ],
  "sameAs": socialLinks.map((link) => link.link),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "100",
  },
  "knowsAbout": services.map((service) => service.title),
};

const websiteNode = {
  "@type": "WebSite",
  "@id": websiteId,
  "url": BASE_URL,
  "name": APP_NAME,
  "alternateName": APP_NAME,
  "publisher": { "@id": orgId },
  "description": "Premium epoxy flooring solutions for residential and commercial spaces in Surrey, BC.",
  "inLanguage": "en-CA",
};

function breadcrumbList(items: Breadcrumb[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": absoluteUrl(item.path),
    })),
  };
}

function createPageGraph({
  type = "WebPage",
  path,
  name,
  description,
  image = contactInfo.DEFAULT_IMAGE,
  mainEntityId,
  breadcrumbs,
  extraNodes = [],
}: PageSchemaConfig) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      websiteNode,
      {
        "@type": type,
        "@id": `${url}#webpage`,
        "url": url,
        "name": name,
        "description": description,
        "isPartOf": { "@id": websiteId },
        "about": { "@id": orgId },
        "publisher": { "@id": orgId },
        "inLanguage": "en-CA",
        ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": absoluteUrl(image),
          "width": 1200,
          "height": 630,
        },
        breadcrumb: breadcrumbList(breadcrumbs),
      },
      ...extraNodes,
    ],
  };
}

const homeCrumbs: Breadcrumb[] = [{ name: "Home", path: "/" }];

const homeSchema = createPageGraph({
  "path": "/",
  "name": "Seven Shades | Premium Epoxy Solutions",
  "description": "Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local experts in Surrey, BC.",
  "mainEntityId": `${BASE_URL}/#services`,
  "breadcrumbs": homeCrumbs,
  "extraNodes": [
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/#services`,
      "name": "Epoxy Flooring Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.title,
        "url": absoluteUrl(service.href),
        "description": service.description,
      })),
    },
  ],
});

const serviceSeo: Record<string, { title: string; description: string }> = {
  "garage-floors": {
    title: "Garage Epoxy Flooring Installation | Seven Shades",
    description: "Professional garage epoxy flooring by Seven Shades. Hot-tire resistant, easy to clean, UV-stable showroom finishes for residential and collector garages. Free quotes.",
  },
  commercial: {
    title: "Commercial Epoxy Flooring Installation | Seven Shades",
    description: "Professional commercial epoxy flooring by Seven Shades. High-traffic systems for retail, offices, restaurants, and showrooms — durable, cleanable, and built for business hours.",
  },
  residential: {
    title: "Residential Epoxy Flooring Installation | Seven Shades",
    description: "Professional residential epoxy flooring by Seven Shades. Beautiful, durable floors for garages, basements, mudrooms, and living spaces — easy to clean, stylish, and built for everyday home life.",
  },
  "metallic-epoxy": {
    title: "Metallic Epoxy Flooring Installation | Seven Shades",
    description: "Professional metallic epoxy flooring by Seven Shades. Liquid-metal depth and custom color movement for showrooms, residences, and feature spaces — stunning, durable, and sealed to last.",
  },
  "solid-epoxy": {
    title: "Solid Epoxy Flooring Installation | Seven Shades",
    description: "Professional solid epoxy flooring by Seven Shades. Clean continuous color systems with gloss or satin clear — durable, easy to maintain, and built for a modern finished look.",
  },
  "stone-epoxy": {
    title: "Stone Epoxy Flooring Installation | Seven Shades",
    description: "Professional stone epoxy flooring by Seven Shades. Natural stone-look systems with durable aggregate texture — refined appearance, strong grip, and built for residential and commercial spaces.",
  },
  "rubber-surfacing": {
    title: "Rubber Surfacing Installation | Seven Shades",
    description: "Professional rubber surfacing by Seven Shades. Soft, durable, slip-resistant floors for gyms, play areas, daycare spaces, and recreational zones — impact absorbing and built for high activity.",
  },
};

const staticPages: Record<string, PageSchemaConfig> = {
  "/about-us": {
    "type": "AboutPage",
    "path": "/about-us",
    "name": "About Seven Shades | Epoxy Flooring Specialists Since 2014",
    "description": "Meet Seven Shades — epoxy-only flooring specialists in Surrey, BC since 2014. Precision prep, premium materials, and lasting residential and commercial floors.",
    "image": "/images/about-us.webp",
    "mainEntityId": `${BASE_URL}/about-us#about`,
    "breadcrumbs": [
      ...homeCrumbs,
      { 
        "name": "About Us", 
        "path": "/about-us" 
      },
    ],
  },
  "/contact-us": {
    "type": "ContactPage",
    "path": "/contact-us",
    "name": "Contact Seven Shades | Free Epoxy Flooring Quote",
    "description": "Get a free Seven Shades epoxy flooring quote in Surrey, BC. Call, email, or use our quote form — clear scope, no obligation, 24-hour response.",
    "breadcrumbs": [
      ...homeCrumbs,
      { 
        "name": "Contact Us", 
        "path": "/contact-us" 
      },
    ],
  },
  "/our-work": {
    "type": "CollectionPage",
    "path": "/our-work",
    "name": "Our Work | Seven Shades Epoxy Flooring Projects",
    "description": "Browse finished Seven Shades epoxy installs — garage, commercial, residential, metallic, solid, and stone epoxy floors, plus rubber surfacing, across Surrey, BC.",
    "image": "/images/services/garage.webp",
    "breadcrumbs": [
      ...homeCrumbs,
      { 
        "name": "Our Work", 
        "path": "/our-work" 
      },
    ],
  },
  "/services": {
    "type": "CollectionPage",
    "path": "/services",
    "name": "Epoxy Flooring Services | Seven Shades",
    "description": "Browse Seven Shades epoxy systems for every space — garage, commercial, residential, metallic, solid, stone epoxy, and rubber surfacing. Precision install, built to last.",
    "image": "/images/services/service-garage.webp",
    "mainEntityId": `${BASE_URL}/services#service-list`,
    "breadcrumbs": [
      ...homeCrumbs,
      { 
        "name": "Services", 
        "path": "/services" 
      },
    ],
    "extraNodes": [
      {
        "@type": "ItemList",
        "@id": `${BASE_URL}/services#service-list`,
        "name": "Epoxy Flooring Services",
        "itemListElement": services.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": service.title,
          "url": absoluteUrl(service.href),
          "description": service.description,
        })),
      },
    ],
  },
  "/blog": {
    "type": "CollectionPage",
    "path": "/blog",
    "name": "Blog | Seven Shades Epoxy Flooring Insights",
    "description": "Epoxy flooring tips, comparisons, and maintenance guides from Seven Shades — helping you choose, install, and care for garage, residential, and commercial floors.",
    "image": "/images/services/garage-1.webp",
    "mainEntityId": `${BASE_URL}/blog#post-list`,
    "breadcrumbs": [
      ...homeCrumbs,
      { 
        "name": "Blog", 
        "path": "/blog" 
      },
    ],
    "extraNodes": [
      {
        "@type": "Blog",
        "@id": `${BASE_URL}/blog#post-list`,
        "name": "Seven Shades Blog",
        "blogPost": blogPosts.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "url": absoluteUrl(`/blog/${post.slug}`),
          "image": absoluteUrl(post.image),
          "datePublished": post.date,
          "author": { "@id": orgId },
        })),
      },
    ],
  },
};

function createServicePageSchema(serviceId: string) {
  const service = services.find((item) => item.id === serviceId);
  if (!service) return null;

  const seo = serviceSeo[service.id];
  const name = seo?.title ?? `${service.title} | ${APP_NAME}`;
  const description = seo?.description ?? service.description;
  const url = absoluteUrl(service.href);
  const faqs = serviceFaqs[service.id] ?? [];

  return createPageGraph({
    "path": service.href,
    "name": name,
    "description": description,
    "image": service.image,
    "breadcrumbs": [
      ...homeCrumbs,
      { "name": "Services", "path": "/services" },
      { "name": service.title, "path": service.href },
    ],
    "mainEntityId": `${url}#service`,
    "extraNodes": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        "name": service.title,
        "description": description,
        "url": url,
        "image": absoluteUrl(service.image),
        "provider": { "@id": orgId },
        "areaServed": {
          "@type": "City",
          "name": "Surrey",
        },
        "serviceType": service.title,
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              "url": url,
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  });
}

function createBlogPostSchema(slug: string) {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;

  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);

  return createPageGraph({
    "type": "WebPage",
    "path": path,
    "name": `${post.title} | ${APP_NAME}`,
    "description": post.excerpt,
    "image": post.image,
    "breadcrumbs": [
      ...homeCrumbs,
      { "name": "Blog", "path": "/blog" },
      { "name": post.title, "path": path },
    ],
    "mainEntityId": `${url}#post`,
    "extraNodes": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        "headline": post.title,
        "description": post.excerpt,
        "url": url,
        "image": absoluteUrl(post.image),
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "author": {
          "@type": "Person",
          "name": post.author,
        },
        "publisher": { "@id": orgId },
        "mainEntityOfPage": { "@id": `${url}#webpage` },
        "articleSection": post.category,
      },
      ...(post.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              "url": url,
              "mainEntity": post.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  });
}

/** Returns the JSON-LD graph for a route. Add new internal pages to `staticPages` or `serviceSeo`. */
export function getSchemaForPath(pathname: string) {
  const path = normalizePath(pathname);

  if (path === "/") return homeSchema;

  const staticSchema = staticPages[path];
  if (staticSchema) return createPageGraph(staticSchema);

  const service = services.find((item) => item.href === path);
  if (service) return createServicePageSchema(service.id);

  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    const blogSchema = createBlogPostSchema(slug);
    if (blogSchema) return blogSchema;
  }

  return createPageGraph({
    "path": path,
    "name": APP_NAME,
    "description": "Premium epoxy flooring in Surrey, BC — durable, beautiful garage, residential, and commercial floors installed by local experts.",
    "breadcrumbs": [
      ...homeCrumbs,
      { 
        "name": "Page", 
        "path": path 
      },
    ],
  });
}
