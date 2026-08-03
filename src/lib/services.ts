export type ServiceIcon =
  | "garage"
  | "commercial"
  | "industrial"
  | "metallic"
  | "flake"
  | "quartz"
  | "decorative";

export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    id: "garage-floors",
    title: "Garage Floors",
    description: "Durable, sleek and easy to clean.",
    href: "/services/garage-floors",
    image: "/images/services/service-garage.png",
    imageAlt: "Luxury car on a finished garage epoxy floor",
    icon: "garage",
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "High performance for high traffic.",
    href: "/services/commercial",
    image: "/images/services/service-commercial.png",
    imageAlt: "Bright commercial interior with epoxy flooring",
    icon: "commercial",
  },
  {
    id: "industrial",
    title: "Industrial",
    description: "Built to withstand the toughest conditions.",
    href: "/services/industrial",
    image: "/images/services/service-industrial.png",
    imageAlt: "Industrial warehouse with polished epoxy flooring",
    icon: "industrial",
  },
  {
    id: "metallic-epoxy",
    title: "Metallic Epoxy",
    description: "Stunning, unique and luxurious finish.",
    href: "/services/metallic-epoxy",
    image: "/images/services/service-metallic.png",
    imageAlt: "Close-up of blue and silver metallic epoxy floor",
    icon: "metallic",
  },
  {
    id: "flake-flooring",
    title: "Flake Flooring",
    description: "Texture, grip and lasting style.",
    href: "/services/flake-flooring",
    image: "/images/services/service-garage.png",
    imageAlt: "Decorative flake epoxy flooring finish",
    icon: "flake",
  },
  {
    id: "quartz-flooring",
    title: "Quartz Flooring",
    description: "Heavy-duty protection with refined look.",
    href: "/services/quartz-flooring",
    image: "/images/services/service-commercial.png",
    imageAlt: "Quartz epoxy flooring in a commercial space",
    icon: "quartz",
  },
  {
    id: "decorative",
    title: "Decorative Flooring",
    description: "Custom designs that elevate any room.",
    href: "/services/decorative",
    image: "/images/services/service-metallic.png",
    imageAlt: "Decorative epoxy flooring with artistic finish",
    icon: "decorative",
  },
  
];

/** Home section carousel uses the first four featured services. */
export const featuredServices = services.slice(0, 4);
