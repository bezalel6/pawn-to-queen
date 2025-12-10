// [value, label]
export const stats = [
  // ["∞", "FIDE Rating"],
  ["100+", "Students Trained"],
  ["10+", "Years Experience"],
  ["95%", "Promotion Rate"],
] as const;

export const achievements = [
  "Internationally Recognized Chess Coach",
  "FIDE Titled Student",
  "99.89% Percentile",
] as const;

// [icon, title, desc, price, duration, features, ctaText, ctaLink, badge?]
const individualLessons = [
  [
    "⚡",
    "Quick Session",
    "Perfect for focused skill building",
    30,
    "30 min",
    [
      "Targeted practice",
      "Quick game review",
      "Training guidance",
    ],
    "Book Now",
    "https://buy.stripe.com/payment",
  ],
  [
    "♛",
    "Deep Dive",
    "Comprehensive coaching session",
    40,
    "90 min",
    [
      "In-depth analysis",
      "Strategy development",
      "Personalized lessons",
    ],
    "Book Now",
    "https://buy.stripe.com/payment",
    "MOST POPULAR",
  ],
] as const;

const groupClasses = [
  [
    "👥",
    "Group Training",
    "Learn together, grow together",
    "10-20*",
    "90 min",
    [
      "4+ students",
      "Diversified ideas and analysis",
      "Collaborative learning",
    ],
    "Contact Us",
    "#contact",
  ],
] as const;

const allPrograms = [...individualLessons, ...groupClasses] as const;

export const programs = allPrograms.map((
  [
    icon,
    title,
    description,
    price,
    duration,
    features,
    ctaText,
    ctaLink,
    badge,
  ],
) => ({
  id: title.toLowerCase().replace(/\s+/g, "-"),
  icon,
  title,
  description,
  price,
  duration,
  features,
  ctaText,
  ctaLink,
  highlighted: !!badge,
  badge,
}));

// [icon, title, value]
export const contactInfo = [
  ["📧", "Email", "coach@pawntoqueen.cc"],
  ["💬", "Discord", "PawnToQueen#0001"],
  ["⏰", "Availability", "Mon-Fri, 9AM-8PM EST"],
] as const;

// [href, label]
export const navLinks = [
  ["#about", "About"],
  ["#programs", "Programs"],
  ["#testimonials", "Testimonials"],
] as const;
