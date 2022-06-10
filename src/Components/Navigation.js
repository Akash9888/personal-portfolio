import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const menuState = () => {
        // console.log("before clicked");
        // console.log(openMenu);
        // setOpenMenu(!openMenu);
        // console.log("after clicked");
        // console.log(openMenu);
        {
            openMenu ? setOpenMenu(false) : setOpenMenu(true);
        }
    };
    return (
        <div>
            <div className="navbar bg-red-300">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">AKASH</a>
                </div>
                <div className="navbar-end ">
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabindex="0" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                onClick={menuState}>
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabindex="0"
                            className={`${
                                !openMenu ? "" : "hidden"
                            }  mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52`}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
