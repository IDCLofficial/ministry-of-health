// app/components/WorkforceDashboard.tsx
"use client";
import { useMemo } from "react";
import type { StaffRow } from "@/lib/data/dataUtils";
import staff from "../../../../public/data/staff.json"; // 👈 your dataset file
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from "recharts";

// --- Helpers (same style as EmploymentPromotionsDashboard) ---
// Convert Excel serial date → JS Date
function excelDateToJS(serial: number): Date {
  const utcDays = Math.floor(serial - 25569); // Excel epoch offset
  return new Date(utcDays * 86400 * 1000);
}

// Safe wrapper for string | number | undefined → number | null
function toSerial(value: string | number | undefined): number | null {
  if (value === undefined || value === null) return null;
  const num = typeof value === "string" ? parseInt(value, 10) : value;
  return isNaN(num) ? null : num;
}

// Get staff age from Excel serial
function getAge(dobSerial: string | number | undefined): number | null {
  const serial = toSerial(dobSerial);
  if (!serial) return null;
  const dob = excelDateToJS(serial);
  const diff = Date.now() - dob.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
}

export default function WorkforceDashboard() {
  // --- Retirement Projections ---
  const retirementData = useMemo(() => {
    let staff55 = 0;
    let staff60 = 0;
    staff.forEach((row: StaffRow) => {
      const age = getAge(row["Date of Birth"]);
      if (age !== null) {
        if (age >= 55) staff55++;
        if (age >= 60) staff60++;
      }
    });
    return [
      { category: "less than 10yrs", count: staff55 },
      { category: "less than 5yrs", count: staff60 },
    ];
  }, []);

  // --- Staff Distribution by Grade Level ---
  const gradeData = useMemo(() => {
    const map: Record<string, number> = {};
    staff.forEach((row: StaffRow) => {
      const grade = row["Current Grade Level"] || "Unknown";
      map[grade] = (map[grade] || 0) + 1;
    });
    return Object.entries(map).map(([grade, count]) => ({
      grade,
      count,
    }));
  }, []);



  return (
    <div className="p-2 md:p-6 space-y-10">
      {/* Retirement Projections */}
      <div className="bg-white rounded-xl shadow p-4 h-[360px]">
        <h2 className="text-md lg:text-xl font-bold mb-4">Retirement Projections</h2>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={retirementData}>
            <XAxis dataKey="category" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" radius={[8, 8, 0, 0]} >
            <LabelList dataKey="count" position="top" className="fill-gray-700 text-xs" />
          </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Staff Distribution by Grade Level */}
      <div className="bg-white rounded-xl shadow p-4 h-[360px]">
        <h2 className="text-xl font-bold mb-4">
          Staff Distribution by Grade Level
        </h2>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={gradeData}>
            <XAxis dataKey="grade" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

     
    </div>
  );
}
