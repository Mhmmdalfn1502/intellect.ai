import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icon menu dan close

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Sembunyikan Navbar di halaman SignIn dan SignUp
  if (location.pathname === "/signin" || location.pathname === "/signup") {
    return null;
  }

  const getLinkClass = (path) =>
    location.pathname === path ? "text-[#4A3AFF] font-bold" : "text-[#B3A6CF]";

  return (
    <nav className="px-6 md:px-28 py-2 lg:py-6 bg-white/20 backdrop-blur-xl fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <img src="/LOGO.png" alt="Logo" className="w-[120px] md:w-[145px]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-[18px]">
          <li>
            <Link to="/" className={`px-4 py-2 ${getLinkClass("/")}`}>Home</Link>
          </li>
          <li>
            <Link to="/reference" className={getLinkClass("/reference")}>Reference</Link>
          </li>
          <li>
            <Link to="/course" className={getLinkClass("/course")}>Course</Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass("/about")}>About</Link>
          </li>
        </ul>

        {/* Desktop Sign In / Sign Up */}
        <ul className="hidden md:flex text-[14px] justify-between w-[186px] bg-[#E3E3F8] px-[7px] py-[12px] rounded-3xl">
          <li>
            <Link to="/signin" className="text-white font-bold bg-[#4A3AFF] hover:bg-[#3A2AFF] py-[10px] px-[18px] rounded-3xl">Sign In</Link>
          </li>
          <li>
            <Link to="/signup" className="text-[#4A3AFF] font-bold py-[10px] px-[18px] rounded-3xl">Sign Up</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-0 text-[#4A3AFF] bg-transparent border-0 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute top-[60px] left-0 w-full">
          <ul className="flex flex-col items-center gap-4 text-[18px]">
            <li>
              <Link to="/" className={getLinkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/reference" className={getLinkClass("/reference")} onClick={() => setIsOpen(false)}>Reference</Link>
            </li>
            <li>
              <Link to="/course" className={getLinkClass("/course")} onClick={() => setIsOpen(false)}>Course</Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass("/about")} onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="flex flex-col gap-2 w-full text-center">
              <Link to="/signin" className="text-white font-bold bg-[#4A3AFF] py-2 rounded-3xl w-3/4 mx-auto" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link to="/signup" className="text-[#4A3AFF] font-bold py-2 rounded-3xl w-3/4 mx-auto border border-[#4A3AFF]" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
