import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Contact from "../../Components/Contact";
import Hero from "../../Components/Hero";
import Service from "../../Components/Service";
import Skill from "../../Components/Skill";
import Testimonial from "../../Components/Testimonial";
import Works from "../../Components/Works";

const Home = () => {
    return (
        <div className="container  w-full md:max-w-screen-xl  mx-auto ">
            <Hero />
            <Service />
            <Skill />
            <Works />
            <Testimonial />
            <Contact />
            <ScrollToTop smooth />
        </div>
    );
};

export default Home;
