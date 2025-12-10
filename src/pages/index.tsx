import Head from "next/head";
import Navigation from "@/components/landing/sections/Navigation";
import Hero from "@/components/landing/sections/Hero";
import About from "@/components/landing/sections/About";
import Programs from "@/components/landing/sections/Programs";
import TestimonialsSection from "@/components/landing/sections/TestimonialsSection";
import CTASection from "@/components/landing/sections/CTASection";
import Footer from "@/components/landing/sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>PawnToQueen - Elite Chess Coaching</title>
        <meta
          name="description"
          content="Transform your chess game with personalized coaching. From beginner to master level training."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Chess board background pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid h-full w-full grid-cols-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  Math.floor(i / 8) % 2 === i % 2
                    ? "bg-slate-900"
                    : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Programs />
        {/* <TestimonialsSection /> */}
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
