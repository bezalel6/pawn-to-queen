import Testimonials from "@/components/Testimonials";
import SectionHeader from "../SectionHeader";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-slate-200 bg-white py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          label="Student Success Stories"
          title="What the Masters Say"
          description="Real feedback from real students who've transformed their game"
        />

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 shadow-sm">
            <Testimonials />
          </div>
        </div>
      </div>
    </section>
  );
}
