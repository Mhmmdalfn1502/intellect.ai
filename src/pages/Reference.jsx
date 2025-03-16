import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaChevronDown } from "react-icons/fa6";
import Footer from "../components/Footer";
import { FaAngleRight } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
// import { IoIosArrowDropright } from "react-icons/io";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";

const jenislogo = [
  { name: "Monogram" },
  { name: "Wordmarks" },
  { name: "Symbolic Merk" },
  { name: "Combination Mark" },
  { name: "Emblem" },
  { name: "Mascot" },
  { name: "Abstract Mark" },
  { name: "Badge" },
  { name: "Responsive Logo" },
  { name: "Minimalism" },
  { name: "Vector" },
  { name: "Badge" },
  { name: "Responsive Logo" },
  { name: "Minimalism" },
  { name: "Vector" },
];

const LogoStyle = [{ name: "Only Text" }, { name: "Gradient" }, { name: "Flat" }, { name: "Only Shape" }, { name: "Emblem" }, { name: "Cartoon" }, { name: "Modern" }, { name: "Badge" }];

const RefList = [
  { id: 1, image: "/Ref/netflix.png", title: "Netflix", desc: "Revolutionizing entertainment with on-demand streaming and original content." },
  { id: 2, image: "/Ref/discord.png", title: "Discord", desc: "Empowering communities with seamless voice, video, and text communication." },
  { id: 3, image: "/Ref/epl.png", title: "Premier League", desc: "The world's most-watched football league, showcasing top-tier competition." },
  { id: 4, image: "/Ref/spotify.png", title: "Spotify", desc: "Streaming unlimited music and podcasts with personalized recommendations." },
  { id: 5, image: "/Ref/starbuck.png", title: "Starbucks", desc: "Bringing high-quality coffee experiences with a global community focus." },
  { id: 6, image: "/Ref/gojek.png", title: "Gojek", desc: "A super-app offering ride-hailing, food delivery, and digital payments." },
  { id: 7, image: "/Ref/netflix.png", title: "Netflix", desc: "Revolutionizing entertainment with on-demand streaming and original content." },
  { id: 8, image: "/Ref/discord.png", title: "Discord", desc: "Empowering communities with seamless voice, video, and text communication." },
  { id: 9, image: "/Ref/epl.png", title: "Premier League", desc: "The world's most-watched football league, showcasing top-tier competition." },
  { id: 10, image: "/Ref/netflix.png", title: "Netflix", desc: "Revolutionizing entertainment with on-demand streaming and original content." },
  { id: 11, image: "/Ref/discord.png", title: "Discord", desc: "Empowering communities with seamless voice, video, and text communication." },
  { id: 12, image: "/Ref/epl.png", title: "Premier League", desc: "The world's most-watched football league, showcasing top-tier competition." },
  { id: 13, image: "/Ref/spotify.png", title: "Spotify", desc: "Streaming unlimited music and podcasts with personalized recommendations." },
  { id: 14, image: "/Ref/starbuck.png", title: "Starbucks", desc: "Bringing high-quality coffee experiences with a global community focus." },
  { id: 15, image: "/Ref/gojek.png", title: "Gojek", desc: "A super-app offering ride-hailing, food delivery, and digital payments." },
  { id: 16, image: "/Ref/netflix.png", title: "Netflix", desc: "Revolutionizing entertainment with on-demand streaming and original content." },
  { id: 17, image: "/Ref/discord.png", title: "Discord", desc: "Empowering communities with seamless voice, video, and text communication." },
];

const Categories = [{ categories: "Sport" }, { categories: "Food" }, { categories: "Cafe" }, { categories: "Technology" }, { categories: "Entertaiment" }, { categories: "Game" }, { categories: "Drink" }, { categories: "Productivity" }];

const colors = ["#FFFFFF", "#000000", "#D1D1D1", "#FF5A5A", "#AE896E", "#FFD54F", "#FFEB3B", "#4DD0E1", "#1976D2", "#424242", "#D250FF"];

const FontStyles = [
  { name: "Serif", font: "serif" },
  { name: "Sans-serif", font: "sans-serif" },
  { name: "Monospace", font: "monospace" },
  { name: "Cursive", font: "cursive" },
  { name: "Fantasy", font: "fantasy" },
  { name: "Georgia", font: "Georgia, serif" },
  { name: "Arial", font: "Arial, sans-serif" },
  { name: "Courier", font: "Courier New, monospace" },
];

export default function Reference() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isLogoStyleOpen, setIsLogoStyleOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(false);
  const [isFontStyleOpen, setIsFontStyleOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("");

  return (
    <div className="bg-white w-screen h-full relative min-h-screen">
      {/* Background Image */}
      <img className="absolute inset-0 w-full h-full object-cover z-[-1]" src="BG.png" alt="" />

      <Navbar />

      <div className="relative flex flex-col px-4 lg:px-28 gap-4 z-10">
        {/* SEARCHBAR */}
        <div className="flex flex-row items-center justify-between w-full px-4 py-2 gap-2 mt-[60px] lg:mt-[100px] bg-white drop-shadow-sm rounded-4xl">
          <div className="flex gap-2 items-center">
            <span className="text-[14px] text-[#3D3155]">Collection</span>
            <FaChevronDown size={14} color="#3D3155" />
          </div>
          <div className="flex gap-2 items-center w-full ps-2">
            <input type="text" className="text-[#3D3155] w-full text-[14px]" placeholder="Search" />
            <img src="Ref/Magnifier.png" alt="" className="w-[24px] h-[24px]" />
          </div>
          <div className="h-[30px] w-[1px] bg-black"></div>
          <div className="flex items-center gap-2 w-[200px]">
            <img src="Ref/Picture.png" alt="" className="w-[24px] h-[24px]" />
            <span className="text-[14px] text-[#3D3155]">Search by image</span>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex flex-row justify-center gap-2 h-full">
          {/* FILTER BUTTON */}
          {!isOpen ? (
            <button className="flex flex-row gap-1 items-center justify-center bg-white rounded-4xl py-0 px-2 drop-shadow-sm" onClick={() => setIsOpen(true)}>
              <img src="Ref/Settings.png" alt="" className="w-[30px]" />
              <span className="text-[14px] text-[#3D3155]">Filter</span>
            </button>
          ) : (
            <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl drop-shadow-lg w-[250px] h-[750px] lg:h-[720px]">
              {/* CLOSE BUTTON */}
              <div className="flex flex-row gap-2 items-center justify-between">
                <div className="flex flex-row gap-1 items-center justify-center">
                  <img src="Ref/Settings.png" alt="" className="w-[30px]" />
                  <span className="text-[14px] text-[#3D3155]">Filter</span>
                </div>
                <button className="bg-transparent px-0 py-0" onClick={() => setIsOpen(false)}>
                  <IoIosClose size={24} color="#3D3155" />
                </button>
              </div>

              {/* CONTENT FILTER */}
              <div className="flex flex-col gap-6">
                {/* Category */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-[12px] text-[#3D3155] font-bold">Categories</span>
                    <button className="flex items-center px-0 py-0 w-[20px] bg-transparent" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                      {isCategoryOpen ? <GoChevronDown size={20} color="#3D3155" /> : <GoChevronRight size={20} color="#3D3155" />}
                    </button>
                  </div>

                  {isCategoryOpen && (
                    <div className="grid grid-flow-row grid-cols-2 items-center gap-2">
                      {Categories.map((category, index) => (
                        <button key={index} className="px-1 py-1 font-semibold text-[10px] bg-transparent text-[#3D3155] border-1 border-[#3D3155] rounded-2xl">
                          {category.categories}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Color */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-[12px] text-[#3D3155] font-bold">Color</span>
                    <button className="flex items-center px-0 py-0 w-[20px] bg-transparent" onClick={() => setIsColorOpen(!isColorOpen)}>
                      {isColorOpen ? <GoChevronDown size={20} color="#3D3155" /> : <GoChevronRight size={20} color="#3D3155" />}
                    </button>
                  </div>

                  {isColorOpen && (
                    <div className="grid grid-flow-row grid-cols-4 items-center gap-1">
                      <button className="w-5 h-5 border-1 border-gray-300 flex items-center justify-center bg-transparent">
                        <span className="rounded-full border flex items-center justify-center">
                        <IoIosClose size={20} color="#3D3155" />
                        </span>
                      </button>
                      {colors.map((color, index) => (
                        <button
                          key={index}
                          className={`w-5 h-5 border-2 flex items-center justify-center 
                          ${selectedColor === color ? "border-gray-300" : "border-transparent"}
                        `}
                          style={{ backgroundColor: color }}
                          onClick={() => setSelectedColor(color)}
                        >
                          {" "}
                          {selectedColor === color && (
                            <span className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                              <IoIosCheckmark size={20} color="white" />
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Logo Style */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-[12px] text-[#3D3155] font-bold">Logo Style</span>
                    <button className="flex items-center px-0 py-0 w-[20px] bg-transparent" onClick={() => setIsLogoStyleOpen(!isLogoStyleOpen)}>
                      {isLogoStyleOpen ? <GoChevronDown size={20} color="#3D3155" /> : <GoChevronRight size={20} color="#3D3155" />}
                    </button>
                  </div>

                  {isLogoStyleOpen && (
                    <div className="grid grid-flow-row grid-cols-2 items-center gap-2">
                      {LogoStyle.map((style, index) => (
                        <button key={index} className="px-1 py-1 font-semibold text-[10px] bg-transparent text-[#3D3155] border-1 border-[#3D3155] rounded-2xl">
                          {style.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Font Style */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-[12px] text-[#3D3155] font-bold">Font Style</span>
                    <button className="flex items-center px-0 py-0 w-[20px] bg-transparent" onClick={() => setIsFontStyleOpen(!isFontStyleOpen)}>
                      {isFontStyleOpen ? <GoChevronDown size={20} color="#3D3155" /> : <GoChevronRight size={20} color="#3D3155" />}
                    </button>
                  </div>

                  {isFontStyleOpen && (
                    <div className="grid grid-flow-row grid-cols-2 items-center gap-2">
                      {FontStyles.map((style, index) => (
                        <button
                          key={index}
                          className={`px-2 py-1 text-[12px] border border-[#3D3155] rounded-lg transition-all bg-transparent ${selectedFont === style.font ? "bg-[#3D3155] text-[#3D3155]" : "text-[#3D3155]"}`}
                          style={{ fontFamily: style.font }}
                          onClick={() => setSelectedFont(style.font)}
                        >
                          {style.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CONTENT JENIS LOGO */}
          <div className="relative flex flex-row w-full h-[35px] gap-2 overflow-x-auto no-scrollbar rounded-4xl ">
            {jenislogo.map((jenis, index) => (
              <button key={index} className="flex flex-row drop-shadow-sm items-center justify-center px-2 bg-white rounded-3xl text-[14px] text-[#3D3155] whitespace-nowrap">
                {jenis.name}
              </button>
            ))}
            <div className="absolute left-0 h-full w-[30px] bg-gradient-to-r from-[#4A3AFF]/10 to-black/0"></div>
            <div className="absolute right-0 h-full w-[30px] bg-gradient-to-l from-[#4A3AFF]/10 to-black/0"></div>
          </div>
        </div>

        {/* CARD CONTENT */}
        <div
          className={`ref-scroll overflow-y-scroll grid grid-flow-row h-screen ${
            isOpen ? "absolute grid-cols-1 lg:grid-cols-4 top-54 right-6 lg:right-32" : "items-center grid-cols-2 lg:grid-cols-5"
          } gap-4 mb-10 transition-all duration-300`}
        >
          {RefList.map((course) => (
            <a href="" className="flex flex-col hover:border-2 hover:border-[#4A3AFF] justify-between gap-4 bg-white/80 p-4 rounded-4xl w-[180px] h-[310px] lg:w-[210px] lg:h-[330px] backdrop-blur-md drop-shadow-2xl shadow-[#4A3AFF]">
              <div className="flex flex-col gap-2">
                <div className="relative flex bg-gradient-to-br from-green-100 to-blue-200 rounded-2xl">
                  <img src={course.image} alt={course.title} className="object-contain p-2 w-[200px] h-[150px]" />
                  <div className="absolute bg-[#4A3AFF] p-2 rounded-full -bottom-4 right-0">
                    <CiBookmark size={20} color="white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <p className="font-bold text-[14px] lg:text-[16px] text-[#3D3155]">{course.title}</p>
                  <p className="truncate text-wrap font-medium text-[10px] lg:text-[12px] text-[#8B80A3]">{course.desc}</p>
                </div>
              </div>
              <button className="flex flex-row w-[118px] rounded-3xl bg-transparent border-2 border-[#4A3AFF] text-[12px] font-bold px-3 py-1 gap-1 text-[#4A3AFF]">
                Learn more
                <FaAngleRight size={20} color="blue" />
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className={`${isOpen ? "mt-22 lg:mt-10" : ""} `}>
        <Footer />
      </div>
    </div>
  );
}
