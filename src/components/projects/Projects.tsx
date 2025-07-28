import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Upgrading of Public Health Centres (PHCs) across Imo State",
    description: "In November 2024, the Imo State government invited bids to upgrade 20 PHCs in Ihitte/Uboma, Obowo, Okigwe, and Onuimo LGAs, followed by another round for 22 PHCs in multiple LGAs including Oru East, Owerri West, Oguta, Ehime Mbano, Ideato and others. These are part of a World Bank-supported initiative to enhance immunization and malaria service delivery at 150 selected PHCs across the state.",
    status: "closed",
  },
  {
    title: "Diabetes Awareness & Care (DAC Phase II Project)",
    description: "In May 2024, HSDF and the Imo State Ministry of Health launched Phase II of the DAC project, training 85 healthcare workers from 42 public/private facilities on diabetes and hypertension screening, care pathways, and data tools. The project aims to reach tens of thousands by 2026.",
    status: "active",
  },
  {
    title: "Maternal, Newborn & Child Health Week (MNCHW 2024)",
    description: "Flagged off in late June 2024, this biannual campaign delivered high-impact health services to pregnant women and children across rural and urban LGAs. Services included antenatal care, immunization, nutritional assessments, and health education.",
    status: "closed",
  },
  {
    title: "\"Eye Can See\" Initiative (2025 edition)",
    description: "The 2025 rollout of Seplat Energy / NNPCL's flagship eye healthcare CSR programme provided free cataract surgeries, eye screenings, and spectacles to underserved Imo communities. The state Ministry of Health helped coordinate logistics and technical support.",
    status: "active",
  },
  {
    title: "Comprehensive Health Service Delivery PPP",
    description: "In mid-2025, Imo State signed MoUs with JNC International Limited, Sepat Medical Investment, and Heartland Hospital Management Corp. These private partners will equip and manage state medical facilities, deliver technical expertise and funding, and align operations with the Imo State Health Insurance Scheme to ensure accessible, high-quality care.",
    status: "active",
  },
  {
    title: "2025 African Vaccination Week Campaign",
    description: "Ongoing immunization program targeting over 50,000 children and adults across Imo State, providing essential vaccines and health education to prevent vaccine-preventable diseases and strengthen public health infrastructure.",
    status: "active",
  },
];

export default function Projects() {
  const activeProjects = projects.filter(p => p.status === "active");
  const closedProjects = projects.filter(p => p.status === "closed");

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="w-full md:w-[90vw] flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-700 mb-6">Projects & Initiatives</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Active Projects</h2>
            <div className="space-y-4">
              {activeProjects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-green-50 rounded-xl border-l-4 border-green-600 shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-200 hover:scale-[1.02] hover:bg-green-100 hover:border-green-700 transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg text-green-800 mb-1 transition-colors duration-300 hover:text-green-900">{project.title}</h3>
                  <p className="text-gray-700 text-sm transition-colors duration-300 hover:text-gray-800">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-500">Closed Projects</h2>
            <div className="space-y-4">
              {closedProjects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="p-4 bg-gray-100 rounded-xl border-l-4 border-gray-400 shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-300 hover:scale-[1.02] hover:bg-gray-200 hover:border-gray-600 transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg text-gray-700 mb-1 transition-colors duration-300 hover:text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Images Side */}
        <div className="flex-1 flex flex-col items-center justify-center lg:w-[20%] gap-6 py-4">
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-green-300 hover:scale-105 transform hover:-rotate-1">
            <Image src="/images/health1.png" alt="Projects 1" fill className="object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-green-300 hover:scale-105 transform hover:rotate-1">
            <Image src="/images/health2.png" alt="Projects 2" fill className="object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-green-300 hover:scale-105 transform hover:-rotate-1">
            <Image src="/images/health3.png" alt="Projects 3" fill className="object-cover transition-transform duration-500 hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
} 