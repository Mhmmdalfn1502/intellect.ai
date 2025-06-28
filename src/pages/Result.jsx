import React from "react";
import { Link } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";

const Other = [
  { id: 1, image: "Other/Settings-1.png", name: "Categories", rate: "70", bgcolor: "#DAECBD", textcolor: "7DAD7C" },
  { id: 1, image: "Other/Settings-2.png", name: "Relevancy", rate: "53" },
  { id: 1, image: "Other/Settings-3.png", name: "Consistency", rate: "83" },
  { id: 1, image: "Other/Settings-4.png", name: "Brand Allignment", rate: "31" },
  { id: 1, image: "Other/Settings-5.png", name: "Flexibility", rate: "64" },
  { id: 1, image: "Other/Settings-6.png", name: "Description", rate: "56" },
];

export default function Result() {
  return (
    <div className="flex flex-col h-full pb-6 w-screen bg-white relative">
      <img className="absolute inset-0 w-full h-full object-cover z-[-1]" src="BG.png" alt="Background" />
      <div className="flex flex-row justify-between items-center w-screen bg-transparent px-4 lg:px-28 py-4 lg:py-6">
        <Link to="/">
          <img src="LOGO.png" alt="" className="w-[120px]" />
        </Link>
        <div className="flex flex-row items-center gap-6">
          <span className="text-[#3D3155] text-[14px] lg:text-[18px] font-bold">Muhammad Alfan</span>
          <img src="alfan.png" alt="" className="object-contain border-3 border-purple-800 w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] rounded-full bg-gradient-to-br from-blue-300 to-blue-100 hidden lg:block" />
        </div>
      </div>

      <div className="flex flex-row mx-4 lg:mx-28 bg-white backdrop-blur-lg rounded-4xl border-2 border-white drop-shadow-2xl">
        <img className="absolute rounded-4xl inset-0 w-full h-full object-cover z-[-1]" src="BG.png" alt="Background" />

        {/* SIDEBAR */}
        <div className="flex flex-col w-[254px] full p-4 bg-white rounded-bl-4xl rounded-tl-4xl drop-shadow-lg">
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
                  <img src="Course/img4.png" alt="" className="w-[20px] h-[20px]" />
                  <span className="text-[14px] font-semibold text-[#3D3155]">Shape & Propotion</span>
                </div>
                <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>
                  76
                </span>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                  <img src="Typo.png" alt="" className="w-[20px]" />
                  <span className="text-[14px] font-semibold text-[#3D3155]">Typography</span>
                </div>
                <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>
                  76
                </span>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                  <img src="Colors.png" alt="" className="w-[20px]" />
                  <span className="text-[14px] font-semibold text-[#3D3155]">Color</span>
                </div>
                <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>
                  76
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <span className="text-[12px] text-[#8B80A3]">Other</span>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                  <img src="Course/img4.png" alt="" className="w-[20px] h-[20px]" />
                  <span className="text-[14px] font-semibold text-[#3D3155]">Shape & Propotion</span>
                </div>
                <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>
                  76
                </span>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                  <img src="Typo.png" alt="" className="w-[20px]" />
                  <span className="text-[14px] font-semibold text-[#3D3155]">Typography</span>
                </div>
                <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>
                  76
                </span>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                  <img src="Colors.png" alt="" className="w-[20px]" />
                  <span className="text-[14px] font-semibold text-[#3D3155]">Color</span>
                </div>
                <span className="py-1 px-3 rounded-2xl text-[12px] text-[#3D3155] bg-green-200 font-semibold" style={{}}>
                  76
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="result flex flex-col p-12 bg-white w-[100%] gap-6">
          <div className="flex flex-row gap-4 bg-white w-full h-[72%]">
            <div className="hasil flex flex-col gap-4 w-[70%]">
              <div className="relative bg-white h-[60%] p-6 rounded-2xl drop-shadow-lg justify-between">
                <div className="chart absolute right-6 top-0 px-6">
                  <span className="text-[10px] text-[#3D3155] top-4">Top Logo</span>
                  <span className="text-[10px] text-[#3D3155] absolute right-30 bottom-4 font-semibold">Your Logo</span>
                  <img src="PieChart.png" alt="" className="w-[120px]" />
                </div>
                <div className="headline mb-6">
                  <p className="text-[16px] text-[#3D3155] font-semibold">
                    <span className="text-purple-500">Hello, </span>Muhammad Alfan<span>.</span>
                  </p>
                  <p className="text-[14px] text-[#8B80A3]">Welcome to your logo analyst.</p>
                </div>
                <div className="button flex flex-row gap-2 mb-6">
                  <button className="latest_score text-[12px] py-1 px-4 rounded-2xl bg-gray-200 font-semibold text-[#4A3AFF]">Latest Score</button>
                  <button className="latest_score text-[12px] py-1 px-4 rounded-2xl bg-gray-200 font-semibold text-gray-500">Previous Score</button>
                </div>
                <div className="div">
                  <p className="text-[14px] text-[#3D3155] font-semibold mb-4">Your logo achieves a score of 64 out of 100</p>
                  <p className="text-[14px] text-[#8B80A3] font-medium">
                    It appears your logo has room for improvement, scoring at 64 out of 100. However, there's great potential to enhance it further! By addressing key design elements and strategies, you can boost your score significantly.
                    Let's explore how in this report.
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <span className="text-[14px] font-semibold text-[#3D3155]">Similiar Designs for Reference</span>
                <hr className="bg-[#8B80A3] h-[2px] w-[300px]" />
                <GoChevronRight size={20} color="#4A3AFF" />
              </div>
              <div className="card_ref flex flex-row justify-between">
                <div className="relative bg-white drop-shadow-lg w-[32%] p-4 rounded-2xl ">
                  <div className="img_card bg-pink-100 rounded-2xl h-[70px]">
                    <img className="" src="Harvard.png" alt="" />
                  </div>
                  <div className="des text-wrap flex flex-col mt-2 h-[40px] truncate">
                    <span className="font-semibold text-[#3D3155] text-[12px]">Harvard</span>
                    <p className="text-[#8B80A3] text-[8px]">
                      A Widely recognized symbol Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto saepe quas quaerat quisquam explicabo dignissimos in assumenda consequatur voluptatibus sint est eos, iure obcaecati
                      rerum similique! Quia, ad saepe.
                    </p>
                  </div>
                </div>
                <div className="relative bg-white drop-shadow-lg w-[32%] p-4 rounded-2xl ">
                  <div className="img_card bg-pink-100 rounded-2xl h-[70px]">
                    <img className="" src="Harvard.png" alt="" />
                  </div>
                  <div className="des text-wrap flex flex-col mt-2 h-[40px] truncate">
                    <span className="font-semibold text-[#3D3155] text-[12px]">Harvard</span>
                    <p className="text-[#8B80A3] text-[8px]">
                      A Widely recognized symbol Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto saepe quas quaerat quisquam explicabo dignissimos in assumenda consequatur voluptatibus sint est eos, iure obcaecati
                      rerum similique! Quia, ad saepe.
                    </p>
                  </div>
                </div>
                <div className="relative bg-white drop-shadow-lg w-[32%] p-4 rounded-2xl ">
                  <div className="img_card bg-pink-100 rounded-2xl h-[70px]">
                    <img className="" src="Harvard.png" alt="" />
                  </div>
                  <div className="des text-wrap flex flex-col mt-2 h-[40px] truncate">
                    <span className="font-semibold text-[#3D3155] text-[12px]">Harvard</span>
                    <p className="text-[#8B80A3] text-[8px]">
                      A Widely recognized symbol Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto saepe quas quaerat quisquam explicabo dignissimos in assumenda consequatur voluptatibus sint est eos, iure obcaecati
                      rerum similique! Quia, ad saepe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hasil flex flex-col gap-4 w-[30%]">
              <div className="bg-white drop-shadow-lg w-[100%] h-[50%] p-4 rounded-2xl">
                <img className="" src="LogoBIK.png" alt="" />
              </div>
              <div className="bg-white drop-shadow-lg w-[100%] h-[50%] p-4 rounded-2xl">
                <p className="text-[#3D3155] text-center text-[12px] font-semibold">Your Spesification</p>
                <img className="mt-2 p-4" src="Grafik.png" alt="" />
              </div>
            </div>
          </div>

          <div className="task flex flex-col gap-2 w-full">
            <div className="flex flex-row justify-between items-center">
              <span className="text-[14px] font-semibold text-[#3D3155]">Task to increase Your Score</span>
              <hr className="bg-[#8B80A3] h-[2px] w-[570px]" />
              <GoChevronRight size={20} color="#4A3AFF" />
            </div>
            <div className="task_list flex flex-row gap-2">
              <div className="task_card w-[100%] h-[150px] drop-shadow-lg p-4 rounded-2xl bg-white flex flex-row gap-2">
                <div className="w-[50%]">
                  <img className="" src="image_54.png" alt="" />
                </div>
                <div className="flex flex-col justify-between w-[50%]">
                  <div className="flex flex-col text-wrap truncate">
                    <span className="font-semibold text-[12px] text-[#3D3155]">Change font type</span>
                    <span className="text-[#8B80A3] text-[9px] mt-1 text-left">Using an inappropriate font for your logo, especially for an educational institution.........</span>
                  </div>
                  <div className="button">
                    <button className=" bg-[#4A3AFF] rounded-full px-3 py-1 flex flex-row items-center justify-center">
                      <span className="text-[10px] font-semibold text-white">Fix</span>
                      <GoChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="task_card w-[100%] h-[150px] drop-shadow-lg p-4 rounded-2xl bg-white flex flex-row gap-2">
                <div className="w-[50%]">
                  <img className="" src="image_55.png" alt="" />
                </div>
                <div className="flex flex-col justify-between w-[50%]">
                  <div className="flex flex-col text-wrap truncate">
                    <span className="font-semibold text-[12px] text-[#3D3155]">Change Shape</span>
                    <span className="text-[#8B80A3] text-[9px] mt-1 text-left">Using an inappropriate font for your logo, especially for an educational institution.........</span>
                  </div>
                  <div className="button">
                    <button className=" bg-[#4A3AFF] rounded-full px-3 py-1 flex flex-row items-center justify-center">
                      <span className="text-[10px] font-semibold text-white">Fix</span>
                      <GoChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="task_card w-[100%] h-[150px] drop-shadow-lg p-4 rounded-2xl bg-white flex flex-row gap-2">
                <div className="w-[50%]">
                  <img className="bg-purple-50 rounded-2xl" src="image_56.png" alt="" />
                </div>
                <div className="flex flex-col justify-between w-[50%]">
                  <div className="flex flex-col text-wrap truncate">
                    <span className="font-semibold text-[12px] text-[#3D3155]">Change font type</span>
                    <span className="text-[#8B80A3] text-[9px] mt-1 text-left">Using an inappropriate font for your logo, especially for an educational institution.........</span>
                  </div>
                  <div className="button">
                    <button className=" bg-[#4A3AFF] rounded-full px-3 py-1 flex flex-row items-center justify-center">
                      <span className="text-[10px] font-semibold text-white">Fix</span>
                      <GoChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
