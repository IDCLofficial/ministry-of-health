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

interface StaffData {
  state: string;
  staff: number;
}

export default function StaffChart() {
  const [data, setData] = useState<StaffData[]>([]);

  // Load staff.json from /public/data
  useEffect(() => {
    fetch("/data/staff.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="w-full h-[500px] bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Staff Distribution by State
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="staff" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
