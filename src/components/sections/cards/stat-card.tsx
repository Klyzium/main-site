interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur">
      <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-300 mb-2">
        {value}
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </div>
  );
}
