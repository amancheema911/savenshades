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
import { BASE_URL, contactInfo } from "@/lib/config";

export const metadata: Metadata = {
  title: "Seven Shades | Premium Epoxy Solutions",
  description: "Premium epoxy flooring in Surrey, BC — durable, beautiful garage, residential, and commercial floors installed by local experts. Free quotes.",
  keywords: [ "epoxy flooring Surrey", "garage epoxy flooring", "commercial epoxy floors", "residential epoxy flooring", "premium epoxy solutions", "metallic epoxy flooring" ],
  alternates: { 
    canonical: BASE_URL
  },
  openGraph: {
    title: "Seven Shades | Premium Epoxy Solutions",
    description: "Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local experts in Surrey, BC.",
    type: "website",
    images: [
      {
        url: BASE_URL + contactInfo.DEFAULT_IMAGE,
        alt: "Premium epoxy garage floor with reflective flake finish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Shades | Premium Epoxy Solutions",
    description: "Premium epoxy flooring in Surrey, BC — durable, beautiful garage, residential, and commercial floors installed by local experts. Free quotes.",
    images: [BASE_URL + contactInfo.DEFAULT_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroBanner />

      {/* Floor Services Section */}
      <FloorServices />

      {/* Reviews Section */}
      <ReviewsBar />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Process Section */}
      <OurProcess />

      {/* Before & After Section */}
      <section className="relative -mt-6 rounded-t-[2rem] bg-gray-50 sm:-mt-10 sm:rounded-t-[2.75rem] lg:rounded-t-[3.5rem]">
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
