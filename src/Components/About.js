import React from "react";

const About = () => {
    return (
        <section id="about" className="text-white p-6">
            <h4 className="text-sm uppercase  text-left text-white  ">About</h4>
            <h1 className="text-xl lg:text-2xl uppercase font-bold text-left text-white mb-6 ">
                Who I Am?
            </h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div
                        className="avatar"
                        data-aos="zoom-in-down"
                        data-aos-easing="linear"
                        data-aos-duration="800">
                        <div className="w-[250px] lg:w-[400px]  rounded-full border-[12px] border-[#484d4f]">
                            <img
                                src="https://i.ibb.co/VSqKTm3/PXL-20211201-122745748-PORTRAIT-2-modified-1.jpg"
                                alt="PXL-20211201-122745748-PORTRAIT-2"
                            />
                        </div>
                    </div>
                    <div
                        className=" lg:ml-10"
                        data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="800">
                        <h1 className="text-2xl font-bold">
                            I'm Akash Chanda Tushar, a Junior MERN Stack
                            Developer
                        </h1>
                        <p className="py-6 text-base">
                            I am a junior MERN Stack developer from
                            Sylhet,Bangladesh and i have been building
                            noteworthy Web applications and websites for 6
                            months, which comply with the latest design trends.
                            I help convert a vision and an idea into meaningful
                            and useful products. Having a sharp eye for product
                            evolution helps me prioritize tasks, iterate fast
                            and deliver faster.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
