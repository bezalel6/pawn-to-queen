import Head from "next/head";
import Testimonials from "../components/Testimonials";

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
                  Math.floor(i / 8) % 2 === i % 2 ? "bg-slate-900" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">♔</span>
            <span className="text-xl font-bold text-slate-900">PawnToQueen</span>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="text-slate-600 transition-colors hover:text-slate-900">
              About
            </a>
            <a href="#programs" className="text-slate-600 transition-colors hover:text-slate-900">
              Programs
            </a>
            <a href="#testimonials" className="text-slate-600 transition-colors hover:text-slate-900">
              Testimonials
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-slate-900 px-6 py-2 font-semibold text-white transition-all hover:bg-slate-800"
          >
            Book Lesson
          </a>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-4 py-20 md:px-8 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900">
              <span>♕</span>
              <span>Master-Level Coaching</span>
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
              From Pawn to Queen
            </h1>
            <p className="mb-8 text-xl text-slate-600 md:text-2xl">
              Elevate your chess game with personalized coaching designed to unlock your full potential.
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

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-slate-900">2400+</div>
                <div className="text-sm text-slate-600">FIDE Rating</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-slate-900">95%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-slate-200 bg-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
              <div>
                <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-600">
                  About the Coach
                </span>
                <h2 className="mb-6 text-4xl font-bold text-slate-900">
                  Your Path to Chess Mastery Starts Here
                </h2>
                <p className="mb-4 text-lg text-slate-600">
                  With over 15 years of competitive chess experience and a FIDE rating of 2400+, I&apos;ve
                  helped hundreds of students achieve their chess goals.
                </p>
                <p className="mb-6 text-lg text-slate-600">
                  My coaching method combines classical chess principles with modern analysis techniques,
                  tailored to your unique learning style and objectives.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                      <span className="text-sm text-amber-700">✓</span>
                    </div>
                    <span className="text-slate-700">International Master Title</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                      <span className="text-sm text-amber-700">✓</span>
                    </div>
                    <span className="text-slate-700">National Champion 2019</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                      <span className="text-sm text-amber-700">✓</span>
                    </div>
                    <span className="text-slate-700">FIDE Certified Instructor</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-12 text-center shadow-lg">
                  <div className="mb-6 text-8xl">♔</div>
                  <blockquote className="mb-4 text-xl font-medium italic text-slate-700">
                    &ldquo;Every chess master was once a beginner. The difference is they never gave up.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-600">
                Training Programs
              </span>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Choose Your Training Plan
              </h2>
              <p className="text-lg text-slate-600">
                Structured coaching programs designed to take your game to the next level
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {/* Beginner */}
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-amber-500 hover:shadow-lg">
                <div className="mb-4 text-4xl">♟️</div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">Foundation</h3>
                <p className="mb-6 text-slate-600">Perfect for beginners building fundamentals</p>
                <div className="mb-6">
                  <div className="mb-2 text-4xl font-bold text-slate-900">$60</div>
                  <div className="text-sm text-slate-500">per hour</div>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Chess fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Basic tactics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Opening principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Endgame basics</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full rounded-lg border-2 border-slate-900 py-3 text-center font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
                >
                  Get Started
                </a>
              </div>

              {/* Intermediate */}
              <div className="relative rounded-2xl border-2 border-amber-500 bg-white p-8 shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-white">
                  MOST POPULAR
                </div>
                <div className="mb-4 text-4xl">♛</div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">Advanced</h3>
                <p className="mb-6 text-slate-600">For competitive tournament players</p>
                <div className="mb-6">
                  <div className="mb-2 text-4xl font-bold text-slate-900">$80</div>
                  <div className="text-sm text-slate-500">per hour</div>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Advanced tactics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Opening repertoire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Positional play</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Game analysis</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full rounded-lg bg-slate-900 py-3 text-center font-semibold text-white transition-all hover:bg-slate-800"
                >
                  Get Started
                </a>
              </div>

              {/* Master */}
              <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-amber-500 hover:shadow-lg">
                <div className="mb-4 text-4xl">♔</div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">Master</h3>
                <p className="mb-6 text-slate-600">Elite training for serious players</p>
                <div className="mb-6">
                  <div className="mb-2 text-4xl font-bold text-slate-900">$120</div>
                  <div className="text-sm text-slate-500">per hour</div>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Deep preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Complex endgames</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Tournament strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-slate-700">Mental preparation</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full rounded-lg border-2 border-slate-900 py-3 text-center font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="border-t border-slate-200 bg-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-amber-600">
                Student Success Stories
              </span>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">What the Masters Say</h2>
              <p className="text-lg text-slate-600">
                Real feedback from real students who&apos;ve transformed their game
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 shadow-sm">
                <Testimonials />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="border-t border-slate-200 bg-slate-900 py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Ready to Elevate Your Game?
              </h2>
              <p className="mb-8 text-xl text-slate-300">
                Join hundreds of students who&apos;ve transformed their chess with personalized coaching
              </p>
              <button
                onClick={() => console.log("💰")}
                className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-5 text-2xl font-bold text-white shadow-xl transition-all hover:scale-105 hover:from-amber-400 hover:to-amber-500 md:text-3xl"
              >
                <span className="relative z-10">Start Your Journey Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>

              <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
                <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                  <div className="mb-3 text-2xl">📧</div>
                  <h4 className="mb-2 font-semibold text-white">Email</h4>
                  <p className="text-sm text-slate-400">coach@pawntoqueen.com</p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                  <div className="mb-3 text-2xl">💬</div>
                  <h4 className="mb-2 font-semibold text-white">Discord</h4>
                  <p className="text-sm text-slate-400">PawnToQueen#0001</p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                  <div className="mb-3 text-2xl">⏰</div>
                  <h4 className="mb-2 font-semibold text-white">Availability</h4>
                  <p className="text-sm text-slate-400">Mon-Fri, 9AM-8PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700 bg-slate-950 py-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">♔</span>
                <span className="font-semibold text-white">PawnToQueen</span>
              </div>
              <div className="text-sm text-slate-500">
                © 2024 PawnToQueen. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}