// app/components/MaritalStatusHistogram.tsx
"use client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
  LabelList,
} from "recharts";
import { byMaritalStatus } from "@/lib/data/aggregations";
import type { StaffRow } from "@/lib/data/dataUtils";

// Fixed colors for marital status categories
const MARITAL_COLORS: Record<string, string> = {
  Married: "#10b981",   // green
  Single: "#3b82f6",    // blue
  Divorced: "#f59e0b",  // amber
  Widowed: "#ef4444",   // red
  Unknown: "#9ca3af",   // gray
};

export default function MaritalStatusHistogram() {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        const arr = byMaritalStatus(json).map((x) => ({
          name: x.key,
          value: x.count,
        }));
        setData(arr);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-[360px]">
      <h3 className="font-semibold mb-3">Marital Status Distribution</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value) => [`${value}`, "Count"]} />
          <Legend />
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]} // rounded top corners
          >
            {data.map((entry, i) => (
              <Cell
                key={`cell-${i}`}
                fill={MARITAL_COLORS[entry.name] || "#8b5cf6"}
              />
            ))}
            {/* 👇 values on top of bars */}
            <LabelList dataKey="value" position="top" fill="#374151" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
