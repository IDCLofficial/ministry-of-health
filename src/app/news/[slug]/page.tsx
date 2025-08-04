import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
    title: "Ministry Launches 2025 African Vaccination Week",
    date: "June 15, 2025",
    img: "/images/commisioner.png",
  },
 
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/commisioner.png"
                alt="Commissioner Launching Campaign"
                width={900}
                height={400}
                className="object-cover w-full h-[260px] md:h-[320px]"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Ministry Launches 2025 African Vaccination Week</h1>
            <p className="text-gray-500 text-sm">Late June 2025 • Latest Updates</p>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              The Imo State Ministry of Health recently launched the 2025 African Vaccination Week campaign, reaching over 50,000 children and adults across the state. The initiative, led by the Honourable Commissioner for Health, Dr. Chioma Egu, aims to improve immunization coverage, raise awareness about vaccine-preventable diseases, and strengthen the state’s healthcare system.
            </p>
            <p className="text-gray-700 mb-6">
              The campaign featured mobile vaccination clinics, public health sensitization, and collaboration with local healthcare providers. It also targeted hard-to-reach rural areas, ensuring that even the most underserved communities received essential immunizations.
            </p>
            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image
                  src="/images/women2.jpg"
                  alt="Vaccination Week Outreach"
                  width={600}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Highlights:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>Vaccination of over 50,000 individuals across urban and rural areas.</li>
                  <li>Mobile clinics deployed to improve reach in remote communities.</li>
                  <li>Health education campaigns focused on vaccine safety and benefits.</li>
                  <li>Strong partnerships with local health workers and NGOs.</li>
                  <li>Widespread community engagement and positive public response.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
                  <span className="font-bold">
                    &ldquo;Vaccines save lives. This campaign is about protecting every child and family in Imo State through equitable access to essential healthcare.&rdquo;
                  </span>
                </blockquote>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              Healthcare professionals across the state have praised the Ministry’s efforts, noting the campaign’s efficiency, organization, and its role in preventing future disease outbreaks. Many residents expressed appreciation for the government’s proactive approach.
            </p>
            <p className="text-gray-700 mt-2">
              The 2025 African Vaccination Week marks a step forward in achieving universal health coverage in Imo State, reinforcing the Ministry’s dedication to accessible and inclusive healthcare for all.
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

      {/* Section 3: Footer (optional) */}
    </div>
  );
}
