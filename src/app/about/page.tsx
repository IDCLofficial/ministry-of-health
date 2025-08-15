import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { StructuresSection } from "@/components/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/components/DigitalNews";
import TeamPage from "./Team";

export default function AboutUs() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="Ministry of Health"
                titleLabel="About Us"
            />
            {/* Section Hero */}
            <SectionHero
               aboutText="The Ministry of Health in Imo State serves as a vital engine for healthcare transformation, especially as the state seeks to promote public health and medical inclusion. While there's still room for growth and reform, the ministry represents a key opportunity for healthcare access and sustainable development in Imo State. The Ministry of Health in Imo State is a government agency responsible for promoting healthcare access and regulating medical programs within the state. It is a strategic part of the state's development plan, especially considering Imo's diverse population. The ministry was established to oversee and coordinate all healthcare services, including primary healthcare, disease prevention, and medical infrastructure development. Over the years, successive governments in Imo State have recognized the importance of providing quality healthcare services to all citizens, which are essential for the region's development and prosperity."
 
               imgSrc="/images/abouthealth.png"
                                  altText="Our Story - Imo State Ministry of Health conference event"
            />
           <TeamPage/>
            <MissionVisionCard />
            {/* Objectives Section */}
            <ObjectivesSection />
            {/* Structures Section */}
            <StructuresSection
                imgSrc="/images/building.png"
            />
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