import Image from "next/image";

export default function StrategicGoals() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 border-t">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Strategic Goals (2025–2030)</h2>
        <p className="text-gray-700">
          The Ministry of Health is committed to advancing healthcare access, public health, and medical services for all citizens in Imo State. Our strategic goals for 2025–2030 include:
        </p>
        <div className="text-gray-700 space-y-3">
          <p><b>Enhanced Healthcare Access:</b> Expand primary healthcare services to reach 100% of rural communities and improve healthcare infrastructure across all local government areas.</p>
          <p><b>Disease Prevention & Control:</b> Implement comprehensive vaccination programs, health education campaigns, and preventive healthcare measures to reduce disease burden.</p>
          <p><b>Quality Medical Services:</b> Upgrade medical facilities, train healthcare workers, and implement quality assurance systems to ensure world-class healthcare delivery.</p>
          <p><b>Emergency Preparedness:</b> Establish robust emergency medical response systems and disaster preparedness protocols to handle health emergencies effectively.</p>
          <p><b>Health Information Systems:</b> Develop integrated health information management systems for data-driven decision making and improved patient care.</p>
          <p><b>Mental Health Services:</b> Expand mental health awareness programs and establish accessible mental health services across the state.</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/initiatives.png" alt="Strategic Goals" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 