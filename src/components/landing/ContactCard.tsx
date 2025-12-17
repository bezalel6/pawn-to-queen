interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
}

export default function ContactCard({ icon, title, value }: ContactCardProps) {
  return (
    <div
      className="rounded-xl border p-6"
      style={{
        borderColor: `rgba(var(--border-color), 0.3)`,
        backgroundColor: `rgb(var(--card-bg))`,
      }}
    >
      <div className="mb-3 text-2xl">{icon}</div>
      <h4
        className="mb-2 font-semibold"
        style={{ color: `rgb(var(--text-primary))` }}
      >
        {title}
      </h4>
      <p className="text-sm" style={{ color: `rgb(var(--text-secondary))` }}>
        {value}
      </p>
    </div>
  );
}
