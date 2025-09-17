'use client'

import { StaffRow } from "@/lib/data/dataUtils";
import { useState, useEffect } from "react";
import { computeKPIs } from "@/lib/data/aggregations";
import KpiCard from "../KpiCard";
import GroupBar from "../GroupBar";
import DepartmentBar from "../DepartmentBar";

export default function StaffOverviewDashboard () {
  const [kpis, setKpis] = useState({
    total: 0,
    verified: 0,
    biometricCaptured: 0,
    pctVerified: 0,
    doctors: 0,
    imsuth: 0,
    issh: 0,
    isphcda: 0,
    hmb: 0,
    smoh: 0,
  });
  

  useEffect(() => {
    fetch("/data/staff.json")
      .then((r) => r.json())
      .then((json) => {
        setKpis(computeKPIs(json));
      });
  }, []);

  return (
    <main>
        <div className="w-full text-center py-3">
            <h1 className="text-3xl font-extrabold">
                STAFF OVERVIEW
            </h1>
        </div>
    <div className="my-4 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4  w-full">
 
  <KpiCard title="Total Staff" value={kpis.total} />
  <KpiCard title="Doctors" value={kpis.doctors} subtitle="MBBCH / MBBS" />
  <KpiCard title="IMSUTH Staff" value={kpis.imsuth} />
  <KpiCard title="ISSH Staff" value={kpis.issh} />
  <KpiCard title="ISPHCDA Staff" value={kpis.isphcda} />
  <KpiCard title="HMB Staff" value={kpis.hmb} />
  <KpiCard title="SMOH Staff" value={kpis.smoh} />


    </div>
    <GroupBar />

    {/* department bar */}
    <DepartmentBar />

    </main>
  );
}
