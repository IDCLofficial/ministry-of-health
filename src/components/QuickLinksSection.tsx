import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Projects",
    description: "See our projects and initiatives.",
    image: "/images/health1.png",
    href: "/projects",
  },
  {
    title: "Events",
    description: "Join our events and activities.",
    image: "/images/health2.png",
    href: "/events",
  },
  {
    title: "News",
    description: "Read our latest news and updates.",
    image: "/images/comm2.png",
    href: "/news",
  },
  {
    title: "Departments",
    description: "Learn about our departments and their activities.",
    image: "/images/vacc4.png",
    href: "/departments",
  },
];

export default function QuickLinksSection() {
  return (
    <section className="py-16 mb-8 flex items-center justify-center flex-col w-full">
      <h2 style={{marginBottom: '3rem'}} className="text-center font-bold text-4xl md:text-5xl">Quick Links</h2>
      <div className="flex flex-wrap justify-center gap-y-8 gap-x-4 w-full md:w-[92vw] mx-auto px-4">
        {/* {links.map((link) => (
          <div
            key={link.title}
            className="relative flex flex-col mb-0 rounded-xl shadow-xl border border-gray-100 w-full max-w-xs bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            <div className="w-full h-[120px] sm:h-[200px] md:w-[350px] md:h-[296px] relative">
              <Image
                src={link.image}
                alt={link.title}
                fill
                className="object-cover rounded-t-xl"
                priority
              />
            </div>
            <div className="bg-white w-full rounded-b-xl p-3 md:p-6 flex flex-col gap-3 md:gap-4 mt-0 md:mt-4 z-10">
              <h3 className="text-base md:text-2xl font-bold text-gray-900 leading-tight">{link.title}</h3>
              <div className="flex flex-col md:flex-row items-start justify-between mt-2 gap-2 md:gap-0">
                <p className="text-gray-500 text-xs md:text-base leading-relaxed max-w-full md:max-w-[180px]">{link.description}</p>
                <a
                  href={link.href}
                  className="mt-2 md:mt-0 ml-0 md:ml-4 bg-green-600 rounded w-8 h-8 min-w-[48px] flex-shrink-0 flex items-center justify-center text-white hover:bg-green-700 transition-transform duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
                  aria-label={`Go to ${link.title}`}
                >
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 15l5-5-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))} */}
         {links.map((link) => (
          <div key={link.title} className="flex flex-col items-center h-full relative overflow-hidden transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
            <div className="relative w-full h-[140px] md:h-[200px] z-0">
              <Image src={link.image} alt={link.title} fill className="object-cover" />
            </div>
            <Link href={link.href} className="flex-1 flex flex-col justify-between relative p-4 md:p-6 bg-white -mt-[30px] md:-mt-[30px] 
            w-[90%] h-[120px] md:h-[180px] mx-auto shadow-md hover:scale-105 transition-all duration-300">
              <div>
                <h3 className={`text-dark-secondary text-base md:text-lg font-bold mb-2`}>{link.title}</h3>
                <p className="text-dark-primary-body text-[1rem] mb-4 md:mb-6">{link.description}</p>
              </div>
              <span className="self-end bg-green-700 hover:bg-green-800 text-white w-8 max-h-8 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        ))} 
      </div>
    </section>
  );
} 