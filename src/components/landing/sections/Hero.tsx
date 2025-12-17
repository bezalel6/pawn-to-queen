import { stats } from "@/data/landing";
import StatCard from "../StatCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto px-4 py-20 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div
          className="mb-6 inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium"
          style={{
            backgroundColor: `rgb(var(--accent-bg))`,
            color: `rgb(var(--accent-secondary))`,
          }}
        >
          <span>♕</span>
          <span>Master-Level Chess Club</span>
        </div>
        <h1
          className="mb-6 text-5xl font-black leading-tight md:text-7xl"
          style={{ color: `rgb(var(--text-primary))` }}
        >
          Pawn to Queen
        </h1>
        <p
          className="mb-8 text-xl md:text-2xl"
          style={{ color: `rgb(var(--text-secondary))` }}
        >
          Join our chess club and promote your game with personalized coaching
          designed to unlock your full potential.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView();

              const contactCard = document.getElementById("contact-card");
              if (contactCard) {
                contactCard.classList.remove("flash-animation");
                void contactCard.offsetWidth; // Trigger reflow
                contactCard.classList.add("flash-animation");
              }
            }}
            className="w-full rounded-lg px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl sm:w-auto"
            style={{
              backgroundColor: `rgb(var(--button-primary))`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--button-primary-hover))`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--button-primary))`;
            }}
          >
            Start Your Journey
          </a>
          <a
            href="#programs"
            className="w-full rounded-lg border-2 px-8 py-4 text-lg font-bold transition-all sm:w-auto"
            style={{
              borderColor: `rgb(var(--border-color))`,
              color: `rgb(var(--text-primary))`,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `rgba(var(--accent-bg), 0.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            View Programs
          </a>
        </div>

        <div className="mt-16 flex flex-row flex-wrap justify-around gap-10 align-middle">
          {stats.map(([value, label]) => (
            <StatCard key={label} value={value} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
