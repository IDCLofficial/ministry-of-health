import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = {
  row1: [
    {
      title: "Department of Public Health",
      description: "Focuses on disease prevention, health promotion, and community health programs to improve the overall health outcomes of Imo State citizens."
    },
    {
      title: "Department of Medical Services",
      description: "Coordinates medical services across healthcare facilities, ensuring quality care delivery and proper medical equipment distribution throughout the state."
    },
    {
      title: "Department of Primary Healthcare",
      description: "Manages primary healthcare centers and community health programs, focusing on accessible healthcare services for rural and underserved communities."
    }
  ],
  row2: [
    {
      title: "Department of Health Planning",
      description: "Develops and implements health policies, strategic planning, and coordinates with international health partners to advance healthcare in Imo State."
    },
    {
      title: "Department of Emergency Medical Services",
      description: "Provides emergency medical response services and coordinates disaster preparedness and response efforts across the state."
    },
    {
      title: "Department of Health Information Management",
      description: "Manages health data, statistics, and information systems to support evidence-based decision making and policy development."
    }
  ]
};

    return (
      <section className="w-full bg-[#1D1D1D] py-20">
      <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
          {/* Header */}
          <h2 className="text-[43px] font-medium text-white">
              Our Structure
          </h2>
          <p className="text-white text-sm sm:text-base md:text-[1rem] mb-8 sm:mb-16 w-full sm:w-[80%] md:w-[70%] mx-auto">
  The Ministry of Health is dedicated to providing quality healthcare, protecting public health, and supporting communities through medical services, health programs, and community-driven initiatives in Imo State.
</p>

          {/* Main Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-20">
              <Image
                  src={imgSrc}
                  alt="Ministry Building"
                  fill
                  className="object-cover"
                  priority
              />
          </div>

          {/* Department Cards Grid */}
          <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row gap-2 w-full justify-between">
                  {departments.row1.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
              <div className="flex flex-row w-full gap-2">
                  {departments.row2.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/departments"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors shadow-md"
            >
              See More
            </a>
          </div>
      </div>
  </section>
    );
}; 