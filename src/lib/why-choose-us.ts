export type WhyChooseFeature = {
  id: string;
  title: string;
  description: string;
  icon:
    | "lifetime"
    | "chemical"
    | "scratch"
    | "waterproof"
    | "uv"
    | "fast"
    | "maintenance"
    | "slip"
    | "custom";
};

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: "lifetime-durability",
    title: "Lifetime Durability",
    description: "Built to last for decades",
    icon: "lifetime",
  },
  {
    id: "chemical-resistant",
    title: "Chemical Resistant",
    description: "Withstands harsh chemicals",
    icon: "chemical",
  },
  {
    id: "scratch-resistant",
    title: "Scratch Resistant",
    description: "Tougher than concrete",
    icon: "scratch",
  },
  {
    id: "waterproof",
    title: "Waterproof",
    description: "100% moisture protection",
    icon: "waterproof",
  },
  {
    id: "uv-resistant",
    title: "UV Resistant",
    description: "No yellowing or fading",
    icon: "uv",
  },
  {
    id: "fast-installation",
    title: "Fast Installation",
    description: "Get it done right, fast",
    icon: "fast",
  },
  {
    id: "easy-maintenance",
    title: "Easy Maintenance",
    description: "Simple to clean",
    icon: "maintenance",
  },
  // {
  //   id: "slip-resistant",
  //   title: "Slip Resistant",
  //   description: "Safer for every environment",
  //   icon: "slip",
  // },
  {
    id: "custom-finishes",
    title: "Custom Finishes",
    description: "Unlimited style options",
    icon: "custom",
  },
];
