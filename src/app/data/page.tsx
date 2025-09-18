// app/page.tsx
"use client";

import { useRef } from "react";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

import { TopHero } from "@/components/TopHero";
import StaffOverviewDashboard from "./staff overview/page";
import DemographicsDashboard from "./demographics/page";
import QualificationDashboard from "./qualifications/page";
import EmploymentPromotionsDashboard from "./employment-promotions/page";
import WorkforceDashboard from "./workforce/page";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Dashboard() {
  const dashboardRef = useRef<HTMLDivElement>(null);

  const sectionTitles = [
    "Staff Overview Dashboard",
    "Demographics Dashboard",
    "Qualification Dashboard",
    "Employment Promotions Dashboard",
    "Workforce Dashboard",
    "CTA Section",
    "Footer",
  ];

  const handleDownloadPDF = async () => {
    if (!dashboardRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const sectionNodes = dashboardRef.current.querySelectorAll(".pdf-section");

    for (let i = 0; i < sectionNodes.length; i++) {
      const section = sectionNodes[i] as HTMLElement;

      // Generate PNG with html-to-image
      const imgData = await toPng(section, { cacheBust: true });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (section.offsetHeight * pdfWidth) / section.offsetWidth;

      if (i > 0) pdf.addPage();

      // Section title
      pdf.setFontSize(14);
      pdf.setTextColor(40);
      pdf.text(sectionTitles[i] || `Section ${i + 1}`, 14, 15);

      // Add image below header
      pdf.addImage(imgData, "PNG", 0, 25, pdfWidth, pdfHeight);
    }

    pdf.save("health-ministry-dashboard.pdf");
  };

  return (
    <>
      <TopHero ministryName="Ministry of Health" titleLabel="OUR ANALYTICS" />

      {/* Download Button */}
      <div className="flex justify-end p-4 bg-gray-50">
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          📥 Download PDF
        </button>
      </div>

      {/* Dashboard Content */}
      <main
        ref={dashboardRef}
        className="p-8 bg-gray-50 min-h-screen space-y-12"
      >
        <div className="pdf-section"><StaffOverviewDashboard /></div>
        <div className="pdf-section"><DemographicsDashboard /></div>
        <div className="pdf-section"><QualificationDashboard /></div>
        <div className="pdf-section"><EmploymentPromotionsDashboard /></div>
        <div className="pdf-section"><WorkforceDashboard /></div>

        <div>
          <CTASection
            heading="Join Us in Transforming Healthcare in Imo State for a Healthier and More Resilient Imo"
            subtext="Be part of our mission to create a healthier, more accessible, and compassionate healthcare system for all Imo State citizens. We deliver Compassionate Care, Accessible Services, and Future-Ready Systems."
            buttonLabel="Contact Us"
            buttonHref="/contact-us"
          />
        </div>

        <Footer />
      </main>
    </>
  );
}
