import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaAngleRight } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

const courselist = [
    { id: 1, image: "/Ref/netflix.png", title: "Netflix", desc: "Revolutionizing entertainment with on-demand streaming and original content." },
    { id: 2, image: "/Ref/discord.png", title: "Discord", desc: "Empowering communities with seamless voice, video, and text communication." },
    { id: 3, image: "/Ref/epl.png", title: "English Premier League", desc: "The world's most-watched football league, showcasing top-tier competition." },
    { id: 4, image: "/Ref/spotify.png", title: "Spotify", desc: "Streaming unlimited music and podcasts with personalized recommendations." },
    { id: 5, image: "/Ref/starbuck.png", title: "Starbucks", desc: "Bringing high-quality coffee experiences with a global community focus." },
    { id: 6, image: "/Ref/gojek.png", title: "Gojek", desc: "A super-app offering ride-hailing, food delivery, and digital payments." },
    { id: 7, image: "/Ref/netflix.png", title: "Netflix", desc: "Revolutionizing entertainment with on-demand streaming and original content." },
    { id: 8, image: "/Ref/discord.png", title: "Discord", desc: "Empowering communities with seamless voice, video, and text communication." },
    { id: 9, image: "/Ref/epl.png", title: "English Premier League", desc: "The world's most-watched football league, showcasing top-tier competition." },
  ];

export default function ReferenceList() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 mb-20">
      {[...Array(2)].map((_, index) => (
        <div key={index} className="w-full flex justify-center">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {courselist.map((course) => (
              <SwiperSlide key={course.id}>
                <a href="" className="flex flex-col hover:border-2 hover:border-[#4A3AFF] justify-between gap-4 bg-white/80 p-4 rounded-4xl w-[220px] h-[350px] backdrop-blur-md drop-shadow-2xl shadow-[#4A3AFF]">
                  <div className="flex flex-col gap-2">
                    <div className="relative flex bg-gradient-to-br from-green-100 to-blue-200 rounded-2xl">
                      <img src={course.image} alt={course.title} className="object-contain p-2 w-[200px] h-[150px]" />
                      <div className="absolute bg-[#4A3AFF] p-2 rounded-full -bottom-4 right-0">
                        <CiBookmark size={20} color="white" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="font-bold text-[18px] text-[#3D3155]">{course.title}</p>
                      <p className="truncate text-wrap font-medium text-[14px] text-[#8B80A3]">{course.desc}</p>
                    </div>
                  </div>
                  <button className="flex flex-row w-[118px] rounded-3xl bg-transparent border-2 border-[#4A3AFF] text-[12px] font-bold px-3 py-1 gap-1 text-[#4A3AFF]">
                    Learn more
                    <FaAngleRight size={20} color="blue" />
                  </button>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
