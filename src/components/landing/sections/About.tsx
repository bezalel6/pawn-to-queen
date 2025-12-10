import { useState, useEffect } from "react";
import { achievements } from "@/data/landing";
import { testimonials } from "@/data/testimonials";
import AchievementItem from "../AchievementItem";
import styles from "./About.module.css";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quoteHeight = 256; // Height of each quote container (h-64 = 256px)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 1));
    }, 2500); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const offset = currentIndex * quoteHeight;

  return (
    <section id="about" className="border-t border-slate-200 bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-600 uppercase">
              About the Coach
            </span>
            <h2 className="mb-6 text-4xl font-bold text-slate-900">
              Your Path to Chess Mastery Starts Here
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              With over 10 years of competitive chess experience and a rating of
              2200+, I&apos;ve helped hundreds of players achieve their chess
              goals.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              My coaching method combines classical chess principles with modern
              analysis techniques, tailored to your unique learning style and
              objectives.
            </p>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <AchievementItem key={achievement} text={achievement} />
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className={`${styles["quote-container"]} overflow-hidden rounded-2xl border-1 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-12 text-center shadow-lg`}
            >
              <div
                className={`${styles["quote-scroller"]} transition-transform duration-1000`}
                style={{ transform: `translateY(-${offset}px)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={styles["quote-item"]}>
                    <div className="mb-6 text-8xl"></div>
                    <blockquote className="mb-4 text-xl font-medium text-slate-700 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    {testimonial.author && (
                      <p className="text-sm font-semibold text-slate-600">
                        — {testimonial.author}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
