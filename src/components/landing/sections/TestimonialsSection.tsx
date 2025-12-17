import SectionHeader from "../SectionHeader";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t py-20"
      style={{
        borderColor: `rgba(var(--border-color), 0.2)`,
        backgroundColor: `rgb(var(--card-bg))`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          label="Student Success Stories"
          title="What the Masters Say"
          description="Real feedback from real students who've transformed their game"
        />

        <div className="mx-auto max-w-4xl">
          <div
            className="rounded-2xl border-2 p-8 shadow-sm"
            style={{
              borderColor: `rgba(var(--border-color), 0.2)`,
              backgroundColor: `rgb(var(--bg-primary))`,
            }}
          >
            {/* Testimonials component placeholder */}
          </div>
        </div>
      </div>
    </section>
  );
}
