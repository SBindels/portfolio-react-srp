import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import SjoerdBindelsCV from "../assets/SjoerdBindelsCV.pdf";

const About = () => {
  return (
    <div name="about" className="w-full py-40 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Sjoerd Bindels, CMD student uit Haarlem.</p>
          </div>
          <div>
            <p className="py-2">
              In de jaren van mijn CMD opleiding is de passie van UX/ UI design
              sterk gegroeid. Het hele ontwerpproces van probleemstelling naar
              design challenge vind ik erg interessant. Om er uiteindelijk een
              super gaaf concept van te maken.
            </p>
            <p className="py-2">
              Daarnaast wil ik verder groeien in mijn coding skills, dit is ook
              waar ik mezelf in zie werken later. Hiermee heb ik websites en een
              fullstack applicatie gemaakt met JavaScript en Node.JS. Deze
              portfolio website is gemaakt met React en wil hier graag meer over
              leren!
            </p>

            <div>
              <a href={SjoerdBindelsCV} target="_blank" rel="noreferrer">
                <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500 hover:border-gray-500">
                  CV
                  <BsFillPersonLinesFill className="ml-3" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
