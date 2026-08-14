import type { ReactNode } from "react";

export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: ReactNode;
};

export const services: Service[] = [
  {
    id: "garage-floors",
    title: "Garage Floors",
    description: "Durable, sleek and easy to clean.",
    href: "/services/garage-floors",
    image: "/images/services/service-garage.webp",
    imageAlt: "Luxury car on a finished garage epoxy floor",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-warehouse-icon lucide-warehouse"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>`,
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "High performance for high traffic.",
    href: "/services/commercial",
    image: "/images/services/service-commercial.webp",
    imageAlt: "Bright commercial interior with epoxy flooring",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-icon lucide-building"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>`,
  },
  {
    id: "residential",
    title: "Residential",
    description: "Beautiful, durable floors for everyday home life.",
    href: "/services/residential",
    image: "/images/services/residential-floor.webp",
    imageAlt: "Residential home with polished epoxy flooring",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  },
  {
    id: "metallic-epoxy",
    title: "Metallic Epoxy",
    description: "Stunning, unique and luxurious finish.",
    href: "/services/metallic-epoxy",
    image: "/images/services/service-metallic.webp",
    imageAlt: "Close-up of blue and silver metallic epoxy floor",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-horizontal-icon lucide-waves-horizontal"><path d="M2 12q2.5 2 5 0t5 0 5 0 5 0"/><path d="M2 19q2.5 2 5 0t5 0 5 0 5 0"/><path d="M2 5q2.5 2 5 0t5 0 5 0 5 0"/></svg>`,
  },
  {
    id: "solid-epoxy",
    title: "Solid Epoxy",
    description: "Clean continuous color with lasting clarity.",
    href: "/services/solid-epoxy",
    image: "/images/services/solid-epoxy.webp",
    imageAlt: "Solid epoxy flooring finish",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stone-icon lucide-stone"><path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z"/><path d="M11.99 22 14 12l7.822 3.184"/><path d="M14 12 8.47 2.302"/></svg>`,
  },
  {
    id: "stone-epoxy",
    title: "Stone Epoxy",
    description: "Natural stone look with durable textured grip.",
    href: "/services/stone-epoxy",
    image: "/images/services/stone-epoxy.webp",
    imageAlt: "Stone epoxy flooring with refined aggregate texture",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stone-icon lucide-stone"><path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z"/><path d="M11.99 22 14 12l7.822 3.184"/><path d="M14 12 8.47 2.302"/></svg>`,
  },  
  {
    id: "rubber-surfacing",
    title: "Rubber Surfacing",
    description: "Soft, durable floors for gyms and play spaces.",
    href: "/services/rubber-surfacing",
    image: "/images/services/rubber-surfacing.webp",
    imageAlt: "Rubber surfacing for recreation and activity spaces",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inspection-panel-icon lucide-inspection-panel"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>`,
  },  
];

/** Home section carousel uses the first four featured services. */
export const featuredServices = services.slice(0, 4);
