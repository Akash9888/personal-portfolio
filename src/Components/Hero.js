import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
    return (
        <div
            id="home"
            className="hero min-h-screen "
            style={{
                backgroundImage: `url(https://i.ibb.co/YLBfxjX/portfolio-hero.jpg)`,
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h3 className="mb-5 text-4xl font-bold">Hi! I'm Akash</h3>
                    <h1 className="mb-5 text-5xl font-bold">
                        <Typewriter
                            options={{
                                strings: [
                                    "Developer",
                                    "Programmer",
                                    "Tech Enthusiast",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <button className="btn btn-primary">
                        <a
                            href="https://drive.google.com/drive/u/0/folders/1tmNpaToaC7IrqZrdBwwiGhgWldiLlUsG"
                            target="_blank">
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
