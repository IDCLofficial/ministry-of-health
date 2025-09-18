// app/components/QualificationDashboard.tsx
"use client";
import FslcYearLineChart from "./FslcLineChart";
import HighestQualificationStacked from "./HighestQualification";
import AdditionalQualificationsBar from "./AdditionalQualification";

export default function QualificationDashboard() {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow space-y-6">
      <h2 className="text-xl font-bold mb-4">Qualification Dashboard</h2>

      {/* FSLC Year Distribution */}
      <div>
        <FslcYearLineChart />
      </div>

      {/* Highest Qualification Level */}
      <div>
        <HighestQualificationStacked />
      </div>

      {/* Additional Qualifications */}
      <div>
        <AdditionalQualificationsBar />
      </div>
    </div>
  );
}
