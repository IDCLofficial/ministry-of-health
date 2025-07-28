import Image from "next/image";

export default function OngoingProjects() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Ongoing Projects: Ministry of Health</h2>
        <p className="text-gray-700">The Ministry of Health (MOH) is actively implementing impactful projects to improve healthcare infrastructure, enhance service delivery, and support communities across Imo State. These initiatives are designed to foster better health outcomes and ensure accessible, quality healthcare for all citizens.</p>
        <div className="text-gray-700 space-y-3">
          <p><b>Upgrading of Public Health Centres (PHCs) across Imo State:</b> In November 2024, the Imo State government invited bids to upgrade 20 PHCs in Ihitte/Uboma, Obowo, Okigwe, and Onuimo LGAs, followed by another round for 22 PHCs in multiple LGAs including Oru East, Owerri West, Oguta, Ehime Mbano, Ideato and others. These are part of a World Bank-supported initiative to enhance immunization and malaria service delivery at 150 selected PHCs across the state.</p>
          <p><b>Diabetes Awareness & Care (DAC Phase II Project):</b> In May 2024, HSDF and the Imo State Ministry of Health launched Phase II of the DAC project, training 85 healthcare workers from 42 public/private facilities on diabetes and hypertension screening, care pathways, and data tools. The project aims to reach tens of thousands by 2026.</p>
          <p><b>Maternal, Newborn & Child Health Week (MNCHW 2024):</b> Flagged off in late June 2024, this biannual campaign delivered high-impact health services to pregnant women and children across rural and urban LGAs. Services included antenatal care, immunization, nutritional assessments, and health education.</p>
          <p><b>&ldquo;Eye Can See&rdquo; Initiative (2025 edition):</b> The 2025 rollout of Seplat Energy / NNPCL&apos;s flagship eye healthcare CSR programme provided free cataract surgeries, eye screenings, and spectacles to underserved Imo communities. The state Ministry of Health helped coordinate logistics and technical support.</p>
          <p><b>Comprehensive Health Service Delivery PPP:</b> In mid-2025, Imo State signed MoUs with JNC International Limited, Sepat Medical Investment, and Heartland Hospital Management Corp. These private partners will equip and manage state medical facilities, deliver technical expertise and funding, and align operations with the Imo State Health Insurance Scheme to ensure accessible, high-quality care.</p>
        </div>
        <div className="flex gap-6 mt-6">
          <Image src="/images/Homehero.jpg" alt="PHC Upgrade Project" width={120} height={80} className="rounded" />
          <Image src="/images/ocda.jpeg" alt="Healthcare Initiative" width={120} height={80} className="rounded" />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/commisioner.png" alt="Ongoing Projects" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 