import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "./ProjectCard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Health Projects",
  description: "Ongoing and completed health projects of the Imo State Ministry of Health aimed at improving healthcare access across Imo State.",
  path: "/projects",
});

export default function Projects() {
    return (
        <div>

            <TopHero
                ministryName="Driving Health Reforms"
                titleLabel="Projects"
            />

            {/* SkillUp Project */}
            <OngoingProjects />

            <CTASection
                heading="Join Us in Driving Health Reforms"
                subtext="Be part of our mission."
                buttonLabel="Contact Us"
                buttonHref="/contact-us"
            />
            {/* Footer */}
            <Footer />

        </div>
    )
}