import React from "react";
import { CiPlay1 } from "react-icons/ci";
import Navbar from "../../components/Navbar";
import { FaCheck } from "react-icons/fa6";
import 'animate.css'

export default function Header() {
  return (
    <view>
      <div className="w-screen h-screen relative">
        <Navbar/>
        <div className="flex flex-col lg:flex-row lg:px-28 z-10">
          <div className="flex flex-col lg:w-[60%] gap-4 lg:gap-10 pt-20 lg:pt-30 ">
            <img className="absolute w-[60px] lg:w-[130px] lg:top-46 left-74 lg:left-128 rotate-animation" src="StickMagic.png" alt="" />
            <div className="flex lg:bg-transparent flex-col px-4 lg:px-0 gap-2 lg:gap-6 w-full lg:mt-12">
              <p className="text-[34px] lg:text-[54px] text-center lg:text-left font-bold bg-gradient-to-r from-[#4A3AFF] to-[#99E7FF] bg-clip-text text-transparent leading-10 lg:leading-18 ">
                Analysis <span className="font-medium text-gray-700">with <br /> a </span>
                <span className="text-gray-700">Touch </span>
                <span className="font-medium text-gray-700">of </span><span className="bg-gradient-to-br from-[#D79FFC] to-[#5D64FF] bg-clip-text text-transparent">Magic</span>
              </p>
              <p className="text-[18px] text-center lg:text-left font-medium text-[#8B80A3] w-full px-6 lg:px-0 lg:w-[55%] leading-8">Dive into our innovative logo design analysis tool and discover the secrets behind every logo's magic</p>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-2 lg:gap-6 font-medium">
              <div>
                <span className="text-[12px] lg:text-[14px] px-[14px] lg:px-[18px] py-[14px] lg:py-[18px] bg-[#4A3AFF] text-white rounded-4xl">Try it now!</span>
              </div>
              <div className="flex flex-row items-center gap-2 px-[16px] lg:px-[20px] py-[9px] lg:py-[14px] border-2 border-[#4A3AFF] rounded-4xl">
                <CiPlay1 size={20} color="#4A3AFF" />
                <span className="text-[#4A3AFF] text-[14px]">Watch how it works</span>
              </div>
            </div>
          </div>

          <div className="lg:absolute top-20 right-20">
            <img src="/3DHeader.png" alt="" className="w-[600px] h-[100%] animate-pulse" />
          </div>

          <div className="absolute right-2 bottom-36 lg:right-40 lg:bottom-40 flex flex-row p-3 rounded-2xl gap-2 w-[200px] lg:w-[230px] bg-white/20 backdrop-blur-xl animate-pulse">
            <div className="flex p-1 rounded-2xl w-[50px] h-[50px] bg-white">
                <img src="Magnifier.png" alt="" className="w-[40px] h-[40px]"/>
            </div>
            <div className="flex flex-col w-[70%]">
                <span className="text-[14px] font-bold">Analyst your logo</span>
                <span className="text-[10px] font-medium">Gain deep insights into your logo's impact.</span>
            </div>
          </div>

          <div className="absolute top-120 lg:right-120 lg:top-70 justify-center items-center flex flex-row p-3 rounded-2xl gap-2 w-[180px] lg:w-[200px] bg-gradient-to-br from-[#8B80A3]/20 to-white/70 backdrop-blur-xl border-2 border-white animate-pulse">
            <div className="flex items-center justify-center p-1 rounded-full w-[40px] h-[40px] bg-[#4A3AFF]">
                <FaCheck size={20} color="white" />
            </div>
            <div className="flex flex-col w-[70%]">
                <span className="text-right text-[#4A3AFF] text-[14px] font-bold">Your journey</span>
                <span className="text-right text-[10px] text-[#8B80A3] font-medium">Explore the journey of your logo's evolution.</span>
            </div>
          </div>
        </div>
      </div>
    </view>
  );
}
