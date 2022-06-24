import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestomonialCard from "./TestomonialCard";
const Testimonial = () => {
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
        <section id="testimonials" className="p-5 mt-10">
            <h4 className="text-sm uppercase  text-left text-white  ">
                Testimonials
            </h4>
            <h1 className="text-xl lg:text-2xl uppercase font-bold text-left text-white mb-6 ">
                Some Feedback
            </h1>
            <Carousel
                // swipeable={false}
                // draggable={false}
                // showDots={true}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                // infinite={true}
                // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={1000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerclassName="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // // deviceType={this.props.deviceType}
                // dotListclassName="custom-dot-list-style"
                // itemclassName="carousel-item-padding-40-px"
            >
                <TestomonialCard />
                <TestomonialCard />
                <TestomonialCard />
                <TestomonialCard />
                <TestomonialCard />
                <TestomonialCard />
                <TestomonialCard />
            </Carousel>
        </section>
    );
};

export default Testimonial;
