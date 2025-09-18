// app/components/HighestQualificationStacked.tsx
"use client";
import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, LabelList
} from "recharts";
import type { StaffRow } from "@/lib/data/dataUtils";

const QUAL_LEVELS = ["FSLC", "WAEC", "RN", "RM", "HND", "B.SC", "MBBS", "MBBCH"];

export default function HighestQualificationStacked() {
  const [data, setData] = useState<{ level: string; count: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        const counts: Record<string, number> = {};
        json.forEach((row) => {
          const level = row["Entry Qualification Title"];
          if (level) {
            counts[level] = (counts[level] || 0) + 1;
          }
        });
        const arr = QUAL_LEVELS.map((level) => ({
          level,
          count: counts[level] || 0,
        }));
        setData(arr);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-[360px]">
      <h3 className="font-semibold mb-3">Entry Qualification Level</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" stackId="a" fill="#10b981">
            {/* 👇 Adds the count labels on top of each bar */}
            <LabelList dataKey="count" position="top" fill="#333" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
