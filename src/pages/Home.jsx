import React from "react";
import Header from "../sections/Home/Header";
import CtaGenerate from "../sections/Home/CtaGenerate";
import TimelineSection from "../sections/Home/TimelineSection";
import CourseList from "../sections/Home/CourseList";
import TimelineSection2 from "../sections/Home/TimelineSection2";
import Footer from "../components/Footer";
import ReferenceList from "../sections/Home/ReferenceList";

export default function Home() {
  return (
    <div className="bg-white w-screen relative">
        <img className="absolute inset-0 w-full h-full object-cover z-0" src="BG.png" alt="" />
        <Header />
        <CtaGenerate/>
        <TimelineSection/>
        <CourseList/>
        <TimelineSection2 />
        <ReferenceList />
        <Footer />
    </div>
  );
}
