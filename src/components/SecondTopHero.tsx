import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

interface SecondTopHeroProps {
  headingText: string;
}

export default function SecondTopHero({ headingText }: SecondTopHeroProps) {
  return (
    <section className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center">
      <Image
        src="/images/women3.jpg"
        alt="Hero"
        fill
        className="object-cover w-full h-full"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-20">
        <AnimatedSection>
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {headingText}
        </h1>
        </AnimatedSection>
      </div>
    </section>
  );
}
