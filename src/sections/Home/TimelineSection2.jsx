import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

export default function TimelineSection2() {
  return (
    <div data-aos="fade-up" className="relative flex justify-center items-center w-screen py-18">
      <img src="Line.png" alt="" className="w-screen h-full animate-pulse" />
      <div className="absolute flex flex-col items-center gap-2 w-full lg:w-[50%]">
        <span className="text-center text-[22px] lg:text-[44px] font-bold bg-gradient-to-r from-[#4A3AFF] to-[#99E7FF] bg-clip-text text-transparent leading-8 lg:leading-14">
          Inspring References<span className="text-[#3D3155] font-medium"> for</span>
          <br />
          <span className="text-[#3D3155]">Creative Satisfaction</span>
        </span>
        <p className="text-[12px] lg:text-[18px] text-center text-[#8B80A3]">
          Discover a treasure trove of references to fuel your <br /> creativity and unearth deeply satisfying ideas
        </p>
        <Link to="/reference">
        <button className="flex text-white mt-2 lg:mt-4 w-[100px] justify-center flex-row gap-2 font-bold text-[14px] px-2 py-1 lg:px-3 lg:py-2 bg-[#4A3AFF] rounded-3xl">
          See All
          <FaAngleRight color="white" size={20}/>
        </button>
        </Link>
      </div>
    </div>
  );
}
