interface AchievementItemProps {
  text: string;
}

export default function AchievementItem({ text }: AchievementItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <div
        className="flex h-6 w-6 items-center justify-center rounded-full"
        style={{ backgroundColor: `rgba(var(--accent-bg), 0.5)` }}
      >
        <span
          className="text-sm"
          style={{ color: `rgb(var(--accent-primary))` }}
        >
          ✓
        </span>
      </div>
      <span style={{ color: `rgb(var(--text-secondary))` }}>{text}</span>
    </div>
  );
}
