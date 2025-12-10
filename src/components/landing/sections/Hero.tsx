import { stats } from "@/data/landing";
import StatCard from "../StatCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto px-4 py-20 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900">
          <span>♕</span>
          <span>Master-Level Coaching</span>
        </div>
        <h1 className="mb-6 text-5xl leading-tight font-black text-slate-900 md:text-7xl">
          Pawn to Queen
        </h1>
        <p className="mb-8 text-xl text-slate-600 md:text-2xl">
          Promote your chess with personalized coaching designed to unlock your
          full potential.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-lg bg-slate-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl sm:w-auto"
          >
            Start Your Journey
          </a>
          <a
            href="#programs"
            className="w-full rounded-lg border-2 border-slate-900 px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-slate-50 sm:w-auto"
          >
            View Programs
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <StatCard key={label} value={value} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
