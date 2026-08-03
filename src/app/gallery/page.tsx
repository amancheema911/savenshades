import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Floorix Premium Epoxy Flooring",
  description:
    "Browse Floorix epoxy flooring projects — residential garages, commercial spaces, industrial floors, and decorative metallic finishes.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryClient />
      <CallToAction />
    </>
  );
}
