import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const contactInfo = {
  address: "Block 9, State Secretariat Complex, Owerri, Imo State",
  email: "ministryofhealthprimaryhealth@gmail.com",
  phone: "+234 703 795 0397",
  socials: [
    { icon: <FaFacebookF />, href: "https://web.facebook.com/p/Imo-State-Ministry-Of-Health-61575637561313/?_rdc=1&_rdr#" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/imoministryofhealth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  ],
};

const ContactInfoSection = () => (
  <div className="mb-8 md:mb-0">
    <p className="mb-4 text-gray-700 text-base max-w-xl">Have questions, proposals, or feedback? We are here to support. Reach out through any of the channels below.</p>
    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
    <ul className="space-y-2 mb-4">
      <li className="flex items-start gap-2 text-gray-800"><FaMapMarkerAlt className="mt-1" /> <span>{contactInfo.address}</span></li>
      <li className="flex items-center gap-2 text-gray-800"><FaEnvelope /> <span>{contactInfo.email}</span></li>
      <li className="flex items-center gap-2 text-gray-800"><FaPhone /> <span>{contactInfo.phone}</span></li>
    </ul>
    <div className="flex gap-4 mt-2">
      {contactInfo.socials.map((s, i) => (
        <a key={i} href={s.href} className="text-gray-700 hover:text-green-700 text-xl" target="_blank" rel="noopener noreferrer">{s.icon}</a>
      ))}
    </div>
  </div>
);

export default ContactInfoSection; 