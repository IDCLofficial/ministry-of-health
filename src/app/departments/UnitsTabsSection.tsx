"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Department of Public Health",
    image: "/images/Homehero.jpg",
    description: "Focuses on disease prevention, health promotion, and community health programs to improve the overall health outcomes of Imo State citizens."
  },
  {
    name: "Department of Medical Services",
    image: "/images/vacc2.png",
    description: "Coordinates medical services across healthcare facilities, ensuring quality care delivery and proper medical equipment distribution throughout the state."
  },
  {
    name: "Department of Primary Healthcare",
    image: "/images/vacc3.png",
    description: "Manages primary healthcare centers and community health programs, focusing on accessible healthcare services for rural and underserved communities."
  },
  {
    name: "Department of Health Planning",
    image: "/images/vaccine.png",
    description: "Develops and implements health policies, strategic planning, and coordinates with international health partners to advance healthcare in Imo State."
  },
  {
    name: "Department of Emergency Medical Services",
    image: "/images/health3.png",
    description: "Provides emergency medical response services and coordinates disaster preparedness and response efforts across the state."
  }
];

export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {departments.map((dept, idx) => (
            <li key={dept.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border transition cursor-pointer
                  ${activeIdx === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black border-transparent hover:bg-green-50 hover:text-green-700'}
                `}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover" />
        </div>
        <p className="text-gray-700 text-sm md:text-base">{active.description}</p>
      </div>
    </section>
  );
} 