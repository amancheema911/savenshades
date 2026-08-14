import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageJsonLd from "@/components/PageJsonLd";
import "./globals.css";
import { BASE_URL } from "@/lib/config";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "Seven Shades | Premium Epoxy Solutions",
  description: "Premium epoxy flooring in Surrey, BC — durable, beautiful garage, residential, and commercial floors installed by local experts. Free quotes.",
  keywords: [ "epoxy flooring Surrey", "garage epoxy flooring", "commercial epoxy floors", "residential epoxy flooring", "premium epoxy solutions", "metallic epoxy flooring", ],
  alternates: { 
    canonical: BASE_URL
  },

  openGraph: {
    title: "Seven Shades | Premium Epoxy Solutions",
    description: "Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local experts in Surrey, BC.",
    type: "website",
    images: [
      {
        url: BASE_URL + "/images/hero-epoxy-floor-1.2.1.webp",
        alt: "Premium epoxy garage floor with reflective flake finish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Services | Seven Shades",
    description: "Browse Seven Shades epoxy systems for every space — garage, commercial, residential, metallic, solid, stone epoxy, and rubber surfacing. Precision install, built to last.",
    images: [BASE_URL + "/images/hero-epoxy-floor-1.2.1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <head>
        <PageJsonLd />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
