import React from "react";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-1 sm:justify-between sm:space-y-0">
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/mac_tushar/">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/tusharshuvro.akash.9/">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://twitter.com/home?lang=en">
                            Twitter
                        </a>
                    </li>
                </ul>
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <p>
                        Copyright ©{new Date().getFullYear()} - All right
                        reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
