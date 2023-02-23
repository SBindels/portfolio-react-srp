// import { atRule } from "postcss";
import React from "react";
import generativeArt from "../assets/generative-art.png";
import projectTech from "../assets/project-tech.png";
import spelenMetCSS from "../assets/spelenmetcss.png";

const Work = () => {
  return (
    <div name="work" className="w-full md: h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Projecten
          </p>
          <p className="py-6">Projecten van de afgelopen jaren</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${projectTech})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Project Tech
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/SBindels/blok-tech" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${generativeArt})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Generative Art
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/SBindels/generative-art" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${spelenMetCSS})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Spelen met CSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/SBindels/SpelenMetCSS-BB8" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
