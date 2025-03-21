import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";

const Other = [
  { id:1, image: "Other/Settings-1.png", name: "Categories", rate: "70", bgcolor: "#DAECBD", textcolor: "7DAD7C"},
  { id:1, image: "Other/Settings-2.png", name: "Relevancy", rate: "53"},
  { id:1, image: "Other/Settings-3.png", name: "Consistency", rate: "83"},
  { id:1, image: "Other/Settings-4.png", name: "Brand Allignment", rate: "31"},
  { id:1, image: "Other/Settings-5.png", name: "Flexibility", rate: "64"},
  { id:1, image: "Other/Settings-6.png", name: "Description", rate: "56"},
]

export default function Result() {
  return (
    <div className="flex flex-col h-full pb-6 w-screen bg-white relative">
      <img className="absolute inset-0 w-full h-full object-cover z-[-1]" src="BG.png" alt="Background" />
      <div className="flex flex-row justify-between items-center w-screen px-4 lg:px-28 py-4 lg:py-6">
        <Link to="/">
          <img src="LOGO.png" alt="" className="w-[120px] " />
        </Link>
        <div className="flex flex-row items-center gap-6">
          <span className="text-[#3D3155] text-[14px] lg:text-[18px] font-bold">Muhammad Alfan</span>
          <img src="alfan.png" alt="" className="object-contain border-2 w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] rounded-full bg-gradient-to-br from-blue-300 to-blue-100 hidden lg:block" />
        </div>
      </div>
      <div className="flex flex-row mx-4 w-full lg:mx-28 bg-white backdrop-blur-lg rounded-4xl border-2 border-white drop-shadow-2xl">
        <img className="absolute rounded-4xl inset-0 w-full h-full object-cover z-[-1]" src="BG.png" alt="Background" />

        {/* SIDEBAR */}
        <div className="flex flex-col w-[254px] full p-4 bg-white rounded-bl-4xl rounded-tl-4xl">
          <div className="flex flex-row justify-between items-center">
            <Link to="/">
              <CiCircleChevLeft size={40} color="white" className="bg-[#4A3AFF] rounded-full" />
            </Link>
            <img src="3point.png" alt="" className="w-[6.3px] h-[22px]" />
          </div>

          <div className="relative">
            <div className="flex flex-col items-center mt-10">
              <span className="text-[40px] text-[#3D3155] font-bold">64</span>
              <span className="text-[12px] text-[#3D3155] font-semibold">Your score is quite good</span>
              <span className="text-[10px] text-[#8B80A3] w-[150px] text-center mt-1">Keep going, you're getting even more amazing</span>
            </div>
            <img src="ratio.png" alt="" className="absolute w-[220px] -top-6 -right-4" />
          </div>
          <div className="flex justify-center mt-6">
            <button className="text-[12px] bg-[#4A3AFF] rounded-full px-6 py-2 font-semibold">Reupload</button>
          </div>

          <div className="flex flex-row mt-6">
            <button className="flex text-[14px] rounded-t-2xl rounded-b-0 font-semibold text-[#4A3AFF] bg-white w-[50%] justify-center">All</button>
            <button className="flex text-[14px] rounded-t-2xl rounded-b-0 font-semibold text-[#3D3155] bg-[#ECECFF] w-[50%] justify-center">To Do</button>
          </div>

          <div className="flex mt-6">
            <button className="flex text-[14px] font-semibold rounded-full w-full text-[#4A3AFF] bg-[#ECECFF] justify-center">All Review</button>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-[12px] text-[#8B80A3]">Technical</span>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                    <img src="Course/img4.png" alt="" className="w-[20px]"/>
                    <span  className="text-[14px] font-semibold text-[#3D3155]">Shape & Propotion</span>
                    </div>
                    <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>76</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                    <img src="Typo.png" alt="" className="w-[20px]"/>
                    <span  className="text-[14px] font-semibold text-[#3D3155]">Typography</span>
                    </div>
                    <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>76</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                    <img src="Colors.png" alt="" className="w-[20px]"/>
                    <span  className="text-[14px] font-semibold text-[#3D3155]">Color</span>
                    </div>
                    <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>76</span>
                </div>
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-[12px] text-[#8B80A3]">Other</span>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                    <img src="Course/img4.png" alt="" className="w-[20px]"/>
                    <span  className="text-[14px] font-semibold text-[#3D3155]">Shape & Propotion</span>
                    </div>
                    <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>76</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                    <img src="Typo.png" alt="" className="w-[20px]"/>
                    <span  className="text-[14px] font-semibold text-[#3D3155]">Typography</span>
                    </div>
                    <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>76</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                    <img src="Colors.png" alt="" className="w-[20px]"/>
                    <span  className="text-[14px] font-semibold text-[#3D3155]">Color</span>
                    </div>
                    <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>76</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
