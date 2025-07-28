import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Imo State Launches 2025 African Vaccination Week Campaign",
    description: "Dr. Chioma Egu, Commissioner for Health, officially launched the 2025 African Vaccination Week in Imo State, emphasizing the importance of immunization in preventing diseases and protecting public health across all communities.",
    date: "30th May 2025",
    image: "/images/commisioner.png",
  },
  {
    title: "New Primary Healthcare Centers Commissioned in Rural Communities",
    description: "The Ministry of Health has commissioned three new primary healthcare centers in rural areas of Imo State, bringing quality medical services closer to underserved communities and improving healthcare access.",
    date: "28th May 2025",
    image: "/images/health1.png",
  },
  {
    title: "Mental Health Awareness Campaign Kicks Off Across Imo State",
    description: "The Ministry of Health, in collaboration with healthcare professionals, has launched a comprehensive mental health awareness campaign to reduce stigma and improve access to mental health services.",
    date: "25th May 2025",
    image: "/images/IMSG-Logo.svg"
  },
];

export default function LatestNewsSection() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Latest News</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl justify-center mb-8">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col w-full max-w-md p-0 overflow-hidden transition hover:shadow-md"
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="400px"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-base mb-6">{item.description}</p>
              <div className="mt-auto font-bold text-black text-base">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/news">
        <p className="bg-green-700 animate-bounce hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors text-center block">See More</p>
      </Link>
    </section>
  );
} 