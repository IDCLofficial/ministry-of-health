import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Health Events",
  description: "Upcoming and past events organised by the Imo State Ministry of Health, including programmes, campaigns and public engagements.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Transforming Imo's Health Sector" titleLabel="Events" />
      <EventsListSection />
      <CTASection
          heading="Join Us in Transforming the Health Sector"
          subtext="Be part of our mission to create a quality health sector."
          buttonLabel="Contact Us"
          buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
