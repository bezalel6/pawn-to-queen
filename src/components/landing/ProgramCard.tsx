interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  price: number;
  duration?: string;
  features: readonly string[];
  highlighted?: boolean;
  badge?: string;
}

export default function ProgramCard({
  icon,
  title,
  description,
  price,
  duration,
  features,
  highlighted = false,
  badge,
}: ProgramCardProps) {
  return (
    <div
      className={`relative rounded-2xl border-2 bg-white p-8 shadow-sm transition-all ${
        highlighted
          ? "border-amber-500 shadow-lg"
          : "border-slate-200 hover:border-amber-500 hover:shadow-lg"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-white">
          {badge}
        </div>
      )}
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mb-6 text-slate-600">{description}</p>
      <div className="mb-6">
        <div className="mb-2 text-4xl font-bold text-slate-900">${price}</div>
        <div className="text-sm text-slate-500">{duration ?? "per session"}</div>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-amber-600">•</span>
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block w-full rounded-lg py-3 text-center font-semibold transition-all ${
          highlighted
            ? "bg-slate-900 text-white hover:bg-slate-800"
            : "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
