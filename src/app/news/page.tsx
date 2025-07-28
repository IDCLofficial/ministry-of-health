import { Suspense } from "react";
import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

function NewsContent() {
  return (
    <>
      <NewsSearchBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid />
        </div>
      </div>
    </>
  );
}

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Transforming Healthcare for a Healthier and More Resilient Imo" titleLabel="News" />
      <Suspense fallback={<div className="p-8 text-center">Loading news...</div>}>
        <NewsContent />
      </Suspense>
      <CTASection
        heading="Join Us in Transforming Healthcare in Imo State"
        subtext="Be part of our mission to create a healthier, more accessible, and compassionate healthcare system for all Imo State citizens. We deliver Compassionate Care, Accessible Services, and Future-Ready Systems."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
                    
      <Footer />
    </div>
  );
}
