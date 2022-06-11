import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
    const { text } = useTypewriter({
        words: ["Junior MERN Stack Developer", "Programmer", "Tech Enthusiast"],
        loop: {},
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
    });
    return (
        <section class="hero min-h-screen  ">
            <div class="hero-content text-center flex-col lg:flex-row lg:text-left">
                <div
                    class="avatar"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div class="w-[250px] lg:w-[350px]  rounded-full border-[12px] border-[#484d4f]">
                        <img
                            src="https://i.ibb.co/VSqKTm3/PXL-20211201-122745748-PORTRAIT-2-modified-1.jpg"
                            alt="PXL-20211201-122745748-PORTRAIT-2"
                        />
                    </div>
                </div>

                <div
                    className=" lg:ml-5"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h6 className="py-3 text-lg text-[#f2f2f2]">{text}</h6>
                    <h1 class="text-4xl font-bold text-white">
                        Akash Chanda Tushar
                    </h1>
                    <p class="py-5 text-[#f2f2f2]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus, ad.
                    </p>
                    <div>
                        <button class="btn btn-outline btn-success mr-3">
                            Download Resume
                        </button>
                        <button class="btn btn-outline btn-info">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
