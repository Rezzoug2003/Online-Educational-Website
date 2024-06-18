import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero-Section/Hero";
import Company from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
import { Courses } from "../components/courses/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonial/Testimonials";
import Zoom from "react-reveal/Zoom";

export const Home = () => {
  return (
    <div>
      <Header />
      <Zoom>
        <Hero />
        <Company />
        <AboutUs />
        <Courses />
        <ChooseUs />
        <Features />
        <FreeCourse />

        <Newsletter />
      </Zoom>
      <Footer />
    </div>
  );
};
