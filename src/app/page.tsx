import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
        backgroundImage="/images/hero.png"
        overlayText="Imo State Ministry of Health"
        heading="Transforming Healthcare "
        subheading="in Imo State"
        description="Empowering communities through accessible, efficient, and quality healthcare services — through innovative policies, compassionate care, and community health programs."
      />
      {/* About Mandate Section */}
      <AboutMandateSection
        label="ABOUT US"
        title="Our Mandate —"
        subheading="Ministry of Health"
        description="Welcome to the Imo State Ministry of Health.

Our Mission is to promote accessible, efficient, and quality healthcare for all. Our Vision is a healthier Imo, ready for the future. Our Core Values are compassion, integrity, innovation, and accessibility.

As a key driver of healthcare transformation, our Ministry plays a critical role in positioning Imo State as a hub for public health and medical services. We are committed to fostering sustainable health development, attracting medical investment, and creating opportunities through a robust policy framework and forward-thinking leadership. Our priorities include enhancing access to quality healthcare, developing systems and infrastructure, promoting disease prevention and healthy living, formulating and enforcing health policies, and strengthening health emergency preparedness."
        buttonText="Learn More"
        image1="/images/health1.png"
        image2="/images/health2.png"
      />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/comm2.png"
        imageAlt="Dr. Chioma Egu, Honourable Commissioner for Health in Imo State"
        title="About The Commissioner"
        bio="Dr. Chioma Egu is the Honourable Commissioner for Health in Imo State, bringing extensive experience in healthcare management and public health. She is a passionate advocate for accessible healthcare, mental health awareness, and community wellbeing. Dr. Egu has led key initiatives including the 2025 African Vaccination Week and various mental health advocacy efforts across the state."
        details="Under Dr. Egu's leadership, the Ministry has implemented innovative healthcare programs, strengthened emergency preparedness, and enhanced access to quality medical services. She works closely with healthcare workers, local communities, and international partners to deliver sustainable healthcare impact. Her vision focuses on creating a healthier Imo State where every citizen has access to compassionate, quality healthcare services."
      />
      <div className="bg-white">

      {/* Skill Up Section */}
      <SkillUpSection />
      {/* Quick Links Section */}
      <QuickLinksSection />
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

      {/* Stats Section */}
      <Stats />
      {/* Featured Partners Section */}
      <FeaturedPartners />
      {/* CTASection */}
      <CTASection
        heading="Your Trusted Health Partner"
        subtext="Be part of our mission to create a healthier, more accessible, and compassionate healthcare system for all Imo State citizens. We deliver Compassionate Care, Accessible Services, and Future-Ready Systems."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
