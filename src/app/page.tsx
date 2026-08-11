import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Counters from "@/components/Counters";
import FloorServices from "@/components/FloorServices";
import HeroBanner from "@/components/HeroBanner";
import OurProcess from "@/components/OurProcess";
import OurWork from "@/components/OurWork";
import ReviewsBar from "@/components/ReviewsBar";
import Testimonials from "@/components/Testimonials";
import Visualize from "@/components/Visualize";
import WhyChooseUs from "@/components/WhyChooseUs";
import { counterItems } from "@/lib/counters";
import { BASE_URL, APP_NAME, contactInfo, socialLinks } from "@/lib/config";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Saven shades | Premium Epoxy Solutions",
  description: "Premium epoxy flooring in Surrey, BC — durable, beautiful garage, residential, and commercial floors installed by local experts. Free quotes.",
  keywords: [ "epoxy flooring Surrey", "garage epoxy flooring", "commercial epoxy floors", "residential epoxy flooring", "premium epoxy solutions", "metallic epoxy flooring" ],
  alternates: { 
    canonical: BASE_URL
  },
  openGraph: {
    title: "Saven shades | Premium Epoxy Solutions",
    description: "Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local experts in Surrey, BC.",
    type: "website",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        alt: "Premium epoxy garage floor with reflective flake finish",
      },
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${BASE_URL}/#organization`,
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
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": APP_NAME,
      "alternateName": APP_NAME,
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
      "description": "Premium epoxy flooring solutions for residential and commercial spaces in Surrey, BC.",
      "inLanguage": "en-CA",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      "url": BASE_URL,
      "name": "Saven shades | Premium Epoxy Solutions",
      "description": "Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local experts in Surrey, BC.",
      "isPartOf": {
        "@id": `${BASE_URL}/#website`,
      },
      "about": {
        "@id": `${BASE_URL}/#organization`,
      },
      "mainEntity": {
        "@id": `${BASE_URL}/#services`,
      },
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
      "inLanguage": "en-CA",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        "width": 1200,
        "height": 630,
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL,
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/#services`,
      "name": "Epoxy Flooring Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.title,
        "url": `${BASE_URL}${service.href}`,
        "description": service.description,
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Hero Section */}
      <HeroBanner />

      {/* Floor Services Section */}
      <FloorServices />

      {/* Reviews Section */}
      <ReviewsBar />

      {/* Services Section */}
      {/* <Services /> */}

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Process Section */}
      <OurProcess />

      {/* Before & After Section */}
      <section className="relative -mt-8 rounded-t-[2rem] bg-gray-50 sm:-mt-12 sm:rounded-t-[2.75rem] lg:rounded-t-[3.5rem]">
        <Visualize />
      </section>
      
      {/* Our Work Section */}
      <OurWork />

      {/* Counters Section */}
      <Counters items={counterItems} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CallToAction />
    </>
  );
}
