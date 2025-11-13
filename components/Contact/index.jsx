import React from "react";

// React Icons
import {
        FaLinkedinIn,
        FaGithub
    } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="py-8 pb-0 px-2 max-w-6xl m-auto sm:py-20" id="contact">
            <h1 className="text-3xl text-sky-500 font-bold sm:text-5xl">
                Feel free, Say hi;
            </h1>
            <div className="my-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h3 className="text-lg text-white font-bold mb-4">Social Links</h3>
                    <ul>
                        <li className="mb-4 text-gray-300 text-md w-max" title="GitHub">
                            <a href="https://github.com/famid" target="_blank" rel="noopener noreferrer" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-sky-500">
                                <FaGithub />
                                <span className="text-sm font-initial">/famid</span>
                            </a>
                        </li>
                        <li className="mb-4 text-gray-300 text-md w-max" title="LinkedIn">
                            <a href="https://www.linkedin.com/in/ahsanul-hoque-famid/" target="_blank" rel="noopener noreferrer" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-sky-500">
                                <FaLinkedinIn />
                                <span className="text-sm font-initial">/ahsanul-hoque-famid</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl text-sky-500 font-bold mb-3 sm:text-3xl">Start a project?</h2>
                    <a href="mailto:ahsanulhoque721@gmail.com" className="text-md text-gray-400 hover:text-sky-500 transition ease-in-out duration-150 sm:text-xl">
                        ahsanulhoque721@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-2">+880 1793851981</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;