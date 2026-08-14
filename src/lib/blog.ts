export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  id: string;
  /** Used as the `/blog/[slug]` URL segment */
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** ISO 8601 date used for structured data (`datePublished`) */
  publishedAt: string;
  author: string;
  authorRole: string;
  image: string;
  imageAlt: string;
  /** Article body — one paragraph per entry */
  content: string[];
  keyTakeaways?: string[];
  faqs?: BlogFaq[];
};

export const blogCategories = [
  "All",
  "Buying Guide",
  "Maintenance",
  "Installation",
  "Comparisons",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts: BlogPost[] = [
  {
    id: "signs-garage-floor-needs-epoxy",
    slug: "signs-garage-floor-needs-epoxy",
    title: "5 Signs Your Garage Floor Needs Epoxy",
    excerpt:
      "Cracking, staining, and dusting concrete are early warnings. Here's how to tell your garage is overdue for a proper epoxy system.",
    category: "Buying Guide",
    date: "Jul 14, 2026",
    publishedAt: "2026-07-14",
    author: "Seven Shades Team",
    authorRole: "Flooring Specialists",
    image: "/images/services/garage-1.webp",
    imageAlt: "Cracked garage concrete floor before epoxy installation",
    content: [
      "Bare concrete looks fine for a while — until it doesn't. Most homeowners don't think about their garage floor until it's cracking, staining, or shedding a fine gray dust across every tire and tool box in sight. If any of that sounds familiar, your slab is telling you it's time for a real system, not another coat of paint.",
      "The most obvious sign is concrete dusting — that chalky residue that appears on shoes and tires. It's caused by the top layer of the slab breaking down under normal wear, and it only gets worse with time. A properly installed epoxy system seals the surface completely, so dusting stops for good.",
      "Cracking and pitting are next. Hairline cracks might seem cosmetic, but they let moisture in, which accelerates freeze-thaw damage in colder months. We repair and fill these before any coating goes down, so the finished floor doesn't just look better — it's structurally sound underneath.",
      "Oil and chemical staining is another giveaway. Bare concrete is porous, so spills soak in and become permanent. An epoxy system is non-porous and chemical-resistant, meaning spills wipe up instead of sinking in.",
      "Finally, if your garage floor just looks tired — dull, patchy, or inconsistent in color — that's reason enough on its own. A finished epoxy floor changes how the whole space feels, whether it's parking, a workshop, or weekend project space.",
    ],
    keyTakeaways: [
      "Dusting, cracking, and staining are all signs your slab needs more than paint.",
      "Hairline cracks let in moisture and get worse with freeze-thaw cycles.",
      "Epoxy seals the surface completely, stopping dust and stains at the source.",
    ],
    faqs: [
      {
        question: "Can epoxy be installed over a cracked garage floor?",
        answer:
          "Yes — we repair and fill cracks as part of the prep process before any coating goes down, so the finished floor is both durable and crack-free.",
      },
      {
        question: "How do I know if it's dusting or just dirt?",
        answer:
          "Dusting leaves a fine gray powder on tires and shoes that comes back even after sweeping. If it returns within a day or two of cleaning, that's concrete dust, not surface dirt.",
      },
    ],
  },
  {
    id: "how-long-does-epoxy-last",
    slug: "how-long-does-epoxy-last",
    title: "How Long Does Epoxy Flooring Really Last?",
    excerpt:
      "Prep quality, traffic, and topcoat all affect lifespan. Here's what actually determines how many years you get from your floor.",
    category: "Buying Guide",
    date: "Jul 30, 2026",
    publishedAt: "2026-07-30",
    author: "Seven Shades Team",
    authorRole: "Flooring Specialists",
    image: "/images/services/stone-flooring.webp",
    imageAlt: "Durable stone epoxy flooring in a commercial space",
    content: [
      "\"How long will it last?\" is the most common question we get, and the honest answer is: it depends far more on the install than the product. A well-prepped, professionally installed epoxy floor routinely lasts 10–20+ years. A rushed one on an unprepared slab can start failing within a couple of seasons.",
      "Surface preparation is the single biggest factor. Diamond grinding opens the concrete's pores so the epoxy mechanically bonds to the slab instead of just sitting on top of it. Skip this step — or use acid etching instead — and you're building on a weaker foundation no matter how good the epoxy itself is.",
      "Traffic and use matter too. A residential garage with two cars sees very different wear than a commercial kitchen or an industrial bay with forklifts. That's why we specify different topcoat thicknesses and chemistries (epoxy vs. polyaspartic vs. polyurethane) depending on how hard the floor will actually work.",
      "UV exposure is an overlooked variable. Garages with big windows or bay doors that let in direct sunlight need a UV-stable topcoat, or standard epoxy clears can amber and yellow over the years. We factor natural light into the spec before we ever open a bucket.",
      "The maintenance side matters less than people expect, but it still counts. Regular dust-mopping and prompt cleanup of harsh chemicals will always extend the life of any floor system — but a floor installed correctly the first time doesn't rely on perfect maintenance to hold up.",
    ],
    keyTakeaways: [
      "Diamond grinding for a mechanical bond matters more than any single product choice.",
      "Topcoat chemistry should match real-world traffic — residential, commercial, or industrial.",
      "UV-stable clears prevent ambering in garages with direct sunlight exposure.",
    ],
  },
  {
    id: "rubber-vs-epoxy-for-gyms",
    slug: "rubber-vs-epoxy-for-gyms",
    title: "Rubber Surfacing vs. Epoxy: Which Is Right for Your Gym?",
    excerpt:
      "Impact absorption or hard-wearing durability? We compare rubber and epoxy systems for home and commercial fitness spaces.",
    category: "Comparisons",
    date: "Aug 4, 2026",
    publishedAt: "2026-08-04",
    author: "Seven Shades Team",
    authorRole: "Flooring Specialists",
    image: "/images/services/rubber-surfacing.webp",
    imageAlt: "Rubber surfacing installed in a home gym",
    content: [
      "Home and commercial gyms have flooring needs that don't quite match a typical garage or living space — dropped weights, repetitive impact, and moisture from workouts all come into play. Rubber surfacing and epoxy both hold up here, but they solve for different priorities.",
      "Rubber surfacing is built for impact. It absorbs shock from dropped weights, cushions joints during high-rep training, and dampens noise — genuinely useful in a home gym above a living space or in a shared commercial building. It also naturally resists slipping, even when wet.",
      "Epoxy, on the other hand, is the harder, more polished surface. It's easier to roll equipment across, simpler to keep spotless, and gives a cleaner, more showroom-like finish. For cardio zones, stretching areas, or gyms that emphasize aesthetics as much as function, epoxy is often the better pick.",
      "A lot of the gyms we build actually use both — rubber surfacing under the weight racks and platforms, epoxy everywhere else. That combination gets you impact protection exactly where you need it without giving up the clean look across the rest of the space.",
      "If you're only choosing one, think about what the floor actually has to survive day to day: dropped iron and heavy impact favors rubber; equipment rolling, foot traffic, and looks favor epoxy.",
    ],
    keyTakeaways: [
      "Rubber surfacing absorbs impact and noise — ideal under weight racks and platforms.",
      "Epoxy gives a cleaner, more polished finish that's easier to roll equipment across.",
      "Many gyms combine both: rubber where weights drop, epoxy everywhere else.",
    ],
  },
  {
    id: "epoxy-installation-process",
    slug: "epoxy-installation-process",
    title: "The Step-by-Step Epoxy Installation Process",
    excerpt:
      "From diamond grinding to the final clear coat — a look at what actually happens during a professional epoxy install.",
    category: "Installation",
    date: "Aug 8, 2026",
    publishedAt: "2026-08-08",
    author: "Seven Shades Team",
    authorRole: "Flooring Specialists",
    image: "/images/services/residential-floor.webp",
    imageAlt: "Epoxy flooring installation in progress",
    content: [
      "A lot of what separates a floor that lasts twenty years from one that fails in two happens before any color ever touches the slab. Here's what an install actually looks like from first inspection to final clear coat.",
      "Step one is inspection and moisture testing. We check for existing cracks, oil contamination, and slab moisture content, since trapped moisture is one of the leading causes of coating failure. This tells us exactly how to prep and which primers to use.",
      "Step two is diamond grinding. Mechanical grinders profile the surface, opening the concrete's pores so the epoxy can mechanically key into the slab rather than just sitting on top. Any cracks or pitting get patched and leveled at this stage, before coating begins.",
      "Step three is the base coat and color. A primer goes down first to lock in the profile, followed by the pigmented base coat. If you're going with a flake or metallic system, this is also when flake is broadcast or metallic pigments are worked into the wet epoxy for that signature look.",
      "Step four is the topcoat. A clear polyurethane or polyaspartic seal goes over everything — this is what actually gives the floor its chemical resistance, UV stability, and long-term durability. It's the layer doing most of the protective work.",
      "Finally, cure time. Most floors are walkable within 24 hours and ready for vehicle traffic in 48–72 hours, though full chemical cure can take up to a week. We walk through care instructions on handoff so the floor performs the way it's designed to from day one.",
    ],
    keyTakeaways: [
      "Moisture testing upfront prevents the #1 cause of coating failure.",
      "Diamond grinding creates a mechanical bond — critical for long-term adhesion.",
      "The clear topcoat does most of the protective work: chemical and UV resistance.",
    ],
  },
  {
    id: "caring-for-new-epoxy-floor",
    slug: "caring-for-new-epoxy-floor",
    title: "Caring for Your New Epoxy Floor: A Maintenance Guide",
    excerpt:
      "Simple habits that keep an epoxy floor looking new for years — cleaning routines, what to avoid, and when to reseal.",
    category: "Maintenance",
    date: "Aug 11, 2026",
    publishedAt: "2026-08-11",
    author: "Seven Shades Team",
    authorRole: "Flooring Specialists",
    image: "/images/solid-floor.webp",
    imageAlt: "Clean, well-maintained solid epoxy floor",
    content: [
      "One of the best things about epoxy is how little it actually asks of you — but a few simple habits will keep your floor looking brand new for well over a decade instead of just a few years.",
      "Dust-mop or sweep weekly. Grit and debris can scratch the clear topcoat over time if it's ground underfoot repeatedly, especially under vehicle tires. A soft broom or dust mop once a week handles most of it.",
      "For a deeper clean, use a pH-neutral cleaner and warm water — never harsh degreasers, ammonia, or vinegar-based cleaners, which can dull the topcoat's sheen over time. A mop or soft-bristle scrub brush is all you need for monthly cleaning.",
      "Clean up spills promptly, especially automotive fluids like brake fluid or antifreeze, which are more aggressive than oil or gasoline. Epoxy resists staining, but no coating is completely immune to a chemical spill left sitting for days.",
      "Use furniture pads or mats under heavy static loads like jack stands or storage racks left in place for months, and avoid dragging heavy metal objects across the surface. Rolling is always safer than dragging.",
      "Most properly installed floors won't need resealing for 10+ years. If you start noticing dulling in high-traffic paths or fine surface scratching, a fresh clear topcoat refresh — not a full reinstall — is usually all it takes to bring back the original shine.",
    ],
    keyTakeaways: [
      "Weekly dust-mopping prevents grit from scratching the clear topcoat.",
      "Stick to pH-neutral cleaners — avoid ammonia and vinegar-based products.",
      "A topcoat refresh, not a full reinstall, restores shine after years of wear.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((post) => post.slug === currentSlug);

  const rest = blogPosts.filter((post) => post.slug !== currentSlug);
  if (!current) return rest.slice(0, limit);

  const sameCategory = rest.filter((post) => post.category === current.category);
  const others = rest.filter((post) => post.category !== current.category);

  return [...sameCategory, ...others].slice(0, limit);
}
