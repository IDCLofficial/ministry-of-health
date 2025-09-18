// app/components/EmploymentPromotionsDashboard.tsx
"use client";
import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart, Line,
} from "recharts";
import type { StaffRow } from "@/lib/data/dataUtils";

// Convert Excel serial date → JS Date
function excelDateToJS(serial: number): Date {
  const utcDays = Math.floor(serial - 25569); // Excel epoch 1970 offset
  return new Date(utcDays * 86400 * 1000);
}

// Safe wrapper: handle string | number | undefined → number | null
function toSerial(value: string | number | undefined): number | null {
  if (value === undefined || value === null) return null;
  const num = typeof value === "string" ? parseInt(value, 10) : value;
  return isNaN(num) ? null : num;
}

// Difference in years between two Excel serials
function diffYears(startSerial: number, endSerial: number): number | null {
  try {
    const start = excelDateToJS(startSerial);
    const end = excelDateToJS(endSerial);
    return (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
  } catch {
    return null;
  }
}

// Typed shapes for chart datasets
type HistBin = { range: string; count: number };
type TrendPoint = { year: number; count: number };
type LastPromoDatum = { category: string; count: number };

export default function EmploymentPromotionsDashboard() {
  const [histData, setHistData] = useState<HistBin[]>([]);
  const [trendData, setTrendData] = useState<TrendPoint[]>([]);
  const [kpiValue, setKpiValue] = useState<number | null>(null);
  const [lastPromoData, setLastPromoData] = useState<LastPromoDatum[]>([]);

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json: StaffRow[]) => {
        const now = new Date();

        // --- Years of Service Histogram ---
        const histBuckets = { "0-5": 0, "6-10": 0, "11-20": 0, "21+": 0 };

        // --- First Appointment Year Trend ---
        const trendCounts: Record<number, number> = {};

        // --- First Promotion KPI ---
        let totalPromotionGap = 0;
        let promoCount = 0;

        // --- Last Promotion Distribution ---
        let last5 = 0;
        let older = 0;

        json.forEach((row) => {
          const firstApptSerial = toSerial(row["Date of First Appointment"]);
          const firstPromoSerial = toSerial(row["First Promotion Date"]);
          const lastPromoSerial = toSerial(row["Date of Last Promotion"]);

          // Years of Service
          if (firstApptSerial) {
            const start = excelDateToJS(firstApptSerial);
            const years =
              (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
            if (years <= 5) histBuckets["0-5"]++;
            else if (years <= 10) histBuckets["6-10"]++;
            else if (years <= 20) histBuckets["11-20"]++;
            else histBuckets["21+"]++;
          }

          // First Appointment Trend
          if (firstApptSerial) {
            const year = excelDateToJS(firstApptSerial).getFullYear();
            trendCounts[year] = (trendCounts[year] || 0) + 1;
          }

          // First Promotion KPI
          if (firstApptSerial && firstPromoSerial) {
            const gap = diffYears(firstApptSerial, firstPromoSerial);
            if (gap !== null) {
              totalPromotionGap += gap;
              promoCount++;
            }
          }

          // Last Promotion Distribution
          if (lastPromoSerial) {
            const lastPromo = excelDateToJS(lastPromoSerial);
            const diff =
              (now.getTime() - lastPromo.getTime()) /
              (1000 * 60 * 60 * 24 * 365);
            if (diff <= 5) last5++;
            else older++;
          }
        });

        setHistData(
          Object.entries(histBuckets).map(([range, count]) => ({
            range,
            count,
          }))
        );

        setTrendData(
          Object.entries(trendCounts)
            .map(([year, count]) => ({
              year: Number(year),
              count,
            }))
            .sort((a, b) => a.year - b.year)
        );

        setKpiValue(promoCount ? totalPromotionGap / promoCount : null);

        setLastPromoData([
          { category: "Last 5 years", count: last5 },
          { category: "Older", count: older },
        ]);
      });
  }, []);

  return (
    <div className="space-y-6">
      {/* Years of Service Histogram */}
      <div className="bg-white rounded-xl shadow p-4 h-[360px]">
        <h3 className="font-semibold mb-3">Years of Service</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={histData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* First Appointment Year Trend */}
      <div className="bg-white rounded-xl shadow p-4 h-[360px]">
        <h3 className="font-semibold mb-3">First Appointment Year Trend</h3>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* KPI Card */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold mb-2">Average Years to First Promotion</h3>
        <p className="text-3xl font-bold text-indigo-600">
          {kpiValue !== null ? kpiValue.toFixed(1) : "N/A"}
        </p>
      </div>

      {/* Last Promotion Distribution */}
      <div className="bg-white rounded-xl shadow p-4 h-[360px]">
        <h3 className="font-semibold mb-3">Last Promotion Distribution</h3>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={lastPromoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#f59e0b" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
