"use client"

import React, { useState } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const mediaItems = [
  {
    image: "/images/comm2.png",
    title: "PHC Upgrading & Immunization Launch - Imo State",
    isVideo: false,
  },
  {
    image: "/images/commisioner.png",
    title: "Maternal, Newborn & Child Health Week 2025",
    isVideo: false,
  },
  {
    image: "/images/vacc4.png",
    title: "Diabetes Awareness & Care Training Program",
    isVideo: false,
  },
  {
    image: "/images/Homehero.jpg",
    title: "World Health Day 2025: Health for All Campaign",
    isVideo: false,
  },
  {
    image: "/images/vacc2.png",
    title: "Eye Can See Initiative - Free Cataract Surgeries",
    isVideo: false,
  },
  {
    image: "/images/vacc3.png",
    title: "Healthcare Emergency Response System Launch",
    isVideo: false,
  },
  {
    image: "/images/comm2.png",
    title: "Medical Equipment Distribution to Hospitals",
    isVideo: false,
  },
  {
    image: "/images/Homehero.jpg",
    title: "Press Release: New Health Insurance Scheme",
    isVideo: false,
  },
  {
    image: "/images/vacc4.png",
    title: "Community Health Workers Training Program",
    isVideo: false,
  },
];


export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Media"
        subtitle="Explore our gallery"
        backgroundImage="/images/gradient.png"
        // searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>
      <CTASection
        heading="Your Trusted Health Partner"
        subtext="Be part of our mission to create a healthier, more accessible, and compassionate healthcare system for all Imo State citizens. We deliver Compassionate Care, Accessible Services, and Future-Ready Systems."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
