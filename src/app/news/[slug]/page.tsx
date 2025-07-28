import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
    title: "IMO STATE MINISTRY OF HEALTH LAUNCHES COMPREHENSIVE HEALTHCARE INITIATIVE",
    date: "MAY 15, 2025",
    img: "/images/women1.jpg",
  },
  {
    title: "NEW MEDICAL EQUIPMENT DISTRIBUTED TO HOSPITALS ACROSS IMO STATE",
    date: "APRIL 28, 2025",
    img: "/images/women2.jpg",
  },
  {
    title: "COMMUNITY HEALTH WORKERS TRAINING PROGRAM ANNOUNCED",
    date: "APRIL 10, 2025",
    img: "/images/women3.jpg",
  },
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]"> {/* pb-[180px] ensures body does not overlap next section */}
        <NewsHeroSection/>
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image src={'/images/women1.jpg'} alt="News Hero" width={900} height={400} className="object-cover w-full h-[260px] md:h-[320px]" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Imo State Ministry of Health Champions Healthcare Access and Public Health</h1>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              The Imo State Ministry of Health is at the forefront of promoting healthcare access, public health, and medical services across the state. Through innovative programs and advocacy, the ministry is creating opportunities for better health outcomes and improved quality of life for all citizens.
            </p>
            <p className="text-gray-700 mb-6">
              Under the leadership of Dr. Chioma Egu, the Honourable Commissioner for Health, the Ministry has launched several initiatives focused on disease prevention, quality treatment, and community wellbeing. These efforts include the 2025 African Vaccination Week campaign, mental health awareness programs, and the establishment of new primary healthcare centers in rural communities.
            </p>
            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image src="/images/women2.jpg" alt="Healthcare Initiative" width={600} height={300} className="object-cover w-full h-64" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Achievements and Focus Areas:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>Launch of the 2025 African Vaccination Week benefiting over 50,000 children and adults.</li>
                  <li>Commissioning of three new primary healthcare centers in rural communities.</li>
                  <li>Implementation of comprehensive mental health awareness campaigns.</li>
                  <li>Distribution of modern medical equipment to hospitals across the state.</li>
                  <li>Training programs for community health workers to improve service delivery.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
                  <span className="font-bold">&ldquo;Providing quality healthcare and medical services is the foundation for a healthy and prosperous society. The Ministry of Health is committed to building a future where every citizen in Imo State can access quality healthcare.&rdquo;</span>
                </blockquote>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              The Ministry works closely with healthcare professionals, local communities, and international partners to ensure that policies and programs are inclusive, sustainable, and impactful. By fostering partnerships and promoting evidence-based healthcare practices, Imo State is setting a standard for healthcare delivery in Nigeria.
            </p>
            <p className="text-gray-700 mt-2">
              The Ministry remains dedicated to enhancing healthcare access, improving medical infrastructure, and creating pathways for better health outcomes for all citizens of Imo State.
            </p>
            <p className="text-gray-700 mt-2">
              Together, we are building a healthier, more resilient Imo State for future generations.
            </p>
          </div>
        </NewsBodySection>
      </section>
      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div key={idx} className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs">
                <div className="relative w-full h-28">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">{item.title}</div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3: Footer */}
    </div>
  );
} 