import React from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Hero from "../../Components/Hero";
import Service from "../../Components/Service";
import Skill from "../../Components/Skill";
import Testimonial from "../../Components/Testimonial";
import Works from "../../Components/Works";

const Home = () => {
    const location = useLocation();

    return (
        <div>
            <Hero />
            <div className="container  w-full md:max-w-screen-xl  mx-auto ">
                <About />
                {/* <Hero /> */}
                <Service />
                <Skill />
                <Works />
                <Testimonial />
                <Contact />
                <ScrollToTop smooth />
            </div>
        </div>
    );
};

export default Home;
