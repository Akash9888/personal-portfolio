import React, { useEffect, useState } from "react";
import WorkCard from "./WorkCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch(`works.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWorks(data);
            });
    }, []);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <section className="p-5 mt-10">
            <h4 className="text-sm uppercase  text-left text-white  ">
                Portfolio
            </h4>
            <h1 className="text-xl lg:text-2xl uppercase font-bold text-left text-white mb-6 ">
                Creative Works
            </h1>
            <Carousel responsive={responsive}>
                {works?.map((work) => {
                    return <WorkCard key={work.index} data={work} />;
                })}
            </Carousel>
        </section>
    );
};

export default Works;
