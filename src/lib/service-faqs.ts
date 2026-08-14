export type ServiceFaq = {
  question: string;
  answer: string;
};

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  "garage-floors": [
    {
      question: "How long does garage epoxy flooring last?",
      answer:
        "A properly prepped and installed Seven Shades garage system typically lasts many years with normal residential use. Longevity depends on prep quality, topcoat, UV exposure, and how vehicles and chemicals are managed.",
    },
    {
      question: "Can I park cars soon after install?",
      answer:
        "Light foot traffic is often possible within 24–48 hours. Vehicle parking is usually recommended after 48–72 hours depending on temperature and the system we install — we confirm exact timing at handoff.",
    },
    {
      question: "Will epoxy peel from my garage floor?",
      answer:
        "Peeling is almost always a prep or moisture issue — not epoxy itself. We grind for mechanical adhesion, remediate contaminants, and only install when conditions support a lasting bond.",
    },
    {
      question: "Solid color or flake — which should I choose?",
      answer:
        "Choose solid for a clean showroom look. Choose full flake when you want more grip and a surface that hides dust and micro-scuffs between cleanings. We’ll recommend based on how you use the space.",
    },
  ],
  commercial: [
    {
      question: "How long does commercial epoxy flooring last?",
      answer:
        "A properly prepped Seven Shades commercial system is designed for years of daily foot traffic. Lifespan depends on prep quality, traffic volume, cleaning chemicals, and the finish system specified for the space.",
    },
    {
      question: "Can you install without fully shutting down my business?",
      answer:
        "Often yes. We plan phased installs and off-hour work whenever possible. Exact sequencing depends on square footage, access, and cure windows — we’ll map a schedule around your operations.",
    },
    {
      question: "Will the floor hold up to carts, chairs, and cleaning chemicals?",
      answer:
        "Commercial systems are selected for abrasion and chemical resistance. We’ll recommend solid, flake, or quartz based on how the space is used and how aggressively it is cleaned.",
    },
    {
      question: "Solid, flake, or quartz — which is best for commercial spaces?",
      answer:
        "Solid fits polished offices and showrooms. Flake adds grip and hides micro-wear in high-traffic retail. Quartz suits corridors and service zones that need maximum toughness. We’ll match the system to your use case.",
    },
  ],
  residential: [
    {
      question: "How long does residential epoxy flooring last?",
      answer:
        "A properly prepped Seven Shades residential system is built for years of normal home use. Lifespan depends on prep quality, traffic, UV exposure, chemicals, and how the space is maintained.",
    },
    {
      question: "Which rooms in my home can use epoxy?",
      answer:
        "Garages, basements, mudrooms, laundry rooms, workshops, and many living-area conversions are strong fits. We’ll confirm moisture, slab condition, and the best finish for each room.",
    },
    {
      question: "Will epoxy peel in a garage or basement?",
      answer:
        "Peeling is almost always a prep or moisture issue — not epoxy itself. We grind for mechanical adhesion, address contaminants, and only install when conditions support a lasting bond.",
    },
    {
      question: "Solid, flake, or metallic — which should I choose?",
      answer:
        "Solid suits clean modern looks. Flake adds grip and hides dust between cleanings. Metallic creates a distinctive feature floor. We’ll recommend based on room use and the style you want.",
    },
  ],
  "metallic-epoxy": [
    {
      question: "Is every metallic epoxy floor unique?",
      answer:
        "Yes. Metallic pigment is manipulated during install, so pattern and movement vary by space, technique, and color blend. We aim for a designed look — not a factory-repeat print.",
    },
    {
      question: "Can metallic epoxy work in homes and showrooms?",
      answer:
        "Absolutely. Metallic systems are popular for living areas, studios, collector bays, boutiques, and showrooms where the floor itself is part of the design statement.",
    },
    {
      question: "Will the metallic finish scratch or dull easily?",
      answer:
        "A quality UV clear protects the metallic layer. Like any premium finish, avoiding harsh abrasives and following care guidance keeps clarity and depth looking sharp longer.",
    },
    {
      question: "How do I choose the right metallic colors?",
      answer:
        "We start with lighting, wall tones, and the mood you want. Sample boards and color consults help lock in cool, warm, or high-contrast blends before install day.",
    },
  ],
  "solid-epoxy": [
    {
      question: "What’s the difference between solid epoxy and flake?",
      answer:
        "Solid epoxy is continuous color with a clear topcoat — clean and modern. Flake adds multi-tone chips for extra camouflage and texture. Choose solid when you want a showroom look; choose flake when you want more grip and forgiving daily wear.",
    },
    {
      question: "Will solid color show scratches and dirt more?",
      answer:
        "Solid floors can show dust and micro-scuffs more than flake, which also means they look freshly cleaned quickly. We recommend a maintenance plan and the right clear sheen for how aggressively the space is used.",
    },
    {
      question: "Can solid epoxy work in a garage?",
      answer:
        "Yes. Solid systems are popular in residential and collector garages when a clean showroom finish is the priority. We’ll confirm hot-tire resistance, UV clearance, and optional light texture for wet weather.",
    },
    {
      question: "Gloss or satin — which should I choose?",
      answer:
        "Gloss maximizes depth and light bounce. Satin softens reflection while keeping a refined finish. We’ll sample both against your lighting and wall colors before install.",
    },
  ],
  "stone-epoxy": [
    {
      question: "How is stone epoxy different from flake or solid?",
      answer:
        "Stone epoxy uses mineral aggregate for a natural stone-inspired look and stronger textured grip. Solid is continuous color. Flake uses decorative chips for camouflage. We recommend stone when you want texture, traction, and a stone aesthetic.",
    },
    {
      question: "Where does stone epoxy work best?",
      answer:
        "It’s a strong fit for home entries, mudrooms, basements, garages with wet weather use, retail floors, and commercial service areas that need grip without looking purely industrial.",
    },
    {
      question: "Will stone epoxy feel too rough underfoot?",
      answer:
        "Texture is selectable. Fine stone profiles feel more refined, while bolder builds maximize slip resistance. We’ll match the profile to footwear, traffic, and how wet the space gets.",
    },
    {
      question: "How long does stone epoxy flooring last?",
      answer:
        "A properly prepped Seven Shades stone system is engineered for years of residential and commercial use. Lifespan depends on prep quality, traffic, cleaning chemicals, and the aggregate profile installed.",
    },
  ],
  "rubber-surfacing": [
    {
      question: "Where is rubber surfacing the best fit?",
      answer:
        "Gyms, home fitness rooms, daycare and play areas, recreational spaces, and outdoor play zones. We recommend rubber when impact absorption, grip, and comfort matter more than a hard epoxy showroom finish.",
    },
    {
      question: "How is rubber different from epoxy flooring?",
      answer:
        "Epoxy creates a hard, seamless resin surface. Rubber is softer and more forgiving underfoot, with better impact cushioning and noise reduction — ideal for activity spaces rather than vehicle or industrial traffic.",
    },
    {
      question: "Tiles, rolls, or poured — which should I choose?",
      answer:
        "Tiles are modular and quick. Rolls give a cleaner continuous look indoors. Poured systems suit outdoor play areas and custom shapes. We’ll match the system to use, budget, and maintenance preferences.",
    },
    {
      question: "How do I maintain rubber surfacing?",
      answer:
        "Sweep or vacuum regularly and damp mop with mild cleaners. Avoid harsh solvents that can dry out rubber. We provide a care plan based on the exact system installed.",
    },
  ],
};
