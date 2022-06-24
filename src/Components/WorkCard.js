import React from "react";

const WorkCard = (props) => {
    console.log(props.data);
    const { link, name, about, tags, picture } = props.data;
    return (
        <div
            className="card w-full lg:w-96 h-full p-6 shadow-xl text-white text-justify bg-[#2d3538] "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
            <img
                src={picture}
                alt=""
                className="object-cover object-center w-full rounded-md h-60 dark:bg-gray-500"
            />
            <div className="my-2">
                {tags.map((tag, i) => {
                    return (
                        <div
                            key={i}
                            className="badge badge-lg text-xs font-medium tracking-widest uppercase m-1 ml-0 p-3.5 bg-[#E03B8B]">
                            {tag}
                        </div>
                    );
                })}

                <h2 className="text-xl font-semibold tracking-wide mt-2">
                    {name}
                </h2>
            </div>
            <p className="">{about}</p>
            <div className="text-center mt-2">
                <button className="btn btn-outline btn-success mr-3">
                    <a href={link}>View Site</a>
                </button>
            </div>
        </div>
    );
};

export default WorkCard;
