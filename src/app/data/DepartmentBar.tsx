// app/components/DepartmentBar.tsx
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
} from "recharts";
import { byDepartment } from "@/lib/data/aggregations";
import type { StaffRow } from "@/lib/data/dataUtils";

export default function DepartmentBar() {
  const [data, setData] = useState<{ department: string; staff: number }[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        const arr = byDepartment(json).map((x) => ({
          department: x.key,
          staff: x.count,
        }));
        setData(arr);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-3">Staff by Department</h3>

      {/* Scroll container */}
    {/* Scroll container */}
<div className="overflow-x-auto">
  <div
    style={{
      width: data.length * 30, // ⬅️ increase px per department
      height: 440, // a bit taller to fit angled labels
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout="horizontal" data={data} margin={{ left: 20, bottom: 80 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="department"
          type="category"
          interval={0}
          angle={-30}
          textAnchor="end"
          tick={{ fontSize: 10 }} // slightly larger
        />
        <YAxis type="number" />
        <Tooltip />
        <Bar dataKey="staff" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
  );
}
