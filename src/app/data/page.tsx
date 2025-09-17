// app/page.tsx (or dashboard page)
"use client";

import { TopHero } from "@/components/TopHero";
import GenderDonut from "./GenderDonut";
import AgeHistogram from "./AgeHistogram";
import StaffOverviewDashboard from "./staff overview/page";

export default function Dashboard() {
  

  return (
    <>
    <TopHero
    ministryName="Ministry of Health"
    titleLabel="OUR ANALYTICS"
/>
    <main className="p-8 bg-gray-50 min-h-screen">
      <StaffOverviewDashboard/>
   

      <div className="py-10">
      <GenderDonut />
      </div>
      <div className="py-10">
      <AgeHistogram />
      </div> 
      {/* later: insert the charts grid */}
    </main>
    </>
  );
}
