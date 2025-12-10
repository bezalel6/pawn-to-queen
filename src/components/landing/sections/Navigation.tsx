import { navLinks } from "@/data/landing";

export default function Navigation() {
  return (
    <nav className="relative border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">♔</span>
          <span className="text-xl font-bold text-slate-900">PawnToQueen</span>
        </div>
        <div className="hidden space-x-8 md:flex">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-slate-600 transition-colors hover:text-slate-900"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-lg bg-slate-900 px-6 py-2 font-semibold text-white transition-all hover:bg-slate-800"
        >
          Book Lesson
        </a>
      </div>
    </nav>
  );
}
