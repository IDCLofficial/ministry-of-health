import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "NOVEMBER 18, 2025",
    location: "IHITTE/UBOMA PHC, IMO STATE",
    title: "Flag-off: PHC Upgrading & World Bank Immunization Initiative",
    description: "Official launch of the World Bank-supported PHC upgrade and immunization enhancement project in Ihitte/Uboma, with state officials and community health workers.",
    img: "/images/comm2.png",
    details: `The Honourable Commissioner for Health, Dr. Chioma Egu, led the event, highlighting the importance of improved infrastructure and immunization coverage. The event included free immunizations, malaria testing, and health education for families.`,
    dateString: "2025-11-18T09:00:00",
  },
  {
    date: "JUNE 24, 2025",
    location: "OWERRI MUNICIPAL HALL",
    title: "Maternal, Newborn & Child Health Week (MNCHW 2025)",
    description: "Biannual campaign providing antenatal care, immunization, nutrition, and health education to pregnant women and children across Imo State.",
    img: "/images/commisioner.png",
    details: `The Ministry of Health, in partnership with UNICEF and local NGOs, delivered high-impact health services to thousands of women and children. The event featured free vitamin A supplementation, deworming, and maternal health talks.`,
    dateString: "2025-06-24T08:00:00",
  },
  {
    date: "MAY 10, 2025",
    location: "FEDERAL MEDICAL CENTRE, OWERRI",
    title: "Diabetes Awareness & Care (DAC Phase II) Training",
    description: "Training for healthcare workers on diabetes and hypertension screening, care pathways, and digital data tools.",
    img: "/images/vacc4.png",
    details: `HSDF and the Ministry of Health trained 85 healthcare workers from 42 facilities. The event included practical sessions on blood sugar monitoring, patient counseling, and digital record-keeping.`,
    dateString: "2025-05-10T09:00:00",
  },
  {
    date: "APRIL 7, 2025",
    location: "IMO STATE UNIVERSITY TEACHING HOSPITAL",
    title: "World Health Day 2025: Health for All",
    description: "A state-wide health fair with free screenings, health talks, and community outreach to mark World Health Day.",
    img: "/images/Homehero.jpg",
    details: `The Ministry of Health, in collaboration with WHO and local partners, provided free screenings for blood pressure, diabetes, and eye health. The event also featured health education booths and wellness activities for all ages.`,
    dateString: "2025-04-07T10:00:00",
  },
];



function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const now = new Date();
const upcomingEvents = events.filter(e => new Date(e.dateString) >= now);
const pastEvents = events.filter(e => new Date(e.dateString) < now);

export default function EventsListSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Upcoming Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        <div className="flex flex-col gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0">
              <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
                <Image src={event.img} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                    <span>{event.date}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                </div>
                <div className="flex justify-end md:justify-center">
                  <Link href={`/events/${slugify(event.title)}`} className="border border-green-600 text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50 transition">More Information</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 italic mb-16">No upcoming events at this time.</div>
      )}
      {/* Past Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Past Events</h2>
      {pastEvents.length > 0 ? (
        <div className="flex flex-col gap-8">
          {pastEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0 opacity-70">
              <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
                <Image src={event.img} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                    <span>{event.date}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 italic">No past events yet.</div>
      )}
    </section>
  );
} 