interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
}

export default function ContactCard({ icon, title, value }: ContactCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
      <div className="mb-3 text-2xl">{icon}</div>
      <h4 className="mb-2 font-semibold text-white">{title}</h4>
      <p className="text-sm text-slate-400">{value}</p>
    </div>
  );
}
