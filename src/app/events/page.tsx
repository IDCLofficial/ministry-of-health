import EventsTabsSection from "./EventsTabsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import EventsListSection from "./EventsListSection";

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Transforming Healthcare for a Healthier and More Resilient Imo" titleLabel="Events" />
     
      <EventsListSection />
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
