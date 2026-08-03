export type CounterIcon =
  | "projects"
  | "sqft"
  | "experience"
  | "clients";

export type CounterItem = {
  id: string;
  value: string;
  label: string;
  icon: CounterIcon;
};

export const counterItems: CounterItem[] = [
  {
    id: "projects",
    value: "25K+",
    label: "Projects Completed",
    icon: "projects",
  },
  {
    id: "sqft",
    value: "2M+",
    label: "Sq Ft Installed",
    icon: "sqft",
  },
  {
    id: "experience",
    value: "10+",
    label: "Years Experience",
    icon: "experience",
  },
  {
    id: "clients",
    value: "5K+",
    label: "Happy Clients",
    icon: "clients",
  },
];
