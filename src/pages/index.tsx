import Head from "next/head";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>PawnToQueen - Chess Coaching</title>
        <meta name="description" content="Chess is a game. Master it." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background with gradient and pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950">
        <div className={xx}></div>
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-between px-4 py-12">
        {/* Top section with header */}
        <div className="flex flex-1 flex-col items-center justify-center">
          {/* Decorative line */}
          <div className="mb-12 h-px w-24 bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>

          {/* Header Section */}
          <div className="mb-16 text-center">
            <h1 className="relative mb-6 text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl">
              <span className="inline-block transform text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white">
                ♟
              </span>
              <span className="mx-2 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent drop-shadow-2xl">
                PawnToQueen
              </span>
              <span className="inline-block transform text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white">
                ♕
              </span>
            </h1>
            <div className="relative">
              <p className="text-2xl font-light tracking-widest text-zinc-500 md:text-3xl lg:text-4xl">
                Chess is a game.
              </p>
              <div className="absolute -bottom-6 left-1/2 h-px w-32 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
            </div>
          </div>

          {/* Success Stories with better styling */}
          <div className="mt-12 w-full max-w-3xl">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 left-0 text-6xl text-zinc-800 opacity-50">
                "
              </div>
              <div className="absolute right-0 -bottom-4 rotate-180 text-6xl text-zinc-800 opacity-50">
                "
              </div>

              <div className="relative rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 to-slate-900/50 p-8 shadow-2xl backdrop-blur-sm">
                <h2 className="mb-8 bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
                  What the Masters Say
                </h2>
                <Testimonials />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with CTA */}
        <div className="mt-16 flex flex-col items-center">
          {/* Decorative divider */}
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-zinc-600"></div>
            <span className="text-zinc-600">♔</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-zinc-600"></div>
          </div>

          {/* CTA Button with enhanced styling */}
          <button
            className="group relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 px-14 py-8 text-2xl font-black text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-emerald-500 hover:to-teal-600 md:text-3xl lg:text-4xl"
            onClick={() => console.log("💰")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <span className="relative z-10 drop-shadow-lg">
              Shut Up and Take My Money
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-40"></div>

            {/* Sparkle effects */}
            <div className="absolute top-2 right-4 h-1 w-1 animate-pulse rounded-full bg-white opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-3 left-6 h-1.5 w-1.5 animate-pulse rounded-full bg-white opacity-0 delay-150 group-hover:opacity-100"></div>
            <div className="absolute top-4 left-12 h-1 w-1 animate-pulse rounded-full bg-white opacity-0 delay-300 group-hover:opacity-100"></div>
          </button>

          {/* Footer text */}
          <p className="mt-8 text-xs tracking-widest text-zinc-600 uppercase">
            Your move.
          </p>
        </div>
      </main>
    </>
  );
}

const xx = `absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`;
