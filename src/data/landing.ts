// [value, label]
export const stats = [
  ["2400+", "FIDE Rating"],
  ["500+", "Students Trained"],
  ["15+", "Years Experience"],
  ["95%", "Success Rate"],
] as const;

export const achievements = [
  "International Master Title",
  "National Champion 2019",
  "FIDE Certified Instructor",
] as const;

// [icon, title, desc, price, duration, features, badge?]
const individualLessons = [
  ["⚡", "Quick Session", "Perfect for focused skill building", 30, "30 min", [
    "Targeted practice",
    "Quick game review",
    "Training guidance",
  ]],
  ["♛", "Deep Dive", "Comprehensive coaching session", 40, "90 min", [
    "In-depth analysis",
    "Strategy development",
    "Personalized lessons",
  ], "MOST POPULAR"],
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
  ],
] as const;

const allPrograms = [...individualLessons, ...groupClasses] as const;

export const programs = allPrograms.map((
  [icon, title, description, price, duration, features, badge],
) => ({
  id: title.toLowerCase().replace(/\s+/g, "-"),
  icon,
  title,
  description,
  price,
  duration,
  features,
  highlighted: !!badge,
  badge,
}));

// [icon, title, value]
export const contactInfo = [
  ["📧", "Email", "coach@pawntoqueen.com"],
  ["💬", "Discord", "PawnToQueen#0001"],
  ["⏰", "Availability", "Mon-Fri, 9AM-8PM EST"],
] as const;

// [href, label]
export const navLinks = [
  ["#about", "About"],
  ["#programs", "Programs"],
  ["#testimonials", "Testimonials"],
] as const;
