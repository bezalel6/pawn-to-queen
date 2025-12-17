interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
  id?: string;
  className?: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  id,
  className,
}: ContactCardProps) {
  const isEmail = title.toLowerCase() === "email";

  if (isEmail) {
    return (
      <div
        id={id}
        className={`group relative overflow-hidden rounded-xl border ${className}`}
        style={{
          padding: '3px',
          borderColor: `rgba(var(--border-color), 0.3)`,
        }}
      >
        {/* Rotating border gradient - absolute positioned, rotates */}
        <div
          className="absolute -inset-[100%]"
          style={{
            background: `conic-gradient(from 0deg,
              transparent 60deg,
              rgb(var(--accent-primary)) 120deg,
              transparent 180deg)`,
            animation: 'borderRotate 3s linear infinite',
          }}
        />

        {/* Static card content - relative positioned, doesn't rotate */}
        <div
          className="relative rounded-[9px] p-6"
          style={{ backgroundColor: `rgb(var(--card-bg))` }}
        >
          <div className="mb-3 text-2xl">{icon}</div>
          <h4
            className="mb-2 font-semibold"
            style={{ color: `rgb(var(--text-primary))` }}
          >
            {title}
          </h4>
          <a
            href={`mailto:${value}`}
            className="group relative inline-block text-sm transition-colors"
            style={{ color: `rgb(var(--accent-primary))` }}
          >
            {value}
            <span
              className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 ease-out group-hover:w-full"
              style={{
                backgroundColor: `rgb(var(--accent-primary))`,
                transformOrigin: 'center',
              }}
            />
          </a>
        </div>
      </div>
    );
  }

  // Non-email card - simple version
  return (
    <div
      id={id}
      className={`rounded-xl border p-6 ${className}`}
      style={{
        backgroundColor: `rgb(var(--card-bg))`,
        borderColor: `rgba(var(--border-color), 0.2)`,
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
