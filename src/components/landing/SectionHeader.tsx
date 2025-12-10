interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-600 uppercase">
        {label}
      </span>
      <h2 className="mb-4 text-4xl font-bold text-slate-900">{title}</h2>
      {description && <p className="text-lg text-slate-600">{description}</p>}
    </div>
  );
}
