import { useState } from "react";

import { HashLink } from "react-router-hash-link";

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const menuState = () => {
        // console.log("before clicked");
        // console.log(openMenu);
        // setOpenMenu(!openMenu);
        // console.log("after clicked");
        console.log(openMenu);
        {
            openMenu ? setOpenMenu(false) : setOpenMenu(true);
        }
        console.log(openMenu);
    };
    return (
        // <nav className="navbar   bg-[#2d3538] text-white">
        //     <div className="navbar-start">
        //         <HashLink smooth to="#home">
        //             <span className=" font-bold text-2xl">AKASH</span>
        //         </HashLink>
        //     </div>
        //     <div className="navbar-end ">
        //         <div className="dropdown dropdown-end lg:hidden">
        //             <label tabindex="0" className="btn btn-ghost">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-5 w-5"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                     onClick={menuState}>
        //                     <path
        //                         stroke-linecap="round"
        //                         stroke-linejoin="round"
        //                         stroke-width="2"
        //                         d="M4 6h16M4 12h8m-8 6h16"
        //                     />
        //                 </svg>
        //             </label>
        //             <ul
        //                 tabindex="0"
        //                 className={`${
        //                     !openMenu ? "" : "hidden"
        //                 }  mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#2d3538]  rounded-box w-1/2`}>
        //                 <li>
        //                     <HashLink smooth to="#home">
        //                         Home
        //                     </HashLink>
        //                 </li>

        //                 <li>
        //                     <HashLink smooth to="#services">
        //                         Services
        //                     </HashLink>
        //                 </li>
        //                 <li>
        //                     <HashLink smooth to="#skills">
        //                         Skills
        //                     </HashLink>
        //                 </li>

        //                 <li>
        //                     <HashLink smooth to="#portfolio">
        //                         Portfolio
        //                     </HashLink>
        //                 </li>
        //                 <li>
        //                     <HashLink smooth to="#testimonials">
        //                         Testimonials
        //                     </HashLink>
        //                 </li>

        //                 <li>
        //                     <HashLink smooth to="#contact">
        //                         Contact
        //                     </HashLink>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="hidden lg:flex">
        //             <ul className="menu menu-horizontal p-0">
        //                 <li>
        //                     <HashLink smooth to="#home">
        //                         Home
        //                     </HashLink>
        //                 </li>

        //                 <li>
        //                     <HashLink smooth to="#services">
        //                         Services
        //                     </HashLink>
        //                 </li>
        //                 <li>
        //                     <HashLink smooth to="#skills">
        //                         Skills
        //                     </HashLink>
        //                 </li>

        //                 <li>
        //                     <HashLink smooth to="#portfolio">
        //                         Portfolio
        //                     </HashLink>
        //                 </li>
        //                 <li>
        //                     <HashLink smooth to="#testimonials">
        //                         Testimonials
        //                     </HashLink>
        //                 </li>

        //                 <li>
        //                     <HashLink smooth to="#contact">
        //                         Contact
        //                     </HashLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="bg-[#2d3538]">
            <div class="container  w-full md:max-w-screen-xl  mx-auto  border-gray-200 px-2 sm:px-4 py-2.5 rounded text-white">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" class="flex items-center">
                        {/* <img
                           src="/docs/images/logo.svg"
                           class="mr-3 h-6 sm:h-9"
                           alt="Flowbite Logo"
                       /> */}
                        <span class="self-center text-xl font-semibold whitespace-nowrap ">
                            AKASH
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="mobile-menu"
                        type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class={` ${openMenu ? "" : "hidden"} w-6 h-6`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={menuState}>
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg
                            class={`w-6 h-6 ${openMenu ? "hidden" : ""}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={menuState}>
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div
                        class={` ${
                            openMenu ? "" : "hidden"
                        }hidden w-full md:block md:w-auto " id="mobile-menu`}>
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-center">
                            <li>
                                <HashLink
                                    smooth
                                    to="#home"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Home
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="#about"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    About
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="#services"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Services
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="#skills"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Skills
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="#portfolio"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Portfolio
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="#testimonials"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Testimonials
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="#blog"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Blog
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="#contact"
                                    class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 h md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                                    Contact
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
