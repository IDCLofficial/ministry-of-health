import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Title } from "@/components/Title";

interface MediaHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  searchBar?: React.ReactNode;
}

const MediaHeroSection: React.FC<MediaHeroSectionProps> = ({ title, subtitle, backgroundImage, searchBar }) => {
  return (
    <section
      className="relative w-full h-[50vh] md:h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
        <h1 className="w-max text-xs sm:text-sm md:text-[14px] font-medium bg-white rounded-[2rem] px-3 sm:px-4 md:px-[1rem] py-1 sm:py-2 md:py-[0.5rem]">
          
          {title}</h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl drop-shadow-lg">{subtitle}</p>
        </div> */}

<AnimatedSection>
            {/* Navigation Highlight */}
            <div className="relative z-10 flex justify-center">
                <Title label={title} />
            </div>
            <div className="relative z-10 flex justify-center my-6">
                <div className="w-full sm:w-[80%] md:w-[60%] flex flex-col items-center text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-[3rem] font-bold text-white leading-tight">
                         {subtitle}
                    </h1>
                </div>
            </div>
            {searchBar && <div className="w-full max-w-xl mx-auto">{searchBar}</div>}
        </AnimatedSection>
    </section>
  );
};

export default MediaHeroSection; 