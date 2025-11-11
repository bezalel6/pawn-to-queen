import React from 'react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800/30 to-slate-800/30 backdrop-blur-sm border border-zinc-700/30">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-zinc-900 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>

        <div className="animate-scroll-vertical p-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="mb-8 group hover:scale-105 transition-transform duration-300"
            >
              <p className="text-zinc-300 text-base md:text-lg mb-3 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              <p className="text-zinc-500 text-sm tracking-wide">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-4 text-center">
        <p className="text-zinc-600 text-xs uppercase tracking-widest">
          Scroll for more wisdom
        </p>
      </div>
    </div>
  );
};

export default Testimonials;