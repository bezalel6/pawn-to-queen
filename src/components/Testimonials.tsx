import React from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative h-72 w-full overflow-hidden rounded-xl bg-white">
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 right-0 left-0 z-10 h-16 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="absolute right-0 bottom-0 left-0 z-10 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>

        <div className="animate-scroll-vertical p-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="group mb-8 rounded-lg bg-slate-50 p-6 transition-all duration-300 hover:bg-amber-50 hover:shadow-md"
            >
              <p className="mb-3 text-base leading-relaxed font-medium text-slate-700 md:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-sm tracking-wide text-slate-500">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;