interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div
        className="mb-2 text-3xl font-bold"
        style={{ color: `rgb(var(--text-primary))` }}
      >
        {value}
      </div>
      <div
        className="text-sm"
        style={{ color: `rgb(var(--text-secondary))` }}
      >
        {label}
      </div>
    </div>
  );
}
