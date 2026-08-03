export type GalleryCategory =
  | "All"
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Decorative";

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  location: string;
  image: string;
  imageAlt: string;
};

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Decorative",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "garage-showroom",
    title: "Garage Showroom",
    category: "Residential",
    location: "Private Residence",
    image: "/images/services/service-garage.png",
    imageAlt: "Luxury garage with finished epoxy floor",
  },
  {
    id: "metallic-lounge",
    title: "Metallic Lounge",
    category: "Decorative",
    location: "Hospitality Suite",
    image: "/images/services/service-metallic.png",
    imageAlt: "Metallic epoxy floor with blue and silver swirls",
  },
  {
    id: "commercial-suite",
    title: "Commercial Suite",
    category: "Commercial",
    location: "Office Lobby",
    image: "/images/services/service-commercial.png",
    imageAlt: "Bright commercial space with epoxy flooring",
  },
  {
    id: "warehouse-polish",
    title: "Warehouse Polish",
    category: "Industrial",
    location: "Distribution Center",
    image: "/images/services/service-industrial.png",
    imageAlt: "High-gloss industrial warehouse epoxy floor",
  },
  {
    id: "hero-install",
    title: "Luxury Living Floor",
    category: "Residential",
    location: "Custom Home",
    image: "/images/hero-epoxy-floor.png",
    imageAlt: "Premium epoxy floor in a luxury residential space",
  },
  {
    id: "flake-garage",
    title: "Flake System Garage",
    category: "Residential",
    location: "Car Collector Bay",
    image: "/images/services/service-garage.png",
    imageAlt: "Flake epoxy garage floor with high-gloss finish",
  },
  {
    id: "retail-floor",
    title: "Retail Walkway",
    category: "Commercial",
    location: "Boutique Storefront",
    image: "/images/services/service-commercial.png",
    imageAlt: "Commercial retail epoxy flooring",
  },
  {
    id: "plant-floor",
    title: "Plant Floor System",
    category: "Industrial",
    location: "Manufacturing Facility",
    image: "/images/services/service-industrial.png",
    imageAlt: "Industrial epoxy floor built for heavy traffic",
  },
  {
    id: "metallic-feature",
    title: "Metallic Feature Slab",
    category: "Decorative",
    location: "Design Studio",
    image: "/images/services/service-metallic.png",
    imageAlt: "Decorative metallic epoxy feature floor",
  },
  {
    id: "showroom-bay",
    title: "Dealer Showroom Bay",
    category: "Commercial",
    location: "Auto Showroom",
    image: "/images/services/service-garage.png",
    imageAlt: "Auto showroom epoxy floor with reflective finish",
  },
  {
    id: "logistics-aisle",
    title: "Logistics Aisle",
    category: "Industrial",
    location: "Fulfillment Hub",
    image: "/images/services/service-industrial.png",
    imageAlt: "Logistics warehouse epoxy flooring aisle",
  },
  {
    id: "art-resin",
    title: "Art Resin Floor",
    category: "Decorative",
    location: "Private Gallery",
    image: "/images/services/service-metallic.png",
    imageAlt: "Artistic decorative epoxy resin floor",
  },
];
