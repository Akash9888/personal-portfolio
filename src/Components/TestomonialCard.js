import React from "react";

const TestomonialCard = () => {
    return (
        <div
            class="card w-full lg:w-96 p-6 shadow-xl text-white text-justify bg-[#2d3538] "
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
            {/* <div className="p-6 rounded shadow-md "> */}
            <p>
                Sit wisi sapientem ut, pri civibus temporibus voluptatibus et,
                ius cu hinc fabulas. Nam meliore minimum et, regione convenire
                cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy
                ne, eam putent iudicabit consulatu cu.
            </p>
            <div className="flex items-center mt-4 space-x-4">
                <img
                    src="https://source.unsplash.com/50x50/?portrait?2"
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <div>
                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                    <p className="text-sm dark:text-gray-400">
                        CTO of Company Co.
                    </p>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default TestomonialCard;
