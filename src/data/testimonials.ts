export interface Testimonial {
  quote: string;
  author?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [{
  quote:
    "I have been training with Marshall for quite some time now and have been making great progress in my chess game thanks to his training.",
}, {
  quote: "Always play bf1",
  author: "Ben Finegold",
}, {
  quote:
    "Marshall is a great person. He is down-to-earth, reliable, patient, and has a great sense of humor. I am happy to have found such a great coach in Marshall. Keep up the good work!",
}, {
  quote: "When you find a good move look for better",
  author: "Emanuel Lasker",
}, {
  quote: "The pawns are the soul of chess",
  author: "François-André Danican Philidor",
}];
