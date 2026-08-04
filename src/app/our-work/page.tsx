import type { Metadata } from "next";
import { Suspense } from "react";
import CallToAction from "@/components/CallToAction";
import WorkClient from "./workClient";

export const metadata: Metadata = {
  title: "Our Work | Floorix Premium Epoxy Flooring",
  description: "Browse Floorix epoxy flooring projects — residential garages, commercial spaces, industrial floors, and decorative metallic finishes.",
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
