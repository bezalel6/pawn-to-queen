import React from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative h-64 w-full overflow-hidden rounded-xl border border-zinc-700/30 bg-gradient-to-br from-zinc-800/30 to-slate-800/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 right-0 left-0 z-10 h-12 bg-gradient-to-b from-zinc-900 to-transparent"></div>
        <div className="absolute right-0 bottom-0 left-0 z-10 h-12 bg-gradient-to-t from-zinc-900 to-transparent"></div>

        <div className="animate-scroll-vertical p-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="group mb-8 transition-transform duration-300 hover:scale-105"
            >
              <p className="mb-3 text-base leading-relaxed font-medium text-zinc-300 md:text-lg">
                "{testimonial.quote}"
              </p>
              <p className="text-sm tracking-wide text-zinc-500">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="mt-4 text-center">
        <p className="text-zinc-600 text-xs uppercase tracking-widest">
          Scroll for more wisdom
        </p>
      </div> */}
    </div>
  );
};

export default Testimonials;
