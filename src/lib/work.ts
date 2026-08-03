export type WorkProject = {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const workProjects: WorkProject[] = [
  {
    id: "warehouse-polish",
    title: "Warehouse Polish",
    category: "Industrial",
    image: "/images/services/service-industrial.png",
    imageAlt: "High-gloss industrial warehouse epoxy floor",
    href: "/gallery/warehouse-polish",
  },
  {
    id: "commercial-suite",
    title: "Commercial Suite",
    category: "Commercial",
    image: "/images/services/service-commercial.png",
    imageAlt: "Bright commercial space with epoxy flooring",
    href: "/gallery/commercial-suite",
  },
  {
    id: "garage-showroom",
    title: "Garage Showroom",
    category: "Residential",
    image: "/images/services/service-garage.png",
    imageAlt: "Luxury garage with finished epoxy floor",
    href: "/gallery/garage-showroom",
  },
  {
    id: "metallic-lounge",
    title: "Metallic Lounge",
    category: "Decorative",
    image: "/images/services/service-metallic.png",
    imageAlt: "Metallic epoxy floor with blue and silver swirls",
    href: "/gallery/metallic-lounge",
  },
];
