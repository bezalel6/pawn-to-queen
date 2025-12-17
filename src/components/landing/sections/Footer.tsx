export default function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{
        borderColor: `rgba(var(--border-color), 0.3)`,
        backgroundColor: `rgb(var(--bg-secondary))`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">♔</span>
            <span
              className="font-semibold"
              style={{ color: `rgb(var(--text-primary))` }}
            >
              PawnToQueen
            </span>
            <span
              className="text-sm"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              .cc
            </span>
          </div>
          <div
            className="text-sm"
            style={{ color: `rgb(var(--text-secondary))` }}
          >
            © 2025 PawnToQueen Chess Club. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
