import React from "react";

// Experiences Data
import experiences from "./data/data.js";

const Experiences = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="experiences">
            <h1 className="text-3xl text-sky-500 font-bold sm:text-4xl sm:leading-10">
                #Years Of Professional Experience
            </h1>
            <div className="py-6 pt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    experiences ?
                        experiences.map((experience, index) =>
                            <div 
                                key={index} 
                                className="bg-sky-900 p-4 rounded hover:bg-sky-800 relative"
                                title={`${experience.job_title} @${experience.company}`}>
                                <b className="text-sky-500 text-sm bg-white py-1 px-2 rounded absolute left-3 -top-2 hover:bg-sky-500 hover:text-white">
                                    {experience.company}
                                </b>
                                <h2 className="mt-4 mb-2 text-xl font-bold text-sky-500">
                                    {experience.year}
                                </h2>
                                <h3 className="font-bold text-2xl text-white">
                                    {experience.job_title}
                                </h3>
                                <p className="mt-2 leading-6 text-sm text-gray-200">
                                    {experience.description}
                                </p>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Experiences;