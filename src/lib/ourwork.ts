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
  "commercial-suite",
  "solid-epoxy-showroom",
  "metallic-lounge",
] as const;

export const ourWorkItems: OurWorkItem[] = [
  {
    id: "garage-showroom",
    title: "Collector Garage",
    category: "Garage Floors",
    location: "Private Residence",
    image: "/images/services/service-garage.png",
    imageAlt: "Luxury car on a finished garage epoxy floor",
    description:
      "Showroom-grade garage flooring built for collectors — durable coating, high-gloss finish, and a surface that stays easy to clean through seasons of driving.",
    images: [
      {
        src: "/images/services/service-garage.png",
        alt: "Luxury car on a finished garage epoxy floor",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Wide view of the completed garage floor",
      },
      {
        src: "/images/services/solid-epoxy.jpg",
        alt: "Smooth garage floor under natural light",
      },
    ],
  },
  {
    id: "commercial-suite",
    title: "Office Lobby",
    category: "Commercial",
    location: "Corporate Building",
    image: "/images/services/service-commercial.png",
    imageAlt: "Bright commercial interior with epoxy flooring",
    description:
      "High-performance commercial epoxy for a busy lobby — seamless, scuff-resistant, and quick to maintain so the space stays polished through daily foot traffic.",
    images: [
      {
        src: "/images/services/service-commercial.png",
        alt: "Bright commercial interior with epoxy flooring",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Lobby seating area over finished epoxy floor",
      },
      {
        src: "/images/services/service-garage.png",
        alt: "Adjacent corridor with matching commercial finish",
      },
    ],
  },
  {
    id: "residential-living",
    title: "Open-Concept Home",
    category: "Residential",
    location: "Custom Home",
    image: "/images/services/residential-floor.jpg",
    imageAlt: "Residential home with polished epoxy flooring",
    description:
      "Beautiful residential epoxy for everyday home life — seamless transitions, a refined sheen, and a finish tough enough for kids, pets, and daily wear.",
    images: [
      {
        src: "/images/services/residential-floor.jpg",
        alt: "Residential home with polished epoxy flooring",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Living space with seamless epoxy floor",
      },
      {
        src: "/images/services/service-metallic.png",
        alt: "Floor detail in natural daylight",
      },
    ],
  },
  {
    id: "metallic-lounge",
    title: "Metallic Lounge",
    category: "Metallic Epoxy",
    location: "Entertainment Room",
    image: "/images/services/service-metallic.png",
    imageAlt: "Close-up of blue and silver metallic epoxy floor",
    description:
      "Stunning metallic epoxy with flowing blue and silver movement — a unique, luxurious finish that shifts with the light and anchors the whole room.",
    images: [
      {
        src: "/images/services/service-metallic.png",
        alt: "Close-up of blue and silver metallic epoxy floor",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Metallic floor in ambient evening light",
      },
      {
        src: "/images/services/service-commercial.png",
        alt: "Lounge seating over metallic epoxy",
      },
    ],
  },
  {
    id: "solid-epoxy-showroom",
    title: "Solid Color Garage",
    category: "Solid Epoxy",
    location: "Private Garage",
    image: "/images/services/solid-epoxy.jpg",
    imageAlt: "Solid epoxy flooring finish",
    description:
      "Clean continuous color with lasting clarity — solid epoxy and a high-build clear coat for a seamless garage floor without flake texture.",
    images: [
      {
        src: "/images/services/solid-epoxy.jpg",
        alt: "Solid epoxy flooring finish",
      },
      {
        src: "/images/services/service-garage.png",
        alt: "Solid color epoxy in a finished garage",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "High-gloss solid epoxy surface",
      },
    ],
  },
  {
    id: "stone-entry",
    title: "Stone-Look Entry",
    category: "Stone Epoxy",
    location: "Front Entry & Walk",
    image: "/images/services/stone-epoxy.jpg",
    imageAlt: "Stone epoxy flooring with refined aggregate texture",
    description:
      "Natural stone look with durable textured grip — stone epoxy that handles wet boots and outdoor transitions while keeping a refined, architectural feel.",
    images: [
      {
        src: "/images/services/stone-epoxy.jpg",
        alt: "Stone epoxy flooring with refined aggregate texture",
      },
      {
        src: "/images/services/residential-floor.jpg",
        alt: "Entry path with stone epoxy finish",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Seamless stone epoxy transition at the doorway",
      },
    ],
  },
  {
    id: "rubber-surfacing",
    title: "Rubber Surfacing",
    category: "Rubber Surfacing",
    location: "Backyard Play Zone",
    image: "/images/services/rubber-surfacing.jpg",
    imageAlt: "Rubber surfacing for recreation and activity spaces",
    description:
      "Soft, durable rubber surfacing for play — cushioned underfoot, easy to clean, and built to stay flat and safe in active spaces.",
    images: [
      {
        src: "/images/services/rubber-surfacing.jpg",
        alt: "Rubber surfacing for recreation and activity spaces",
      },
      {
        src: "/images/services/service-commercial.png",
        alt: "Playground with rubber surfacing",
      },
    ],
  },
  {
    id: "commercial-retail",
    title: "Retail Walkway",
    category: "Commercial",
    location: "Boutique Storefront",
    image: "/images/services/service-commercial.png",
    imageAlt: "Commercial retail epoxy flooring",
    description:
      "Commercial flooring for all-day shoppers — seamless epoxy that wipes down fast and keeps boutique spaces looking intentional under display lighting.",
    images: [
      {
        src: "/images/services/service-commercial.png",
        alt: "Commercial retail epoxy flooring",
      },
      {
        src: "/images/services/service-metallic.png",
        alt: "Display area adjacent to retail walkway",
      },
    ],
  },
  {
    id: "garage-workshop",
    title: "Workshop Bay",
    category: "Garage Floors",
    location: "Home Workshop",
    image: "/images/services/service-garage.png",
    imageAlt: "Durable garage workshop epoxy floor",
    description:
      "Garage floor coating for tools, spills, and project days — tough, sleek, and easy to sweep so the workshop stays ready for the next build.",
    images: [
      {
        src: "/images/services/service-garage.png",
        alt: "Durable garage workshop epoxy floor",
      },
      {
        src: "/images/services/solid-epoxy.jpg",
        alt: "Workshop floor with clean epoxy finish",
      },
    ],
  },
  {
    id: "metallic-studio",
    title: "Design Studio Floor",
    category: "Metallic Epoxy",
    location: "Creative Studio",
    image: "/images/services/service-metallic.png",
    imageAlt: "Decorative metallic epoxy feature floor",
    description:
      "Layered metallic pigments and controlled flow for a one-of-a-kind studio slab — depth, drama, and a crystal-clear topcoat for a true signature floor.",
    images: [
      {
        src: "/images/services/service-metallic.png",
        alt: "Decorative metallic epoxy feature floor",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Studio corner featuring metallic epoxy",
      },
    ],
  },
  {
    id: "rubber-play",
    title: "Play Area Surface",
    category: "Rubber Surfacing",
    location: "Backyard Play Zone",
    image: "/images/services/rubber-surfacing.jpg",
    imageAlt: "Rubber surfacing in a children's play area",
    description:
      "Impact-friendly rubber surfacing for play spaces — consistent cushion, weather-ready durability, and colors that define safe zones for kids.",
    images: [
      {
        src: "/images/services/rubber-surfacing.jpg",
        alt: "Rubber surfacing in a children's play area",
      },
    ],
  },
  {
    id: "residential-basement",
    title: "Finished Basement",
    category: "Residential",
    location: "Family Home",
    image: "/images/services/residential-floor.jpg",
    imageAlt: "Residential basement with epoxy flooring",
    description:
      "Residential epoxy that turns a basement into livable square footage — moisture-aware prep, seamless coat, and a finish that feels at home with furniture and rugs.",
    images: [
      {
        src: "/images/services/residential-floor.jpg",
        alt: "Residential basement with epoxy flooring",
      },
      {
        src: "/images/hero-epoxy-floor.png",
        alt: "Basement lounge over epoxy floor",
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
