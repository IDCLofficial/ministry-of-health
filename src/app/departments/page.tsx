import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

export default function UnitsPage() {
  return (
    <div className="bg-white">
     {/* Top Hero */}
     <TopHero
  ministryName="Departments helping to transform healthcare in Imo State"
  titleLabel="Departments"
/>
      <UnitsTabsSection />
    
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
