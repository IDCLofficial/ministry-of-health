"use client";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    name: "PHC Upgrading & Immunization Launch",
    image: "/images/comm2.png",
    description:
      "Official launch of the World Bank-supported PHC upgrade and immunization enhancement project in Ihitte/Uboma, with free immunizations, malaria testing, and health education for families."
  },
  {
    name: "Maternal, Newborn & Child Health Week (MNCHW 2025)",
    image: "/images/commisioner.png",
    description: "Biannual campaign providing antenatal care, immunization, nutrition, and health education to pregnant women and children across Imo State."
  },
  {
    name: "Diabetes Awareness & Care (DAC Phase II) Training",
    image: "/images/vacc4.png",
    description: "Training for healthcare workers on diabetes and hypertension screening, care pathways, and digital data tools, reaching 85 workers from 42 facilities."
  },
  {
    name: "World Health Day 2025: Health for All",
    image: "/images/Homehero.jpg",
    description: "A state-wide health fair with free screenings, health talks, and community outreach to mark World Health Day, in collaboration with WHO and local partners."
  },
  {
    name: "Eye Can See Initiative (2025 Edition)",
    image: "/images/vacc2.png",
    description: "Seplat Energy/NNPCL's flagship eye healthcare CSR programme, providing free cataract surgeries, eye screenings, and spectacles to underserved Imo communities."
  },
];

export default function EventsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = events[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {events.map((event, idx) => (
            <li key={event.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {event.name}
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