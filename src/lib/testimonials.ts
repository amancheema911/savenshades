export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "james-r",
    quote: "Our garage looks absolutely incredible! The team was professional, on time, and the quality is unmatched.",
    name: "James R.",
    role: "Homeowner",
    initials: "JR",
    avatarColor: "#3B82F6",
  },
  {
    id: "sarah-l",
    quote: "Best investment for our showroom. The metallic epoxy floor is a true showstopper!",
    name: "Sarah L.",
    role: "Business Owner",
    initials: "SL",
    avatarColor: "#8B5CF6",
  },
  {
    id: "michael-t",
    quote: "Durable, beautiful and easy to clean. I highly recommend their epoxy flooring!",
    name: "Michael T.",
    role: "Facility Manager",
    initials: "MT",
    avatarColor: "#0EA5E9",
  },
  {
    id: "priya-k",
    quote: "They turned our dull concrete into a mirror finish. Clean workmanship from start to finish.",
    name: "Priya K.",
    role: "Homeowner",
    initials: "PK",
    avatarColor: "#EC4899",
  },
  {
    id: "daniel-m",
    quote: "Our warehouse floors hold up under heavy traffic every day. Outstanding durability.",
    name: "Daniel M.",
    role: "Operations Lead",
    initials: "DM",
    avatarColor: "#14B8A6",
  },
  {
    id: "emily-c",
    quote: "The flake system looks premium and is so easy to maintain. Guests always ask about it.",
    name: "Emily C.",
    role: "Boutique Owner",
    initials: "EC",
    avatarColor: "#F59E0B",
  },
];

export const testimonialRating = {
  score: "4.9/5",
  countLabel: "(100+ Reviews)",
  stars: 5,
};
