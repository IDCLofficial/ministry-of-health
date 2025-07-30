import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";

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
                heading="Contact Us"
                buttonLabel="Contact Us"
                buttonHref="/contact"
            />
            {/* Footer */}
            <Footer />
        </div>
    )
}