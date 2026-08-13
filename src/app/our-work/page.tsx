import type { Metadata } from "next";
import { Suspense } from "react";
import CallToAction from "@/components/CallToAction";
import WorkClient from "./workClient";
import { BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Work | Saven shades Epoxy Flooring Projects",
  description: "Browse finished Saven shades epoxy installs — garage, commercial, residential, metallic, solid, and stone epoxy floors, plus rubber surfacing, across Surrey, BC.",
  keywords: ["epoxy flooring projects", "garage epoxy flooring", "commercial epoxy floors", "residential epoxy flooring", "metallic epoxy flooring", "stone epoxy flooring", "rubber surfacing"],
  alternates: {
    canonical: `${BASE_URL}/our-work`,
  },
  openGraph: {
    title: "Our Work | Saven shades Epoxy Flooring Projects",
    description: "Real finished floors across garage, commercial, residential, and specialty epoxy and rubber surfaces — browse photos and project details.",
    type: "website",
    images: [
      {
        url: BASE_URL + "/images/services/garage.jpg",
        alt: "Luxury car on a finished garage epoxy floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Saven shades Epoxy Flooring Projects",
    description: "Browse finished Saven shades epoxy installs — garage, commercial, residential, metallic, solid, and stone epoxy floors, plus rubber surfacing, across Surrey, BC.",
    images: [BASE_URL + "/images/services/garage.jpg"],
  },
};

export default function OurWorkPage() {
  return (
    <>
      <Suspense fallback={null}>
        <WorkClient />
      </Suspense>
      <CallToAction />
    </>
  );
}
