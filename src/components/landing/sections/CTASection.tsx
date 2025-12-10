import { contactInfo } from "@/data/landing";
import ContactCard from "../ContactCard";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-900 py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Elevate Your Game?
          </h2>
          <p className="mb-8 text-xl text-slate-300">
            Join hundreds of students who&apos;ve transformed their chess with
            personalized coaching
          </p>
          <button
            onClick={() => console.log("💰")}
            className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-5 text-2xl font-bold text-white shadow-xl transition-all hover:scale-105 hover:from-amber-400 hover:to-amber-500 md:text-3xl"
          >
            <span className="relative z-10">GIMME MONEY</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </button>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {contactInfo.map(([icon, title, value]) => (
              <ContactCard key={title} icon={icon} title={title} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
