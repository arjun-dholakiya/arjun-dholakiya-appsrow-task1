export default function MetricCard({ value, label }) {
  return (
    <div className="bg-[#0a3a44] rounded-2xl px-6 py-6">
      <p className="text-2xl font-semibold mb-1">{value}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
