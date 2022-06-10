import React from "react";
import Contact from "../../Components/Contact";
import Hero from "../../Components/Hero";
import Testimonial from "../../Components/Testimonial";

const Home = () => {
    return (
        <div className="container  w-full md:max-w-screen-xl  mx-auto ">
            <Hero />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;
