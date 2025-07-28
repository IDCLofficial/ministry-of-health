'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

// Move newsList here or import from a shared location
const newsData = [
  {
    title: "Ministry Launches 2025 African Vaccination Week",
    description: "The Imo State Ministry of Health recently launched the 2025 African Vaccination Week campaign, reaching over 50,000 children and adults across the state. The initiative was praised by healthcare professionals.",
    date: "Late June 2025",
    image: "/images/vacc3.png",
  },
  {
    title: "New Medical Equipment Distributed to Hospitals",
    description: "The Ministry of Health has distributed modern medical equipment to hospitals across Imo State, improving diagnostic capabilities and treatment options for patients.",
    date: "Mid June 2025",
    image: "/images/comm2.png",
  },
  {
    title: "Community Health Workers Training Program",
    description: "A comprehensive training program for community health workers has been launched to improve healthcare service delivery in rural communities across Imo State.",
    date: "Early June 2025",
    image: "/images/Homehero.jpg",
  },
  {
    title: "Mental Health Awareness Campaign Success",
    description: "The Ministry's mental health awareness campaign has successfully reached over 100,000 citizens, reducing stigma and improving access to mental health services.",
    date: "Late May 2025",
    image: "/images/vacc2.png",
  },
  {
    title: "Primary Healthcare Centers Commissioned",
    description: "Three new primary healthcare centers have been commissioned in rural areas, bringing quality medical services closer to underserved communities in Imo State.",
    date: "Mid May 2025",
    image: "/images/vacc3.png",
  },
  {
    title: "Healthcare Emergency Response System",
    description: "The Ministry has implemented a new emergency response system to improve healthcare delivery during emergencies and natural disasters across the state.",
    date: "Early May 2025",
    image: "/images/health3.png",
  }
];


function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function NewsSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(newsData);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions =
    query.length > 0
      ? newsData.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.toLowerCase();
    setResults(
      newsData.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      )
    );
    setShowSuggestions(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setShowSuggestions(true);
  }

  function handleSuggestionClick(title: string) {
    setQuery(title);
    setShowSuggestions(false);
  }

  useEffect(() => {
    return () => {
      setQuery("");
      setResults(newsData);
      setShowSuggestions(false);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-8 bg-white relative">
      <form className="flex w-full max-w-2xl" onSubmit={handleSearch} autoComplete="off">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none w-full"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-b shadow z-10 max-h-48 overflow-y-auto">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={() => handleSuggestionClick(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-2 rounded-r font-semibold"
        >
          Search
        </button>
      </form>
      {query.length > 0 && results.length > 0 && (
        <div className="w-full max-w-2xl mt-4">
          {results.map((item, idx) => (
            <Link key={idx} href={`/news/${slugify(item.title)}`} className="block border-b py-3 hover:bg-gray-50 transition">
              <div className="font-bold">{item.title}</div>
              <div className="text-xs text-gray-500 mb-1">{item.date}</div>
              <div className="text-sm text-gray-700 line-clamp-2">{item.description}</div>
            </Link>
          ))}
        </div>
      )}
      {query.length > 0 && results.length === 0 && (
        <div className="w-full max-w-2xl mt-4 text-center text-gray-500">No news found.</div>
      )}
    </div>
  );
} 