"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const newsData = [
  {
    title: "Ministry Launches 2025 African Vaccination Week",
    description: "The Imo State Ministry of Health recently launched the 2025 African Vaccination Week campaign, reaching over 50,000 children and adults across the state. The initiative was praised by healthcare professionals.",
    date: "Late June 2025",
    image: "/images/commisioner.png",
    category: "Latest Updates",
  },
];

export default function NewsGrid() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  // Filter news based on selected category
  const filteredNews = selectedCategory 
    ? newsData.filter(item => item.category === selectedCategory)
    : newsData;

  return (
    <div className="w-full">
      {selectedCategory && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Category: {selectedCategory}</h2>
          <p className="text-gray-600">Showing {filteredNews.length} news items</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((item, idx) => (
          <Link
            key={idx}
            href={`/news/${slugify(item.title)}`}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer"
          >
            <div className="relative w-full h-48">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded font-semibold">{item.category}</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">{item.description}</p>
              <span className="text-gray-500 text-xs mt-auto">{item.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 