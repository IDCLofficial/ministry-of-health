// app/components/GenderDonut.tsx
"use client";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { byGender } from "@/lib/data/aggregations";
import type { StaffRow } from "@/lib/data/dataUtils";

// Fixed colors for genders
const GENDER_COLORS: Record<string, string> = {
  Male: "#2563eb",    // blue
  Female: "#ec4899",  // pink
  Unknown: "#9ca3af", // gray
};

export default function GenderDonut() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        const arr = byGender(json).map((x) => ({ name: x.key, value: x.count }));
        setData(arr);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-[360px]">
      <h3 className="font-semibold mb-3">Gender Distribution</h3>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius="70%"
            label={({ name, value }) => `${value} ${name}`} // show "812 Female"
          >
            {data.map((entry, i) => (
              <Cell
                key={`cell-${i}`}
                fill={GENDER_COLORS[entry.name] || "#f59e0b"}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} ${name}`, ""]} />
          <Legend verticalAlign="bottom" height={36} /> {/* 👈 adds legend */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
