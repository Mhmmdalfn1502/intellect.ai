import React from "react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="relative w-full border-t border-[#3D3155]/20 py-6 px-4 lg:px-26 lg:py-16 bg-white">
      {/* <img src="BG.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 z-50">
        {/* Logo & Social Media */}
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <img src="LOGO.png" alt="Logo" className="w-36" />
          <p className="text-center lg:text-left text-[16px] text-[#8B80A3] leading-6">
            Empowering Your Brand with Insightful Logo Analysis and Creativity
          </p>
          <div className="flex gap-3">
            <FaYoutube size={30} className="text-[#4A3AFF]" />
            <FaFacebook size={30} className="text-[#4A3AFF]" />
            <FaTwitter size={30} className="text-[#4A3AFF]" />
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-4 lg:ms-6">
          <span className="text-[#3D3155] font-bold text-lg">About</span>
          <ul className="flex flex-col gap-2 text-[16px]">
            <li><a href="/" className="text-[#8B80A3]">About Us</a></li>
            <li><a href="/reference" className="text-[#8B80A3]">Features</a></li>
            <li><a href="/course" className="text-[#8B80A3]">News</a></li>
            <li><a href="/about" className="text-[#8B80A3]">Menu</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <span className="text-[#3D3155] font-bold text-lg">Company</span>
          <ul className="flex flex-col gap-2 text-[16px]">
            <li><a href="/" className="text-[#8B80A3]">Why intellect.ai</a></li>
            <li><a href="/reference" className="text-[#8B80A3]">Partner With Us</a></li>
            <li><a href="/course" className="text-[#8B80A3]">FAQ</a></li>
            <li><a href="/about" className="text-[#8B80A3]">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-4">
          <span className="text-[#3D3155] font-bold text-lg">Support</span>
          <ul className="flex flex-col gap-2 text-[16px]">
            <li><a href="/" className="text-[#8B80A3]">Account</a></li>
            <li><a href="/reference" className="text-[#8B80A3]">Support Center</a></li>
            <li><a href="/course" className="text-[#8B80A3]">Feedback</a></li>
            <li><a href="/about" className="text-[#8B80A3]">Contact Us</a></li>
            <li><a href="/about" className="text-[#8B80A3]">Accessibility</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <span className="text-[#3D3155] font-bold text-lg">Get in Touch</span>
          <p className="text-center lg:text-left text-[16px] text-[#8B80A3]">
            Empowering Your Brand with Insightful Logo Analysis and Creativity
          </p>
          <div className="flex items-center gap-2 border border-[#8B80A3] px-3 py-0 rounded-full w-full max-w-xs">
            <input
              type="text"
              className="flex-1 bg-transparent text-gray-700 outline-none"
              placeholder="Email Address"
            />
            <button className="bg-[#4A3AFF] p-2 rounded-full">
              <IoSend size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}