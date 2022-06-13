import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
    const { text } = useTypewriter({
        words: ["Junior MERN Stack Developer", "Programmer", "Tech Enthusiast"],
        loop: {},
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
    });

    return (
        <section id="home" class="hero mt-2 lg:h-screen lg:m-0  ">
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
                    <h1 class="text-4xl font-bold text-white">Hello,</h1>
                    <h1 class="text-4xl font-bold text-white">My Name Is </h1>
                    <h1 class="text-4xl font-bold text-white">
                        Akash Chanda Tushar
                    </h1>
                    <h6 className="py-3 text-lg text-[#f2f2f2]">{text}</h6>

                    {/* <p class="py-5 text-[#f2f2f2]">
                        Hello, I’m Akash Chanda Tushar, I'm a junior MERN Stack
                        developer based on Sylhet, Bangladesh. I have a passion
                        for web application and love to create for interactive
                        applications for web and mobile devices.
                    </p> */}
                    <div>
                        <button class="btn btn-outline btn-success mr-3">
                            <a
                                href="https://drive.google.com/drive/u/0/folders/1tmNpaToaC7IrqZrdBwwiGhgWldiLlUsG"
                                target="_blank">
                                Download Resume
                            </a>
                        </button>
                        {/* <button class="btn btn-outline btn-info">
                            Contact
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
