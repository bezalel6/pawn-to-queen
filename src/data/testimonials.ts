export interface Testimonial {
  quote: string;
  author?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [{
  quote:
    "I have been training with Marshall for quite some time now and have been making great progress in my chess game thanks to his training.",
  author: "Dean, Student",
}, {
  quote: "Always play bf1",
  author: "Ben Finegold",
}, {
  quote:
    "Marshall is a great person. He is down-to-earth, reliable, patient, and has a great sense of humor. I am happy to have found such a great coach in Marshall. Keep up the good work!",
  author: "Marco, Student",
}, {
  quote: "When you find a good move look for better",
  author: "Emanuel Lasker",
}, {
  quote: "The pawns are the soul of chess",
  author: "François-André Danican Philidor",
}, {
  quote:
    `Marshall emphasizes the importance of enjoying the game as a beginner. I'm looking forward to more of his classes`,
  author: "Marco, Student",
}];
