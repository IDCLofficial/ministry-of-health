import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import CommissionerSection from "@/components/CommissionerSection";
import { StructuresSection } from "@/components/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/components/DigitalNews";

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
                aboutText="The Ministry of Health in Imo State serves as a vital engine for healthcare transformation, especially as the state seeks to promote public health and medical inclusion. While there's still room for growth and reform, the ministry represents a key opportunity for healthcare access and sustainable development in Imo State.\nThe Ministry of Health in Imo State is a government agency responsible for promoting healthcare access and regulating medical programs within the state. It is a strategic part of the state's development plan, especially considering Imo's diverse population.\nThe ministry was established to oversee and coordinate all healthcare services, including primary healthcare, disease prevention, and medical infrastructure development.\nOver the years, successive governments in Imo State have recognized the importance of providing quality healthcare services to all citizens, which are essential for the region's development and prosperity."
                imgSrc="/images/health1.png"
                                  altText="Our Story - Imo State Ministry of Health conference event"
            />
            {/* Commissioner Section */}
            <CommissionerSection
                imageSrc="/images/commisioner.png"
                imageAlt="Hon. Commissioner Lady Nkechi Ugwu"
                title="Hon. Commissioner Lady Nkechi Ugwu"
                bio="As Commissioner for Health, Dr. Chioma Egu is a passionate advocate for accessible healthcare, mental health awareness, and community wellbeing. Her leadership has advanced impactful programs supporting healthcare access, disease prevention, and medical infrastructure development across Imo State."
                details="Beyond spearheading immunization campaigns, Dr. Chioma Vivian Egu was instrumental in positioning Imo State as a national leader in health insurance. Under her guidance, the Imo State Health Insurance Agency significantly expanded enrollment, enhanced maternal health services, and facilitated over 1,200 caesarean sections between April 2023 and April 2025, all while maintaining notably low maternal mortality rates.

Renowned for her strategic vision, results-driven leadership, and unwavering dedication to public health, Dr. Egu continues to shape a more inclusive and responsive healthcare system in Imo State.

"
                
            />
            <MissionVisionCard />
            {/* Objectives Section */}
            <ObjectivesSection />
            {/* Structures Section */}
            <StructuresSection
                imgSrc="/images/building.png"
            />
            {/* CTASection */}
            <CTASection
                heading="Join our mission to empower women and promote social justice in Imo State"
                buttonLabel="See Our Initiatives"
                buttonHref="/projects"
            />
            {/* Footer */}
            <Footer />
        </div>
    )
}