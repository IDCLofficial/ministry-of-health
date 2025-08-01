import Image from "next/image";
import Link from 'next/link';
import AnimatedSection from "./AnimatedSection2";

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-8 px-4">
    {/* Left: Green Card */}
    <div className="w-[90%] md:w-[40%] flex items-center">
      <div className="relative w-full h-[300px] md:h-[75%] min-h-[300px] ">
        <Image src="/images/vacc4.png" alt="Istma" fill className="object-cover rounded" />
      </div>
    </div>
    {/* Right: Text and Buttons */}
    <div className="w-[90%] md:w-[55%] py-20 flex-1 flex flex-col justify-center items-start max-w-2xl px-2 min-h-0">
    <AnimatedSection>
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">2025 African Vaccination Week: Protecting Our Future
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-[700px]">
        Project Objective:
To achieve comprehensive immunization coverage across Imo State by reaching over 50,000 children and adults with essential vaccines. This initiative aims to prevent vaccine-preventable diseases, reduce child mortality rates, and strengthen the state&apos;s public health infrastructure. The Ministry is committed to ensuring equitable access to vaccination services, particularly in rural and underserved communities, through strategic partnerships with healthcare workers, community leaders, and international health organizations. By implementing evidence-based vaccination programs, conducting health education campaigns, and establishing robust monitoring systems, we aim to create a healthier, more resilient Imo State where every citizen has access to life-saving immunizations.
        </p>
        </AnimatedSection>
        <div className="flex flex-row gap-4 mt-4 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/projects" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[140px] text-center">
            Learn More
          </Link>
          <Link href="/contact-us" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[160px] text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
} 