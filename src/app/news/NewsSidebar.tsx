"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const newsList = [
  {
    title: "Ministry Launches 2025 African Vaccination Week",
    date: "Late June 2025",
    img: "/images/commisioner.png",
    category: "Latest Updates",
  },
];

const categories = [
  { name: "Latest Updates" },
  { name: "Policies" },
];

const popularNews = newsList;

export default function NewsSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get('category');

  const handleCategorySelect = (category: string) => {
    if (category === selectedCategory) {
      // If clicking the same category, clear the filter
      router.push('/news');
    } else {
      // Set the new category
      router.push(`/news?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">CATEGORIES</h3>
        <ul className="space-y-2">
          {categories.map((cat, idx) => {
            const count = newsList.filter(news => news.category === cat.name).length;
            const isSelected = selectedCategory === cat.name;
            return (
              <li key={idx} className="flex justify-between text-gray-700 text-sm">
                <button 
                  onClick={() => handleCategorySelect(cat.name)}
                  className={`flex justify-between w-full transition-colors ${
                    isSelected 
                      ? 'text-green-700 font-semibold' 
                      : 'hover:text-green-700'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span>{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {selectedCategory && (
          <button 
            onClick={() => router.push('/news')}
            className="mt-4 text-sm text-gray-500 hover:text-green-700 transition-colors"
          >
            ← Show All News
          </button>
        )}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">POPULAR NEWS</h3>
        <ul className="space-y-4">
        {popularNews.map((news, idx) => (
            <li key={idx}>
               <Link
          key={idx}
          href={`/news/${slugify(news.title)}`}
          className="bg-white overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer"
        >
              <div className="flex gap-3 items-center group hover:text-green-700 transition-colors w-full">
                <div className="w-14 h-14 relative rounded overflow-hidden">
                  <Image src={news.img} alt={news.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight line-clamp-2 group-hover:text-green-700">{news.title}</div>
                  <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
                </div>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 