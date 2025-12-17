import { programs } from "@/data/landing";
import ProgramCard from "../ProgramCard";
import SectionHeader from "../SectionHeader";

export default function Programs() {
  return (
    <section
      id="programs"
      className="border-t py-20"
      style={{
        borderColor: `rgba(var(--border-color), 0.2)`,
        backgroundColor: `rgb(var(--bg-primary))`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          label="Training Programs"
          title="Take the step for your next promotion"
          description=""
        />

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              icon={program.icon}
              title={program.title}
              description={program.description}
              price={program.price}
              duration={program.duration}
              features={program.features}
              highlighted={program.highlighted}
              badge={program.badge}
              ctaText={program.ctaText}
              ctaLink={program.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
