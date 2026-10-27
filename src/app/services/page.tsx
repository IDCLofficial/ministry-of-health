import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Health Services",
  description: "Services of the Imo State Ministry of Health, including public health and disease control, primary health care, hospital and secondary care, and health promotion.",
  path: "/services",
});

export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="What we do"
                titleLabel="Services"
            />
            <ServiceCard />
            
            {/* CTASection */}
            <CTASection
        heading="Your Trusted Health Partner"
        subtext="Be part of our mission to create a healthier, more accessible, and compassionate healthcare system for all Imo State citizens. We deliver Compassionate Care, Accessible Services, and Future-Ready Systems."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
            {/* Footer */}
            <Footer />
        </div>
    )
}