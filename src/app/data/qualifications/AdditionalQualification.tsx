// app/components/AdditionalQualificationsBar.tsx
"use client";
import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, LabelList
} from "recharts";
import type { StaffRow } from "@/lib/data/dataUtils";

export default function AdditionalQualificationsBar() {
  const [data, setData] = useState<{ category: string; count: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        let upgraded = 0;
        let notUpgraded = 0;

        json.forEach((row) => {
          // check for Additional Qualification fields dynamically
          const hasUpgrade = Object.keys(row).some(
            (key) =>
              key.toLowerCase().includes("additional qualification") &&
              row[key] &&
              String(row[key]).trim() !== ""
          );

          if (hasUpgrade) {
            upgraded++;
          } else {
            notUpgraded++;
          }
        });

        setData([
          { category: "Upgraded", count: upgraded },
          { category: "Not Upgraded", count: notUpgraded },
        ]);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4 h-[360px]">
      <h3 className="font-semibold mb-3">Additional Qualifications</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]}>
            {/* 👇 adds the count values above bars */}
            <LabelList dataKey="count" position="top" fill="#333" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
