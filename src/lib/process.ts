export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon:
    | "consultation"
    | "prep"
    | "repair"
    | "primer"
    | "install"
    | "topcoat"
    | "inspect"
    | "delivery";
};

export const processSteps: ProcessStep[] = [
  {
    id: "consultation",
    step: "01",
    title: "Consultation",
    description: "We understand your needs",
    icon: "consultation",
  },
  {
    id: "surface-preparation",
    step: "02",
    title: "Surface Preparation",
    description: "Deep clean and proper prep",
    icon: "prep",
  },
  {
    id: "crack-repair",
    step: "03",
    title: "Crack Repair",
    description: "Fix and reinforce imperfections",
    icon: "repair",
  },
  {
    id: "primer-application",
    step: "04",
    title: "Primer Application",
    description: "Stronger adhesion for longevity",
    icon: "primer",
  },
  {
    id: "epoxy-installation",
    step: "05",
    title: "Epoxy Installation",
    description: "Expertly applied with precision",
    icon: "install",
  },
  {
    id: "protective-top-coat",
    step: "06",
    title: "Protective Top Coat",
    description: "Adds strength, shine & protection",
    icon: "topcoat",
  },
  {
    id: "quality-inspection",
    step: "07",
    title: "Quality Inspection",
    description: "We ensure perfect results",
    icon: "inspect",
  },
  {
    id: "final-delivery",
    step: "08",
    title: "Final Delivery",
    description: "Move in and enjoy",
    icon: "delivery",
  },
];
