import React from "react";

// Experiences Data
import experiences from "./data/data.js";

const Experiences = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="experiences">
            <h1 className="text-4xl text-sky-500 font-bold sm:text-5xl">
                #Years Of Professional Experience
            </h1>
            <p className="text-sm text-sky-500 font-semibold mt-4 mb-8 leading-6">
                3+ years building scalable backend systems across healthcare, e-commerce, and enterprise platforms.
            </p>

            <div className="py-6 grid lg:grid-cols-2 grid-cols-1 gap-8">
                {
                    experiences ?
                        experiences.map((experience, index) =>
                            <div
                                key={index}
                                className="bg-sky-900 p-8 sm:p-10 rounded-lg transition ease-in-out duration-150 hover:bg-sky-800 flex flex-col"
                                title={`${experience.job_title} @${experience.company}`}>

                                {/* Top Row: Job Title Badge & Date Range */}
                                <div className="flex justify-between items-start mb-6 flex-wrap gap-3">
                                    <span className="border-2 border-sky-500 text-sky-500 text-sm font-semibold px-4 py-2 rounded-full">
                                        {experience.job_title}
                                    </span>
                                    <span className="text-gray-300 text-sm italic underline decoration-sky-500">
                                        {experience.start_date} - {experience.end_date}
                                    </span>
                                </div>

                                {/* Company & Location */}
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                                    {experience.company} - {experience.location}
                                </h2>

                                {/* Description as Bullet Points */}
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {experience.description.map((point, i) => (
                                        <li key={i} className="text-gray-300 text-sm leading-6 flex gap-3">
                                            <span className="text-sky-500 font-bold flex-shrink-0">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Separator Line */}
                                <div className="border-t border-sky-700 mb-4"></div>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="border border-sky-400 text-sky-400 text-xs px-3 py-1.5 rounded-md font-medium transition ease-in-out duration-150 hover:bg-sky-400 hover:text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Experiences;
