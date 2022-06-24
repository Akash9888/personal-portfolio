import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Blog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    return (
        <div className="flex items-center min-h-screen p-16 text-white">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-5xl dark:text-gray-600">
                        <span className="sr-only"></span>COMMING SOON
                    </h2>

                    <p className="mt-4 mb-8 dark:text-gray-400">
                        Blogs section comming soon. I am working on it.
                    </p>

                    <div className="mt-5 text-center">
                        <button
                            className="btn btn-outline btn-success mr-3"
                            onClick={() => {
                                navigate(`/`);
                            }}>
                            Back to home page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
