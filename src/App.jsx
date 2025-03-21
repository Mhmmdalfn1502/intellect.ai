import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Reference from "./pages/Reference";
import About from "./pages/About";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Result from "./pages/Result";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import 'animate.css';
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1000, // Durasi animasi (ms)
  once: true, // Animasi hanya muncul sekali
});

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
