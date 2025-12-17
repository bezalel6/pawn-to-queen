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
            Ready to Start Your Chess Journey?
          </h2>
          <p
            className="mb-8 text-xl"
            style={{ color: `rgb(var(--text-secondary))` }}
          >
            Get in touch to discuss your chess goals and find the perfect program for you
          </p>

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
