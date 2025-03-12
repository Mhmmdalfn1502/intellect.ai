import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

const courses = [
  { id: 1, image: "/Course/img1.png", title: "Easy to Read", desc: "Facilitating quick and effortless comprehension for your audience." },
  { id: 2, image: "/Course/img2.png", title: "Simplicity", desc: "Providing clear and concise content that is easy to understand." },
  { id: 3, image: "/Course/img3.png", title: "Originality", desc: "Offering unique and innovative perspectives in learning materials." },
  { id: 4, image: "/Course/img4.png", title: "Engaging Content", desc: "Keeping learners interested and motivated throughout their journey." },
  { id: 5, image: "/Course/img2.png", title: "Structured Learning", desc: "Organizing information effectively for optimal comprehension." },
  { id: 6, image: "/Course/img6.png", title: "Interactive Elements", desc: "Enhancing learning with quizzes, videos, and practical exercises." },
];

const CourseCard = ({ image, title, desc }) => (
  <a href="" className="flex flex-col hover:border-2 hover:border-[#4A3AFF] justify-between gap-4 bg-white/80 p-4 rounded-4xl w-[220px] h-[350px] backdrop-blur-md drop-shadow-2xl shadow-[#4A3AFF]">
    <div className="flex flex-col gap-2">
      <div className="relative flex bg-gradient-to-br from-green-100 to-blue-200 rounded-2xl">
        <img src={image} alt={title} className="object-contain p-2 w-[200px] h-[150px]" />
        <div className="absolute bg-[#4A3AFF] p-2 rounded-full -bottom-4 right-0">
          <CiBookmark size={20} color="white" />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="font-bold text-[18px] text-[#3D3155]">{title}</p>
        <p className="truncate text-wrap font-medium text-[14px] text-[#8B80A3]">{desc}</p>
      </div>
    </div>
    <button className="flex flex-row w-[110px] rounded-3xl bg-transparent border-2 border-[#4A3AFF] text-[12px] font-bold px-3 py-1 gap-2 text-[#4A3AFF]">
      Learn more
      <FaAngleRight size={20} color="blue" />
    </button>
  </a>
);

export default function CourseList() {
  return (
    <div className="relative flex flex-col w-screen px-2">
      <div className="scroll-container w-full overflow-x-auto">
        <div className="scroll-content flex flex-row gap-8 py-6 w-max">

          <div className="flex flex-row gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          <div className="flex flex-col justify-center gap-8 w-[300px]">
            <div className="flex flex-col gap-2 text-[#3D3155]">
              <p className="text-[#4A3AFF] font-bold text-[18px]">What we serve</p>
              <p className="text-[#3D3155] text-wrap font-bold text-[36px]">Top Learning Materials for You</p>
              <p className="text-[#8B80A3] text-wrap font-medium text-[18px]">Discover the finest learning resources tailored just for you</p>
            </div>
            <button className="flex flex-row gap-2 font-bold w-[100px] text-[14px] px-4 py-3 bg-[#4A3AFF] rounded-3xl">
              See All
              <FaAngleRight size={20} color="white" />
            </button>
          </div>
          <div className="flex flex-row gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-container w-full">
        <div className="scroll-content flex flex-row gap-8 py-6">
        <div className="flex flex-row gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          {/* HEADLINE */}
          <div className="relative flex flex-col justify-center gap-8 w-[450px]">
            <div className="absolute top-6 left-12 flex flex-col gap-2 text-[#3D3155] w-[200px]">
              <p className="text-[#4A3AFF] font-bold text-[18px] text-right">Design Wisdow</p>
              <p className="text-[#3D3155] text-wrap font-bold text-[24px] text-right">
                Thousands <br /> Logo Insights
              </p>
            </div>
            <div className="absolute -bottom-10">
              <img src="Course/Saly16.png" alt="" className="w-[450px] h-full" />
            </div>
          </div>
          <div className="flex flex-row gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

        </div>
      </div>
      <div className="absolute left-0 w-[50px] lg:w-[100px] h-screen bg-gradient-to-r from-white to-white/0">
      </div>
      <div className="absolute right-0 w-[50px] lg:w-[100px] h-screen bg-gradient-to-l from-white to-white/0">
      </div>
    </div>
  );
}
