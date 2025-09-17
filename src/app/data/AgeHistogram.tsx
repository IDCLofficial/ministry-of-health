// app/data/AgeHistogram.tsx
"use client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";
import { ageHistogram } from "@/lib/data/aggregations";
import type { StaffRow } from "@/lib/data/dataUtils";

// Pick distinct colors per age group
const AGE_COLORS = [
  "#2563eb", // blue
  "#10b981", // green
  "#f59e0b", // amber
  "#ef4444", // red
  "#8b5cf6", // violet
  "#14b8a6", // teal
];

export default function AgeHistogram() {
  const [data, setData] = useState<{ label: string; count: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        setData(ageHistogram(json));
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-[340px]">
      <h3 className="font-semibold mb-3">Age Distribution</h3>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {/* show count labels on top of bars */}
            <LabelList dataKey="count" position="top" fontSize={12} />
            {/* custom colors per bar */}
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={AGE_COLORS[i % AGE_COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
