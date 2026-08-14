import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/config";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";

function url(path: string) {
  return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { 
        url: url("/"), 
        lastModified: now, 
        changeFrequency: "weekly", 
        priority: 1 
    },
    { 
        url: url("/services"), 
        lastModified: now, 
        changeFrequency: "weekly", 
        priority: 0.9 
    },
    { 
        url: url("/our-work"), 
        lastModified: now, 
        changeFrequency: "weekly", 
        priority: 0.9 
    },
    { 
        url: url("/blog"), 
        lastModified: now, 
        changeFrequency: "weekly", 
        priority: 0.9 
    },
    { 
        url: url("/about-us"), 
        lastModified: now, 
        changeFrequency: "monthly", 
        priority: 0.9 
    },
    { 
        url: url("/contact-us"), 
        lastModified: now, 
        changeFrequency: "monthly", 
        priority: 0.9 
    },
    { 
        url: url("/privacy-policy"), 
        lastModified: now, 
        changeFrequency: "yearly", 
        priority: 0.2 
    },
    { 
        url: url("/terms-and-conditions"), 
        lastModified: now, 
        changeFrequency: "yearly", 
        priority: 0.2 
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: url(service.href),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
