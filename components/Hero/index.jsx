import React from 'react';

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="py-12 px-2 max-w-4xl m-auto sm:pt-24">
        <h2 className="flex justify-start items-center gap-2 text-xl font-bold text-sky-500 mb-4 sm:text-2xl">
          <span>Hello there</span><SiHey /><span>I am</span>
        </h2>
        <h1 className="text-6xl font-bold text-white sm:text-7xl">
          Ahsanul Hoque Famid
        </h1>
        <h2 className="text-3xl font-bold text-white mt-4 sm:text-4xl">
          Software Engineer
        </h2>
        <p className="text-md text-gray-400 leading-7 my-4 sm:text-lg sm:leading-8">
          Building scalable systems that solve real problems. 3+ years of experience crafting
          cloud-based systems, APIs, and microservices using NestJS, FastAPI, AWS, and Docker.
          Passionate about clean architecture, performance optimization, and event-driven design.
          Self-taught polyglot developer with expertise in TypeScript, Python, PHP, and modern backend technologies.
        </p>
        <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
          <button className="bg-sky-500 py-2 px-4 font-bold text-white border-2 border-sky-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="View Resume">
            <a href="/RenderCV_EngineeringResumes_Theme.pdf" target="_blank" rel="noopener noreferrer" className="flex justify-start items-center gap-1">
              <span>View Resume</span>
              <RiProfileLine />
              </a>
          </button>
          <button className="bg-white py-2 px-4 font-bold text-sky-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="Get in touch">
            <a href="#contact" className="flex justify-start items-center gap-1">
              <span>Get in touch</span>
              <RiContactsBookLine />
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h4 className="text-xl text-white font-bold">Find me on :</h4>
          <ul className="flex justify-start items-center flex-wrap gap-4">
            <li title="GitHub">
              <a href="https://github.com/famid" target="_blank" rel="noopener noreferrer" className="text-sky-500 text-md ease-in-out duration-150 hover:text-white">
                <FiGithub />
              </a>
            </li>
            <li title="LinkedIn">
              <a href="https://www.linkedin.com/in/ahsanul-hoque-famid/" target="_blank" rel="noopener noreferrer" className="text-sky-500 text-md ease-in-out duration-150 hover:text-white">
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hero;