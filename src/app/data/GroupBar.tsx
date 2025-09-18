// app/components/GroupBar.tsx
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
  LabelList,
  Cell,
} from "recharts";
import type { StaffRow } from "@/lib/data/dataUtils";

// Colors for groups
const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6"];

// Mapping abbreviations to full names
const GROUP_LABELS: Record<string, string> = {
  ISSH: "Imo State Specialist Hospital",
  ISPHCDA: "Imo State Primary Health Care Development Agency",
  IMSUTH: "Imo State University Teaching Hospital",
  SMOH: "Imo State Ministry of Health",
  HMB: "Imo State Hospital Management Board",
};

export default function GroupBar() {
  const [data, setData] = useState<{ group: string; count: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        const counts: Record<string, number> = {};
        json.forEach((row) => {
          const g = row.Group?.trim() || "Unknown";
          counts[g] = (counts[g] || 0) + 1;
        });
        const arr = Object.entries(counts).map(([group, count]) => ({
          group,
          count,
        }));
        setData(arr);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 my-6">
      <h3 className="font-semibold mb-3">Staff by Institution / Group</h3>
      <div className="h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="group"
              angle={-25}
              textAnchor="end"
              interval={0}
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              <LabelList dataKey="count" position="top" fontSize={12} />
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Manual Legend */}
      <div className="mt-2 text-sm space-y-1">
        {Object.entries(GROUP_LABELS).map(([abbr, full], i) => (
          <div key={abbr} className="flex items-center gap-2 border-2 border-gray-400 p-2 md:border-none md:p-o my-2 md:my-0">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
            />
            <span className="text-xs md:text-lg mx-1">{abbr}:</span>  {full}
          </div>
        ))}
      </div>
    </div>
  );
}
