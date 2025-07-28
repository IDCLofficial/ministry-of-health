import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "@/components/projects/Projects";

export default function Projects() {
    return (
        <div>
            {/* top hero */}
            <TopHero ministryName="Transforming Healthcare for a Healthier and More Resilient Imo" titleLabel="Projects" />
          
            {/* SkillUp Project */}
            <OngoingProjects />
            {/* Digital section */}
            <CTASection
        heading="Join Us in Transforming Healthcare in Imo State"
        subtext="Be part of our mission to create a healthier, more accessible, and compassionate healthcare system for all Imo State citizens. We deliver Compassionate Care, Accessible Services, and Future-Ready Systems."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />

        </div>
    )
}