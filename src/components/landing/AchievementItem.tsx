interface AchievementItemProps {
  text: string;
}

export default function AchievementItem({ text }: AchievementItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
        <span className="text-sm text-amber-700">✓</span>
      </div>
      <span className="text-slate-700">{text}</span>
    </div>
  );
}
