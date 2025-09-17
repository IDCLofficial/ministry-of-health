// app/components/KpiCard.tsx
export default function KpiCard({ title, value, subtitle }: { title: string; value: string | number; subtitle?: string }) {
    return (
      <div className="bg-white shadow rounded-xl p-5 flex flex-col items-start">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-3xl font-bold mt-2">{value}</div>
        {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
      </div>
    );
  }
  