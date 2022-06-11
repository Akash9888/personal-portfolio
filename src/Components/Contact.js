import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

let schema = yup.object().shape({
    name: yup.string().required("Please enter your valid name"),
    email: yup.string().email().required("Please enter your valid email"),
    message: yup.string().required("Please enter your message"),
});

const Contact = () => {
    const form = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data);
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Your message sent successfully");
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Something wrong!");
                }
            );
    };

    return (
        <section
            className="py-6 dark:bg-gray-800 dark:text-gray-50 text-white px-5"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1 className="text-2xl font-bold text-left text-white lg:mb-6 ">
                Contact
            </h1>
            <div className="grid  grid-cols-1   lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">
                        Fill in the form to start a conversation
                    </p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6">
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span>
                                Ananda 20/1, khoradipara, shibgonj, Sylhet,
                                Bangladesh
                            </span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+880 1776774988</span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>akash.tushar98@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
                    ref={form}
                    onSubmit={handleSubmit(submitForm)}>
                    <label className="block">
                        <span>Full name</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name.."
                            {...register("name")}
                            className="block w-full p-2 border rounded-md bg-transparent  focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                        />
                        <p className="text-red-600">{errors.name?.message} </p>
                    </label>
                    <label className="block">
                        <span>Email address</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address.."
                            {...register("email")}
                            className="block w-full p-2 border rounded-md bg-transparent  focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                        />
                        <p className="text-red-600">{errors.email?.message}</p>{" "}
                    </label>
                    <label className="block">
                        <span>Message</span>
                        <textarea
                            rows="3"
                            name="message"
                            placeholder="Enter your message here.."
                            {...register("message")}
                            className="block w-full p-2 border rounded-md bg-transparent  focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                            spellcheck="false"></textarea>
                        <p className="text-red-600">
                            {errors.message?.message}
                        </p>
                    </label>
                    <div className="text-center">
                        <button
                            type="submit"
                            class="btn btn-outline btn-success ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>{" "}
            <ToastContainer />
        </section>
    );
};

export default Contact;
