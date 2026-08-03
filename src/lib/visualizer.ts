export type FlakeBlend = {
  id: string;
  name: string;
  // CSS background for flake texture preview + overlay
  pattern: string;
};

export type BaseColor = {
  id: string;
  name: string;
  hex: string;
};

export type FloorFinish = {
  id: "gloss" | "satin" | "matte";
  name: string;
};

export const flakeBlends: FlakeBlend[] = [
  {
    id: "storm-grey",
    name: "Storm Grey",
    pattern:
      "radial-gradient(circle at 20% 30%, #d8dce2 1.2px, transparent 1.4px), radial-gradient(circle at 70% 55%, #8b93a0 1px, transparent 1.2px), radial-gradient(circle at 45% 75%, #f2f4f7 1.4px, transparent 1.6px), radial-gradient(circle at 80% 20%, #5c6573 1px, transparent 1.2px), linear-gradient(135deg, #4a5160, #2f3540)",
  },
  {
    id: "slate-mix",
    name: "Slate Mix",
    pattern:
      "radial-gradient(circle at 25% 40%, #e8eaee 1.2px, transparent 1.4px), radial-gradient(circle at 65% 25%, #9aa3b2 1px, transparent 1.2px), radial-gradient(circle at 40% 70%, #c5cad3 1.3px, transparent 1.5px), radial-gradient(circle at 85% 60%, #6b7382 1px, transparent 1.2px), linear-gradient(135deg, #3d4452, #252a33)",
  },
  {
    id: "graphite",
    name: "Graphite",
    pattern:
      "radial-gradient(circle at 30% 35%, #f0f2f5 1.1px, transparent 1.3px), radial-gradient(circle at 60% 65%, #aeb6c2 1px, transparent 1.2px), radial-gradient(circle at 15% 80%, #7a8290 1.2px, transparent 1.4px), radial-gradient(circle at 75% 30%, #d4d8de 1px, transparent 1.2px), linear-gradient(135deg, #2a2f38, #15181e)",
  },
  {
    id: "ocean-flake",
    name: "Ocean Flake",
    pattern:
      "radial-gradient(circle at 22% 28%, #e6eef8 1.2px, transparent 1.4px), radial-gradient(circle at 68% 50%, #7ea0c4 1px, transparent 1.2px), radial-gradient(circle at 48% 78%, #b7c9dc 1.3px, transparent 1.5px), radial-gradient(circle at 82% 22%, #4d6f92 1px, transparent 1.2px), linear-gradient(135deg, #2f4054, #1a2533)",
  },
  {
    id: "ash-blend",
    name: "Ash Blend",
    pattern:
      "radial-gradient(circle at 28% 32%, #f5f5f5 1.2px, transparent 1.4px), radial-gradient(circle at 72% 58%, #b0b0b0 1px, transparent 1.2px), radial-gradient(circle at 42% 72%, #dcdcdc 1.3px, transparent 1.5px), radial-gradient(circle at 78% 25%, #8a8a8a 1px, transparent 1.2px), linear-gradient(135deg, #555555, #2e2e2e)",
  },
];

export const baseColors: BaseColor[] = [
  { id: "midnight", name: "Midnight", hex: "#1a2744" },
  { id: "charcoal", name: "Charcoal", hex: "#2b3038" },
  { id: "steel", name: "Steel", hex: "#5c6673" },
  { id: "silver", name: "Silver", hex: "#b8c0c8" },
  { id: "arctic", name: "Arctic", hex: "#eef1f5" },
];

export const finishes: FloorFinish[] = [
  { id: "gloss", name: "Gloss" },
  { id: "satin", name: "Satin" },
  { id: "matte", name: "Matte" },
];
