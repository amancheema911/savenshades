export type OurWorkCategory =
  | "All"
  | "Garage Floors"
  | "Commercial"
  | "Residential"
  | "Metallic Epoxy"
  | "Solid Epoxy"
  | "Stone Epoxy"
  | "Rubber Surfacing";

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
  "Garage Floors",
  "Commercial",
  "Residential",
  "Metallic Epoxy",
  "Solid Epoxy",
  "Stone Epoxy",
  "Rubber Surfacing",
];

/** Featured project IDs shown on the homepage Our Work section */
export const featuredOurWorkIds = [
  "garage-showroom",
  "stone-entry",
  "solid-epoxy-showroom",
  "metallic-lounge",
  "residential-living"
];

export const ourWorkItems: OurWorkItem[] = [
  {
    id: "garage-showroom",
    title: "Collector Garage",
    category: "Garage Floors",
    location: "Private Residence",
    image: "/images/services/garage-1.webp",
    imageAlt: "Luxury car on a finished garage epoxy floor",
    description: "Showroom-grade garage flooring built for collectors — durable coating, high-gloss finish, and a surface that stays easy to clean through seasons of driving.",
    images: [
      {
        src: "/images/services/garage.webp",
        alt: "Luxury car on a finished garage epoxy floor",
      },
      {
        src: "/images/services/garage-2.webp",
        alt: "Wide view of the completed garage floor",
      },
      {
        src: "/images/services/garage-3.webp",
        alt: "Smooth garage floor under natural light",
      },
    ],
  },
  {
    id: "residential-living",
    title: "Open-Concept Home",
    category: "Residential",
    location: "Custom Home",
    image: "/images/services/residential-floor-2.webp",
    imageAlt: "Residential home with polished epoxy flooring",
    description: "Beautiful residential epoxy for everyday home life — seamless transitions, a refined sheen, and a finish tough enough for kids, pets, and daily wear.",
    images: [
      {
        src: "/images/services/residential-floor-1.webp",
        alt: "Residential home with polished epoxy flooring",
      },
      {
        src: "/images/services/residential-floor-3.webp",
        alt: "Floor detail in natural daylight",
      },
    ],
  },
  {
    id: "metallic-lounge",
    title: "Metallic Lounge",
    category: "Metallic Epoxy",
    location: "Entertainment Room",
    image: "/images/services/metalic-floor.webp",
    imageAlt: "Close-up of blue and silver metallic epoxy floor",
    description: "Stunning metallic epoxy with flowing blue and silver movement — a unique, luxurious finish that shifts with the light and anchors the whole room.",
    images: [
      {
        src: "/images/services/metalic-floor-1.webp",
        alt: "Close-up of blue and silver metallic epoxy floor",
      },
      {
        src: "/images/services/metalic-floor-2.webp",
        alt: "Metallic floor in ambient evening light",
      },
      {
        src: "/images/services/metalic-floor-3.webp",
        alt: "Lounge seating over metallic epoxy",
      },
    ],
  },
  {
    id: "stone-entry",
    title: "Stone-Look Entry",
    category: "Stone Epoxy",
    location: "Front Entry & Walk",
    image: "/images/services/stone-flooring.webp",
    imageAlt: "Stone epoxy flooring with refined aggregate texture",
    description: "Natural stone look with durable textured grip — stone epoxy that handles wet boots and outdoor transitions while keeping a refined, architectural feel.",
    images: [
      {
        src: "/images/services/stone-flooring-1.webp",
        alt: "Stone epoxy flooring with refined aggregate texture",
      },
      {
        src: "/images/services/stone-flooring-2.webp",
        alt: "Entry path with stone epoxy finish",
      },
      {
        src: "/images/services/stone-flooring-3.webp",
        alt: "Seamless stone epoxy transition at the doorway",
      },
    ],
  },
  {
    id: "rubber-surfacing",
    title: "Rubber Surfacing",
    category: "Rubber Surfacing",
    location: "Backyard Play Zone",
    image: "/images/services/rubber-surfacing-1.webp",
    imageAlt: "Rubber surfacing for recreation and activity spaces",
    description: "Soft, durable rubber surfacing for play — cushioned underfoot, easy to clean, and built to stay flat and safe in active spaces.",
    images: [
      {
        src: "/images/services/rubber-surfacing-2.webp",
        alt: "Rubber surfacing for recreation and activity spaces",
      },
      {
        src: "/images/services/rubber-surfacing-3.webp",
        alt: "Playground with rubber surfacing",
      },
    ],
  },
  {
    id: "commercial-retail",
    title: "Retail Walkway",
    category: "Commercial",
    location: "Boutique Storefront",
    image: "/images/services/service-commercial.webp",
    imageAlt: "Commercial retail epoxy flooring",
    description: "Commercial flooring for all-day shoppers — seamless epoxy that wipes down fast and keeps boutique spaces looking intentional under display lighting.",
    images: [
      {
        src: "/images/services/service-commercial.webp",
        alt: "Commercial retail epoxy flooring",
      },
      {
        src: "/images/services/service-metallic.webp",
        alt: "Display area adjacent to retail walkway",
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
