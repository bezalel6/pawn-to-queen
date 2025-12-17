import Head from "next/head";
import Navigation from "@/components/landing/sections/Navigation";
import Hero from "@/components/landing/sections/Hero";
import About from "@/components/landing/sections/About";
import Programs from "@/components/landing/sections/Programs";
import CTASection from "@/components/landing/sections/CTASection";
import Footer from "@/components/landing/sections/Footer";
import ThemeSelector from "@/components/ThemeSelector";

export default function Home() {
  return (
    <>
      <Head>
        <title>PawnToQueen - Elite Chess Coaching</title>
        <meta
          name="description"
          content="Transform your chess game with personalized coaching. From beginner to master level training at pawntoqueen.cc - your chess club for growth."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Link Preview Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pawntoqueen.cc/" />
        <meta property="og:title" content="PawnToQueen Chess Club - Elite Coaching" />
        <meta
          property="og:description"
          content="Join our chess club community. Personalized coaching from beginner to master level. Promote your game with expert guidance."
        />
        <meta property="og:site_name" content="PawnToQueen Chess Club" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PawnToQueen Chess Club - Elite Coaching" />
        <meta
          name="twitter:description"
          content="Join our chess club community. Personalized coaching from beginner to master level."
        />
      </Head>

      {/* Chess board background pattern */}
      <div
        className="fixed inset-0"
        style={{
          background: `linear-gradient(to bottom right, rgb(var(--bg-primary)), rgb(var(--bg-secondary)), rgb(var(--bg-tertiary)))`,
        }}
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid h-full w-full grid-cols-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  Math.floor(i / 8) % 2 === i % 2 ? "" : "bg-transparent"
                }`}
                style={{
                  backgroundColor:
                    Math.floor(i / 8) % 2 === i % 2
                      ? `rgb(var(--chess-square))`
                      : "transparent",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <ThemeSelector />
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
