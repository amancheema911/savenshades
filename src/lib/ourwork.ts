export type OurWorkCategory =
  | "All"
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Decorative";

export type OurWorkImage = {
  src: string;
  alt: string;
};

export type OurWorkItem = {
  id: string;
  title: string;
  category: Exclude<OurWorkCategory, "All">;
  location: string;
  image: string;
  imageAlt: string;
  description: string;
  images: OurWorkImage[];
};

export const ourWorkCategories: OurWorkCategory[] = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Decorative",
];

/** Featured project IDs shown on the homepage Our Work section */
export const featuredOurWorkIds = [
  "warehouse-polish",
  "commercial-suite",
  "garage-showroom",
  "metallic-lounge",
] as const;

export const ourWorkItems: OurWorkItem[] = [
  {
    id: "garage-showroom",
    title: "Garage Showroom",
    category: "Residential",
    location: "Private Residence",
    image: "/images/services/service-garage.png",
    imageAlt: "Luxury garage with finished epoxy floor",
    description:
      "A showroom-grade garage floor built for collectors. Full flake broadcast, high-build clear coat, and a mirror finish that makes every vehicle the centerpiece.",
    images: [
      {
        src: "/images/services/service-garage.png",
        alt: "Luxury garage with finished epoxy floor",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Wide view of the completed garage epoxy surface",
      },
      {
        src: "/images/services/service-metallic.png",
        alt: "Close detail of the garage floor flake system",
      },
    ],
  },
  {
    id: "metallic-lounge",
    title: "Metallic Lounge",
    category: "Decorative",
    location: "Hospitality Suite",
    image: "/images/services/service-metallic.png",
    imageAlt: "Metallic epoxy floor with blue and silver swirls",
    description:
      "Hand-worked metallic epoxy with flowing blue and silver movement. Designed as a lounge feature floor that reads luxurious under day and evening light.",
    images: [
      {
        src: "/images/services/service-metallic.png",
        alt: "Metallic epoxy floor with blue and silver swirls",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Metallic lounge floor in ambient light",
      },
      {
        src: "/images/services/service-commercial.png",
        alt: "Adjacent lounge space with complementary finish",
      },
    ],
  },
  {
    id: "commercial-suite",
    title: "Commercial Suite",
    category: "Commercial",
    location: "Office Lobby",
    image: "/images/services/service-commercial.png",
    imageAlt: "Bright commercial space with epoxy flooring",
    description:
      "Bright, clean commercial flooring for a high-traffic lobby. Seamless epoxy that resists scuffs, cleans fast, and keeps the space looking brand-new.",
    images: [
      {
        src: "/images/services/service-commercial.png",
        alt: "Bright commercial space with epoxy flooring",
      },
      {
        src: "/images/services/service-industrial.png",
        alt: "High-traffic corridor within the commercial suite",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Lobby seating area over finished epoxy floor",
      },
    ],
  },
  {
    id: "warehouse-polish",
    title: "Warehouse Polish",
    category: "Industrial",
    location: "Distribution Center",
    image: "/images/services/service-industrial.png",
    imageAlt: "High-gloss industrial warehouse epoxy floor",
    description:
      "Industrial-grade epoxy built for forklifts, pallet traffic, and 24/7 logistics. High-gloss finish improves visibility while staying tough under heavy loads.",
    images: [
      {
        src: "/images/services/service-industrial.png",
        alt: "High-gloss industrial warehouse epoxy floor",
      },
      {
        src: "/images/services/service-commercial.png",
        alt: "Polished warehouse aisle under work lighting",
      },
      {
        src: "/images/services/service-garage.png",
        alt: "Loading bay with durable epoxy coating",
      },
    ],
  },
  {
    id: "hero-install",
    title: "Luxury Living Floor",
    category: "Residential",
    location: "Custom Home",
    image: "/images/hero-epoxy-floor.png",
    imageAlt: "Premium epoxy floor in a luxury residential space",
    description:
      "A custom residential install with a refined gloss level and seamless transitions. Soft enough in tone for living spaces, tough enough for daily family life.",
    images: [
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Premium epoxy floor in a luxury residential space",
      },
      {
        src: "/images/services/service-metallic.png",
        alt: "Living area floor detail with natural light",
      },
      {
        src: "/images/services/service-garage.png",
        alt: "Connected mudroom epoxy transition",
      },
    ],
  },
  {
    id: "flake-garage",
    title: "Flake System Garage",
    category: "Residential",
    location: "Car Collector Bay",
    image: "/images/services/service-garage.png",
    imageAlt: "Flake epoxy garage floor with high-gloss finish",
    description:
      "Full-broadcast flake system for a collector bay — texture for grip, UV-stable clear for lasting gloss, and a finish that hides dust between washes.",
    images: [
      {
        src: "/images/services/service-garage.png",
        alt: "Flake epoxy garage floor with high-gloss finish",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Collector bay overview with flake epoxy",
      },
    ],
  },
  {
    id: "retail-floor",
    title: "Retail Walkway",
    category: "Commercial",
    location: "Boutique Storefront",
    image: "/images/services/service-commercial.png",
    imageAlt: "Commercial retail epoxy flooring",
    description:
      "Seamless retail walkway flooring that handles foot traffic all day without looking worn. Easy wipe-downs and a polished look for boutique spaces.",
    images: [
      {
        src: "/images/services/service-commercial.png",
        alt: "Commercial retail epoxy flooring",
      },
      {
        src: "/images/services/service-metallic.png",
        alt: "Retail display area over epoxy walkway",
      },
    ],
  },
  {
    id: "plant-floor",
    title: "Plant Floor System",
    category: "Industrial",
    location: "Manufacturing Facility",
    image: "/images/services/service-industrial.png",
    imageAlt: "Industrial epoxy floor built for heavy traffic",
    description:
      "Chemical-resistant plant floor system rated for heavy equipment and spill exposure. Installed for fast return-to-service with minimal downtime.",
    images: [
      {
        src: "/images/services/service-industrial.png",
        alt: "Industrial epoxy floor built for heavy traffic",
      },
      {
        src: "/images/services/service-commercial.png",
        alt: "Plant walkway with industrial epoxy finish",
      },
    ],
  },
  {
    id: "metallic-feature",
    title: "Metallic Feature Slab",
    category: "Decorative",
    location: "Design Studio",
    image: "/images/services/service-metallic.png",
    imageAlt: "Decorative metallic epoxy feature floor",
    description:
      "A statement metallic slab for a design studio — layered pigments, controlled flow patterns, and a crystal-clear topcoat for depth and drama.",
    images: [
      {
        src: "/images/services/service-metallic.png",
        alt: "Decorative metallic epoxy feature floor",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Studio corner featuring metallic epoxy slab",
      },
    ],
  },
  {
    id: "showroom-bay",
    title: "Dealer Showroom Bay",
    category: "Commercial",
    location: "Auto Showroom",
    image: "/images/services/service-garage.png",
    imageAlt: "Auto showroom epoxy floor with reflective finish",
    description:
      "Reflective showroom bay flooring that puts inventory on display. Smooth, durable, and detailed for crisp brand presentation under showroom lights.",
    images: [
      {
        src: "/images/services/service-garage.png",
        alt: "Auto showroom epoxy floor with reflective finish",
      },
      {
        src: "/images/services/service-commercial.png",
        alt: "Dealer showroom bay under display lighting",
      },
    ],
  },
  {
    id: "logistics-aisle",
    title: "Logistics Aisle",
    category: "Industrial",
    location: "Fulfillment Hub",
    image: "/images/services/service-industrial.png",
    imageAlt: "Logistics warehouse epoxy flooring aisle",
    description:
      "Marked logistics aisle with abrasion-resistant coating for continuous picker and cart traffic. Built to stay bright and readable under warehouse LEDs.",
    images: [
      {
        src: "/images/services/service-industrial.png",
        alt: "Logistics warehouse epoxy flooring aisle",
      },
      {
        src: "/images/services/service-commercial.png",
        alt: "Fulfillment aisle with durable epoxy coating",
      },
    ],
  },
  {
    id: "art-resin",
    title: "Art Resin Floor",
    category: "Decorative",
    location: "Private Space",
    image: "/images/services/service-metallic.png",
    imageAlt: "Artistic decorative epoxy resin floor",
    description:
      "Space-ready art resin flooring with custom color movement. Designed as a quiet backdrop for the collection while still reading as a finished art piece.",
    images: [
      {
        src: "/images/services/service-metallic.png",
        alt: "Artistic decorative epoxy resin floor",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Private space with art resin floor",
      },
    ],
  },
];

export function getFeaturedOurWorkItems(): OurWorkItem[] {
  return featuredOurWorkIds
    .map((id) => ourWorkItems.find((item) => item.id === id))
    .filter((item): item is OurWorkItem => Boolean(item));
}

export function getOurWorkItemById(id: string): OurWorkItem | undefined {
  return ourWorkItems.find((item) => item.id === id);
}
