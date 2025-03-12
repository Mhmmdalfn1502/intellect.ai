import React from "react";

export default function TimelineSection() {
  return (
    <div data-aos="fade-up" className="relative flex flex-col w-screen h-[500px] my-20 lg:mt-44">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[14px] lg:text-[18px] text-center text-[#4A3AFF] font-bold">Unleash Innovation</p>
        <p className="text-[20px] lg:text-[34px] text-center text-[#3D3155] font-bold">Super Powerfull Tech Insights</p>
      </div>
      <div className="relative flex items-center justify-center w-screen">
        <img src="icon.png" alt="" className="w-[1200px]" />

        <div className="absolute flex flex-col gap-6 lg:flex-row lg:w-[1200px] items-center justify-between lg:px-20 top-30 lg:top-78">
          <div className="flex flex-col gap-2 w-[200px]">
            <p className="text-[#3D3155] font-bold text-[16px] text-center">Speed Analysis</p>
            <p className="text-[#8B80A3] text-[14px] text-center">Experience lightning-fast logo analysis for quick insights and decisions.</p>
          </div>
          <div className="flex flex-col gap-2 w-[240px] lg:-mt-8">
            <p className="text-[#3D3155] font-bold text-[16px] text-center">Global Logo Harmony</p>
            <p className="text-[#8B80A3] text-[14px] text-center">Experience the synergy of a globally integrated approach and expansive logo principles.</p>
          </div>
          <div className="flex flex-col gap-2 w-[200px]">
            <p className="text-[#3D3155] font-bold text-[16px] text-center">Targeted Branding</p>
            <p className="text-[#8B80A3] text-[14px] text-center">Achieve precision in branding by hitting your target market through impactful logo design.</p>
          </div>
        </div>

        <div className="absolute flex flex-row w-screen">
          <div className="relative flex bg-amber-200 w-screen justify-center">
            <div className="absolute left-8 lg:left-42 -top-6 lg:-top-20">
              <img src="rocket.png" alt="" className="w-[86px] lg:w-[250px] h-[86px] lg:h-[250px] animate-pulse" />
            </div>
            <div className="absolute -top-8 lg:-top-24">
              <img src="earth.png" alt="" className="w-[70px] lg:w-[200px] h-[70px] lg:h-[200px] animate-pulse" />
            </div>
            <div className="absolute right-6 lg:right-36 -top-4 lg:-top-16">
              <img src="book.png" alt="" className="w-[50px] lg:w-[160px] h-[50px] lg:h-[160px] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
