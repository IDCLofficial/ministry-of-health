export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Healthcare Access & Quality",
            description: "Ensure accessible, efficient, and quality healthcare services for all citizens across Imo State through improved infrastructure and medical facilities."
        },
        {
            title: "Disease Prevention & Public Health",
            description: "Implement comprehensive vaccination programs, health education campaigns, and preventive healthcare measures to reduce disease burden and promote healthy living."
        },
        {
            title: "Medical Services & Treatment",
            description: "Provide quality medical treatment, diagnostic services, and specialized care through well-equipped healthcare facilities and trained medical professionals."
        },
        {
            title: "Community Health & Outreach",
            description: "Foster community health programs, rural healthcare access, and public health awareness to improve health outcomes across all communities."
        },
        {
            title: "Emergency Preparedness & Response",
            description: "Establish robust emergency medical response systems and disaster preparedness protocols to handle health emergencies effectively."
        },
        {
            title: "Health Policy & Innovation",
            description: "Develop and implement evidence-based health policies, strategic planning, and innovative healthcare solutions for sustainable health development."
        }
    ];

    const coreValues = [
        "Compassion",
        "Integrity",
        "Innovation",
        "Accessibility",
        "Quality Care",
        "Public Health"
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Imo State Ministry of Health Objectives */}
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-12">
                        Imo State Ministry of Health objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 