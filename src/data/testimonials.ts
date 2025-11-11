export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  rating?: number;
  title?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We got Chess 2 before GTA 6.",
    author: "Gary, Professional Gamer",
  },
  {
    id: 2,
    quote: "Finally, they fixed all the bugs from Chess 1.",
    author: "Magnus, Endgame Enjoyer",
  },
  {
    id: 3,
    quote: "I Literally don't care.",
    author: "Hikaru, Variety Streamer",
  },
  {
    id: 4,
    quote: "This is the position. And in this position, we resign.",
    author: "Levy, New Yorker",
  },
  {
    id: 5,
    quote: "You know who also made a sequel? Europe, 1939.",
    author: "Ben, Old Guy",
  },
  {
    id: 6,
    quote: "As long as there's stalemate tricks, you have my vote.",
    author: "Eric, Tea Influencer",
  },
  {
    id: 7,
    quote: "As long as it has ultrabullet.",
    author: "Daniel, Destroyer of Mice",
  },
  {
    id: 8,
    quote: "I don't know, this looks kinda sus, not gonna lie.",
    author: "Alexandra, Sister",
  },
  {
    id: 9,
    quote: "It speaks for itself, or something.",
    author: "Hans, Soothsayer",
  },
];
