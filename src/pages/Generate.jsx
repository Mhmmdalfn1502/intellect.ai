import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi2";

const Categories = [{ categories: "Sport" }, { categories: "Food" }, { categories: "Cafe" }, { categories: "Technology" }, { categories: "Entertaiment" }, { categories: "Game" }, { categories: "Drink" }, { categories: "Productivity" }];

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

export default function Generate() {
  return (
    <div className="flex flex-col h-full pb-6 w-screen bg-white relative">
      <img className="absolute inset-0 w-full h-full object-cover z-[-1]" src="BG.png" alt="Background" />
      <div className="flex flex-row justify-between items-center w-screen px-4 lg:px-28 py-4 lg:py-6">
        <Link to="/">
          <img src="LOGO.png" alt="" className="w-[120px] " />
        </Link>
        <div className="flex flex-row items-center gap-6">
          <span className="text-[#3D3155] text-[14px] lg:text-[18px] font-bold">Muhammad Alfan</span>
          <img src="alfan.png" alt="" className="object-contain w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] rounded-full bg-gradient-to-br from-blue-300 to-blue-100 hidden lg:block" />
        </div>
      </div>

      <div className="flex flex-col mx-4 lg:mx-28 p-6 lg:p-16 gap-8 bg-white backdrop-blur-lg rounded-4xl border-2 border-white drop-shadow-2xl">
        <div className="relative flex flex-col gap-8">
          <Link to="/">
            <CiCircleChevLeft size={40} color="white" className="bg-[#4A3AFF] rounded-full" />
          </Link>
          <div className="flex flex-col gap-2">
            <span className="font-bold bg-gradient-to-r from-[#4A3AFF] to-white bg-clip-text text-transparent text-[24px]">
              Analyst <span className="font-medium text-[#3D3155]">your </span>
              <span className="text-[#3D3155]">Logo here!</span>
            </span>
            <p className="text-[#8B80A3]">Analyze and refine your logo's potential with us</p>
          </div>
          <div className="flex flex-row">
            <div className="bg-[#4A3AFF] h-[2px] w-[20%] rounded-full"></div>
            <div className="bg-[#8B80A3]/50 h-[2px] w-[80%] rounded-full"></div>
          </div>
          <img src="Ellipse2.png" alt="" className="absolute w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] bottom-22 -right-10 lg:bottom-0 lg:right-14" />
          <img src="rocket.png" alt="" className="absolute w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] bottom-26 -right-8 lg:bottom-2 lg:right-12" />
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-[#3D3155] font-bold" htmlFor="">
              Your Company
            </label>
            <input type="text" placeholder="Enter your company name" className="rounded-full py-3 px-2 border-1 border-[#8B80A3] text-[#8B80A3]" />
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-3 w-[30%]">
              <div className="flex flex-col gap-3">
                <label className="text-[#3D3155] font-bold" htmlFor="">
                  Upload Your Logo
                </label>
                <input type="file" className="rounded-full py-3 px-2 border-1 border-[#8B80A3] text-[#8B80A3] text-center" />
              </div>
              <div className="relative flex justify-center items-center w-full h-[150px] border-1 border-[#8B80A3] rounded-2xl">
                <img src="LogoBIK.png" alt="" className="object-cover w-[200px]" />
                <HiOutlineTrash size={20} color="#4A3AFF" className="absolute top-4 left-4" />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-[70%]">
              <label className="text-[#3D3155] font-bold" htmlFor="">
                Your Company Logo Description or Details
              </label>
              <textarea type="text" placeholder="Tell us about your target market, brand goals, industry, and more." className="rounded-2xl py-3 px-2 border-1 border-[#8B80A3] h-full text-[#8B80A3]" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#3D3155] font-bold" htmlFor="">
              Category
            </label>
            <div className="flex flex-row gap-2 w-full overflow-x-auto no-scrollbar">
              {Categories.map((category, index) => (
                <button key={index} className="flex flex-row drop-shadow-sm items-center justify-center w-[120px] h-[48px] px-2 bg-transparent border-1 border-[#8B80A3] rounded-3xl text-[14px] text-[#8B80A3] whitespace-nowrap">
                  {category.categories}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#3D3155] font-bold" htmlFor="">
              Font Style
            </label>
            <div className="flex flex-row gap-2 w-full overflow-x-auto no-scrollbar">
              {FontStyles.map((style, index) => (
                <button
                  key={index}
                  style={{ fontFamily: style.font }}
                  className="flex flex-row drop-shadow-sm items-center justify-center w-[120px] h-[48px] px-2 bg-transparent border-1 border-[#8B80A3] rounded-3xl text-[14px] text-[#8B80A3] whitespace-nowrap"
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link to="/result">
            <button className="px-14 py-3 bg-[#4A3AFF] text-white rounded-full text-[18px]">Generate</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
