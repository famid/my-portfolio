import React from 'react';

// React Icons
import { MdVerified } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

const Certifications = () => {
  const certifications = [
    {
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      type: "certification"
    },
    {
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      type: "certification"
    },
    {
      title: "Problem Solving (Basic) Certificate",
      issuer: "HackerRank",
      type: "certification"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Physics",
      institution: "Khulna University",
      year: "2017 - 2022",
      gpa: "3.33/4.0"
    }
  ];

  return (
    <div className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20" id="certifications">
      <h1 className="text-4xl text-sky-500 font-bold sm:text-5xl">#Certifications & Education</h1>
      <p className="text-sm text-sky-500 font-semibold mt-4 mb-8 leading-6">
        Continuous learning and formal education background.
      </p>

      {/* Certifications Section */}
      <div className="mb-12">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <MdVerified className="text-sky-500" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-sky-900 rounded-lg p-5 transition ease-in-out duration-150 hover:bg-sky-800"
            >
              <h3 className="text-lg text-white font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <IoSchoolSharp className="text-sky-500" />
          Education
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-sky-900 rounded-lg p-6 transition ease-in-out duration-150 hover:bg-sky-800"
            >
              <h3 className="text-xl text-white font-bold mb-2">{edu.degree}</h3>
              <p className="text-sky-500 font-semibold mb-2">{edu.institution}</p>
              <div className="flex gap-4 text-gray-400 text-sm">
                <span>{edu.year}</span>
                <span>•</span>
                <span>GPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
