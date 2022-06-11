import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Contact from "../../Components/Contact";
import Hero from "../../Components/Hero";
import Skill from "../../Components/Skill";
import Testimonial from "../../Components/Testimonial";
import TParticles from "../../Components/TParticles";

const Home = () => {
    return (
        <div className="container  w-full md:max-w-screen-xl  mx-auto ">
            <TParticles />
            <Hero />
            <Skill />
            <Testimonial />
            <Contact />
            <ScrollToTop smooth />
        </div>
    );
};

export default Home;
