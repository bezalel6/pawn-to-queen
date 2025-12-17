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
      <span
        className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider"
        style={{ color: `rgb(var(--accent-primary))` }}
      >
        {label}
      </span>
      <h2
        className="mb-4 text-4xl font-bold"
        style={{ color: `rgb(var(--text-primary))` }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg" style={{ color: `rgb(var(--text-secondary))` }}>
          {description}
        </p>
      )}
    </div>
  );
}
