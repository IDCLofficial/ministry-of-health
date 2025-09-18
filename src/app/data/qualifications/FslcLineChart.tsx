// app/components/FslcYearLineChart.tsx
"use client";
import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";
import type { StaffRow } from "@/lib/data/dataUtils";

export default function FslcYearLineChart() {
  const [data, setData] = useState<{ year: string; count: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        const counts: Record<string, number> = {};
        json.forEach((row) => {
          if (row["Fslc Year"]) {
            counts[row["Fslc Year"]] = (counts[row["Fslc Year"]] || 0) + 1;
          }
        });
        const arr = Object.entries(counts).map(([year, count]) => ({ year, count }));
        arr.sort((a, b) => parseInt(a.year) - parseInt(b.year)); // sort by year
        setData(arr);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-[360px]">
      <h3 className="font-semibold mb-3">FSLC Year Distribution</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
