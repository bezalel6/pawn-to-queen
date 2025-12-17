import { navLinks } from "@/data/landing";

export default function Navigation() {
  return (
    <nav
        className="relative border-b backdrop-blur-sm"
        style={{
          borderColor: `rgba(var(--border-color), 0.2)`,
          backgroundColor: `rgba(var(--card-bg), 0.8)`,
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">♔</span>
            <span
              className="text-xl font-bold"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              PawnToQueen
            </span>
          </div>
          <div className="hidden space-x-8 md:flex">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="transition-colors"
                style={{ color: `rgb(var(--text-secondary))` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = `rgb(var(--text-primary))`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = `rgb(var(--text-secondary))`;
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-lg px-6 py-2 font-semibold text-white transition-all"
            style={{
              backgroundColor: `rgb(var(--button-primary))`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--button-primary-hover))`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `rgb(var(--button-primary))`;
            }}
          >
            Get in Touch
          </a>
        </div>
      </nav>
  );
}
