import type { Metadata } from "next";
import { Suspense } from "react";
import CallToAction from "@/components/CallToAction";
import WorkClient from "./workClient";

export const metadata: Metadata = {
  title: "Our Work | Saven shades Premium Epoxy Flooring",
  description: "Browse Saven shades epoxy flooring projects — residential garages, commercial spaces, industrial floors, and decorative metallic finishes.",
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
