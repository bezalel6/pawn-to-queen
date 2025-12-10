export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-950 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">♔</span>
            <span className="font-semibold text-white">PawnToQueen</span>
            <span className="text-sm text-slate-500">.cc</span>
          </div>
          <div className="text-sm text-slate-500">
            © 2025 PawnToQueen Chess Club. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
