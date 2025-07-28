import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Dr. Chioma Egu',
    role: 'Hon. Commissioner for Health',
    image: '/images/women1.jpg',
    bio: 'Provides visionary leadership and strategic direction for the Ministry of Health in Imo State. Leads key initiatives including the 2025 African Vaccination Week and mental health advocacy efforts.'
  },
  {
    name: 'Mr. Adinnu Kennedy',
    role: 'Permanent Secretary',
    image: '/images/women2.jpg',
    bio: 'Oversees the administrative and operational aspects of the Ministry of Health, ensuring efficient service delivery and policy implementation across all healthcare facilities in Imo State.'
  },
  {
    name: 'Dr. Sarah Okonkwo',
    role: 'Director of Public Health',
    image: '/images/Homehero.jpg',
    bio: 'Leads public health initiatives, disease prevention programs, and community health campaigns to improve the overall health outcomes of Imo State citizens.'
  },
  {
    name: 'Mrs. Grace Nwosu',
    role: 'Director of Medical Services',
    image: '/images/Homehero.jpg',
    bio: 'Coordinates medical services across healthcare facilities, ensuring quality care delivery and proper medical equipment distribution throughout the state.'
  },
  {
    name: 'Dr. Emmanuel Okechukwu',
    role: 'Director of Primary Healthcare',
    image: '/images/Homehero.jpg',
    bio: 'Manages primary healthcare centers and community health programs, focusing on accessible healthcare services for rural and underserved communities.'
  },
  {
    name: 'Mrs. Patricia Iheanacho',
    role: 'Director of Health Planning',
    image: '/images/Homehero.jpg',
    bio: 'Develops and implements health policies, strategic planning, and coordinates with international health partners to advance healthcare in Imo State.'
  }
];

export default function TeamPage() {
  return (
    <section className="w-full min-h-screen bg-[#f4f8f9] py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Our Team</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center w-[280px]">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h2>
            <p className="text-green-700 font-medium mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm mb-2 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
      <Link href="/" className="px-7 py-3 bg-green-600 text-white rounded text-sm font-semibold shadow hover:bg-green-700 transition">
        <button>Back to Home</button>
      </Link>
    </section>
  );
} 