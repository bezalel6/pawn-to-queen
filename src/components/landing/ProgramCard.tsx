import PayPalButton from "@/components/PayPalButton";

interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  price: number | string;
  duration?: string;
  features: readonly string[];
  highlighted?: boolean;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  paypalButtonId?: string;
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
  ctaText = "Get Started",
  ctaLink,
  paypalButtonId,
}: ProgramCardProps) {
  return (
    <div
      className="relative rounded-2xl border-2 p-8 shadow-sm transition-all"
      style={{
        backgroundColor: `rgb(var(--card-bg))`,
        borderColor: highlighted
          ? `rgb(var(--accent-primary))`
          : `rgba(var(--border-color), 0.2)`,
      }}
      onMouseEnter={(e) => {
        if (!highlighted) {
          e.currentTarget.style.borderColor = `rgb(var(--accent-primary))`;
          e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0,0,0,0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (!highlighted) {
          e.currentTarget.style.borderColor = `rgba(var(--border-color), 0.2)`;
          e.currentTarget.style.boxShadow = "0 1px 2px 0 rgba(0,0,0,0.05)";
        }
      }}
    >
      {badge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white"
          style={{ backgroundColor: `rgb(var(--accent-primary))` }}
        >
          {badge}
        </div>
      )}
      <div className="mb-4 text-4xl">{icon}</div>
      <h3
        className="mb-2 text-2xl font-bold"
        style={{ color: `rgb(var(--text-primary))` }}
      >
        {title}
      </h3>
      <p className="mb-6" style={{ color: `rgb(var(--text-secondary))` }}>
        {description}
      </p>
      <div className="mb-6">
        <div
          className="mb-2 text-4xl font-bold"
          style={{ color: `rgb(var(--text-primary))` }}
        >
          ${price}
        </div>
        <div className="text-sm" style={{ color: `rgb(var(--text-secondary))` }}>
          {duration ?? "per session"}
        </div>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span
              className="mr-2"
              style={{ color: `rgb(var(--accent-primary))` }}
            >
              •
            </span>
            <span style={{ color: `rgb(var(--text-secondary))` }}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      {paypalButtonId ? (
        <div className="w-full">
          <PayPalButton hostedButtonId={paypalButtonId} />
        </div>
      ) : (
        <a
          href={ctaLink ?? "#contact"}
          onClick={(e) => {
            if (ctaLink === "#contact" || ctaLink === undefined) {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView();

              const contactCard = document.getElementById("contact-card");
              if (contactCard) {
                contactCard.classList.remove("flash-animation");
                void contactCard.offsetWidth; // Trigger reflow
                contactCard.classList.add("flash-animation");
              }
            }
          }}
          className="block w-full rounded-lg py-3 text-center font-semibold transition-all"
          style={{
            backgroundColor: highlighted
              ? `rgb(var(--button-primary))`
              : "transparent",
            color: highlighted ? "white" : `rgb(var(--text-primary))`,
            border: highlighted
              ? "none"
              : `2px solid rgb(var(--button-primary))`,
          }}
          onMouseEnter={(e) => {
            if (highlighted) {
              e.currentTarget.style.backgroundColor = `rgb(var(--button-primary-hover))`;
            } else {
              e.currentTarget.style.backgroundColor = `rgb(var(--button-primary))`;
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (highlighted) {
              e.currentTarget.style.backgroundColor = `rgb(var(--button-primary))`;
            } else {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = `rgb(var(--text-primary))`;
            }
          }}
        >
          {ctaText}
        </a>
      )}
    </div>
  );
}
