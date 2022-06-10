import React from "react";

const Hero = () => {
    return (
        <section class="hero min-h-screen  ">
            <div class="hero-content text-center flex-col lg:flex-row lg:text-left">
                <div class="avatar">
                    <div class="w-[250px] lg:w-[350px]  rounded-full border-[12px] border-[#758283]">
                        <img
                            src="https://i.ibb.co/CtcHV3Q/PXL-20211201-122745748-PORTRAIT-2.jpg"
                            alt="PXL-20211201-122745748-PORTRAIT-2"
                        />
                    </div>
                </div>

                <div className=" lg:ml-5">
                    <h6 className="py-5 text-[#f2f2f2]">
                        Junior MERN Stack developer
                    </h6>
                    <h1 class="text-4xl font-bold text-white">
                        Akash Chanda Tushar
                    </h1>
                    <p class="py-5 text-[#f2f2f2]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus, ad.
                    </p>
                    <div>
                        <button class="btn btn-outline btn-success mr-3">
                            Download CV{" "}
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
