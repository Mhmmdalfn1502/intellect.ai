import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const teamMembers = [
    { name: "Muhammad Alfan", role: "UX Researcher, UI Designer, Front-end Developer", image: "alfan1.png", linked: "https://www.linkedin.com/in/muhammad-alfan-5a85b728a/" },
    { name: "Angelive Hilsunny", role: "UX Researcher, UI Designer, UX Writer", image: "angle1.png", linked: "https://www.linkedin.com/in/angelivehilsunny/" },
  ];

  return (
    <div className="bg-white w-screen h-full relative">
      {/* Background Image */}
      <img className="absolute inset-0 w-full h-full object-cover z-[-1]" src="BG.png" alt="Background" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section data-aos="fade-up" className="relative flex flex-col items-center justify-center text-center pt-30 pb-20 px-6 text-white">
        <h1 className="text-4xl font-bold text-[#3D3155]">Tentang Kami</h1>
        <p className="mt-4 max-w-2xl text-[#8B80A3]">Kami adalah tim kreatif yang berfokus pada desain logo, branding, dan pengembangan digital untuk meningkatkan identitas bisnis Anda.</p>
      </section>

      {/* Tentang Kami */}
      <section data-aos="fade-up" className="px-6 lg:px-28 py-16 bg-[#3D3155]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Siapa Kami?</h2>
          <p className="mt-4 text-[#8B80A3] max-w-3xl mx-auto">
            Kami adalah tim profesional dengan pengalaman bertahun-tahun dalam desain dan pengembangan digital. Kami mengutamakan kreativitas, inovasi, dan solusi yang sesuai dengan kebutuhan klien.
          </p>
        </div>
      </section>

      {/* Tim Kami */}
      <section data-aos="fade-up" className="bg-gray-100 py-16 px-6 lg:px-28">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#3D3155]">Tim Kami</h2>
          <p className="mt-2 text-[#8B80A3]">Kami adalah individu berbakat yang bekerja bersama untuk memberikan hasil terbaik.</p>
        </div>

        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} data-aos="fade-up" className="flex flex-col items-center p-6 rounded-lg">
              <img src={member.image} alt={member.name} className="w-60 h-60 object-contain mb-4" />
              <h3 className="text-lg font-bold text-[#3D3155]">{member.name}</h3>
              <p className="text-sm text-gray-500 text-center">{member.role}</p>
              <a href={member.linked} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
