import React from "react";

function CtaGenerate() {
  return (
    <div className="relative flex justify-center px-4 lg:px-28 w-screen">
      <div className="absolute -top-34 flex flex-col bg-gradient-to-r/100 from-[#8B80A3] via-white to-[#8B80A3] backdrop-blur-md gap-8 border-4 border-white items-center justify-center px-4 lg:px-14 rounded-4xl w-full lg:w-[1080px] py-4 lg:h-[300px]">
        <div className="flex flex-col items-center">
          <p className="text-[20px] lg:text-[40px] font-bold text-[#3D3155]">
            Craft Your <span className="text-[#4A3AFF]">Ideal Logo</span>
          </p>
          <p className="text-[#8B80A3] text-[12px] lg:text-[20px]">Elevate Your Branding with Logo Perfection</p>
        </div>
        <div className="flex flex-row gap-2 lg:gap-4 justify-center w-full ">
          <input type="text" className="w-[70%] lg:w-full p-1 lg:p-4 text-gray-700 bg-white rounded-4xl border-1 border-white" placeholder="Write your logo description (Name of your company, target market, etc)" />
          <button className="font-bold p-2 text-[10px] lg:text-[16px] lg:p-6 w-[80px] lg:w-[160px] bg-[#4A3AFF] hover:bg-[#3321FF] text-white rounded-[40px]">Get Started</button>
        </div>
      </div>
      <div className="flex ">
        <div className="flex lg:mt-32 me-6">
          <img src="Ellipse.png" alt="" className="absolute w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]" />
          <img src="Subtract.png" alt="" className="absolute w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]" />
        </div>
      </div>
    </div>
  );
}

export default CtaGenerate;
