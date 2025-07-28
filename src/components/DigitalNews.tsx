import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function MissionVisionCard() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f7f9fa]">
      <AnimatedSection>
      <div className="bg-white rounded-3xl shadow-xl p-10 w-[80vw] flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">Ministry of Health</h2>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mission Statement</h3>
            <p className="text-gray-700 text-base">
              To promote accessible, efficient, and quality healthcare for all citizens of Imo State through innovative medical services, disease prevention programs, and community health initiatives, ensuring every individual has access to compassionate and comprehensive healthcare.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Vision Statement</h3>
            <p className="text-gray-700 text-base">
              A healthier Imo, ready for the future, where quality healthcare is accessible to all citizens, public health is prioritized, and medical services are delivered with compassion, integrity, and innovation.
            </p>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
} 