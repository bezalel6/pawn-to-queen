import { contactInfo } from "@/data/landing";
import ContactCard from "../ContactCard";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="border-t py-20"
      style={{
        borderColor: `rgba(var(--border-color), 0.2)`,
        backgroundColor: `rgb(var(--bg-secondary))`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-6 text-4xl font-bold md:text-5xl"
            style={{ color: `rgb(var(--text-primary))` }}
          >
            Ready to Elevate Your Game?
          </h2>
          <p
            className="mb-8 text-xl"
            style={{ color: `rgb(var(--text-secondary))` }}
          >
            Join hundreds of students who&apos;ve transformed their chess with
            personalized coaching
          </p>
          <button
            onClick={() => console.log("💰")}
            className="group relative inline-block overflow-hidden rounded-xl px-12 py-5 text-2xl font-bold text-white shadow-xl transition-all hover:scale-105 md:text-3xl"
            style={{
              background: `linear-gradient(to right, rgb(var(--accent-primary)), rgb(var(--accent-secondary)))`,
            }}
          >
            <span className="relative z-10">GIMME MONEY</span>
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `linear-gradient(to right, rgb(var(--accent-secondary)), rgb(var(--accent-primary)))`,
              }}
            ></div>
          </button>

          <div className="mt-12 flex justify-center">
            {contactInfo.map(([icon, title, value]) => (
              <div key={title} className="w-full max-w-sm">
                <ContactCard icon={icon} title={title} value={value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
