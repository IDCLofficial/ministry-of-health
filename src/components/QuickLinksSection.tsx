import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedSection from "./AnimatedSection";

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
    image: "/images/health3.png",
    href: "/departments",
  },
];

export default function QuickLinksSection() {
  return (
    <section className="py-16 mb-8 flex items-center justify-center flex-col w-full">
      <h2 style={{marginBottom: '3rem'}} className="text-center font-bold text-4xl md:text-5xl">Quick Links</h2>
      <div className="flex flex-wrap justify-center gap-y-8 gap-x-4 w-full md:w-[92vw] mx-auto px-4">
     
         {links.map((link) => (
          <div key={link.title} className="flex flex-col items-center h-full relative overflow-hidden transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
            <div className="relative w-full h-[140px] md:h-[200px] z-0">
              <Image src={link.image} alt={link.title} fill className="object-cover" />
            </div>
            <Link href={link.href} className="flex-1 flex flex-col justify-between relative p-4 md:p-6 bg-white -mt-[30px] md:-mt-[30px] 
            w-[90%] h-[120px] md:h-[180px] mx-auto shadow-md hover:scale-105 transition-all duration-300">
              <div>
                <AnimatedSection>
                <h3 className={`text-dark-secondary text-base md:text-lg font-bold mb-2`}>{link.title}</h3>
                <p className="text-dark-primary-body text-[1rem] mb-4 md:mb-6">{link.description}</p>
             </AnimatedSection>
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