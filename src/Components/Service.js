import React from "react";

const Service = () => {
    return (
        <section className="p-6 mt-10">
            <h4 className="text-sm uppercase  text-left text-white  ">
                services
            </h4>
            <h1 className="text-xl lg:text-2xl uppercase font-bold text-left text-white mb-6 ">
                What I Do
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white">
                <div
                    className="flex justify-start items-start space-x-1"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div>
                        <img src="https://img.icons8.com/plasticine/100/undefined/web.png" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold"> Web Development</h1>
                        <p className="text-base ">
                            I am specialize in creating interactive web
                            applications for individual users and organizations
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-start items-start space-x-2"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div>
                        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/undefined/external-mobile-application-computer-science-flaticons-lineal-color-flat-icons.png" />{" "}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">
                            Mobile Application
                        </h1>
                        <p className="text-base ">
                            I am specialize in creating interactive
                            cross-platform mobile applications for individual
                            users and organizations
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-start items-start space-x-2"
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div>
                        <img src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/100/undefined/external-seo-seo-and-development-smashingstocks-outline-color-smashing-stocks.png" />{" "}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Digital Marketing</h1>
                        <p className="text-base ">
                            I am specialize in creating interactive
                            cross-platform mobile applications for individual
                            users and organizations
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
