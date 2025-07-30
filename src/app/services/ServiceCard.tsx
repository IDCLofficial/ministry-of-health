import AnimatedSection from "@/components/AnimatedSection2";
import React from "react";

const services = [
  {
    title: "Public Health and Disease Control",
    description:
      "Implementing programs for disease prevention and control, including immunization, sanitation, and outbreak response. Ensuring the health and safety of communities across the state.",
  },
  {
    title: "Primary Health Care Services",
    description:
      "Strengthening primary healthcare centers to provide accessible, affordable, and quality medical services to rural and urban populations. Promoting maternal, newborn, and child health.",
  },
  {
    title: "Hospital Services and Secondary Care",
    description:
      "Overseeing the operation and upgrade of general hospitals and specialist medical centers. Ensuring availability of skilled personnel, modern equipment, and essential medicines.",
  },
  {
    title: "Health Promotion and Education",
    description:
      "Raising awareness on healthy living, nutrition, hygiene, and preventive healthcare through public campaigns, school programs, and community outreach initiatives.",
  },
  {
    title: "Health Workforce Development",
    description:
      "Training, recruiting, and retaining qualified health professionals. Supporting continuous professional development and deploying personnel to underserved areas.",
  },
  {
    title: "Health Planning, Research, and Statistics",
    description:
      "Collecting and analyzing health data to guide policy, planning, and resource allocation. Conducting research to improve health service delivery and address emerging health challenges.",
  },
  {
    title: "Partnerships and Donor Coordination",
    description:
      "Collaborating with development partners, NGOs, and donor agencies to enhance health infrastructure, service delivery, and funding for health programs in Imo State.",
  },
];



const ServiceCard = ({ title, description }: { title: string; description: string;}) => (
 <AnimatedSection>
 <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-lg font-bold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
  </div>
  </AnimatedSection>
);

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-[#f7f9fa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}