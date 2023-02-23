import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import SjoerdBindelsCV from "../assets/SjoerdBindelsCV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300 font-semibold">
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Ervaring
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Ervaring
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projecten
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href={SjoerdBindelsCV}
            target="_blank"
            rel="noreferrer"
          >
            CV <BsFillPersonLinesFill size={30} />
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/sjoerd-bindels-b72222198/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sjoerd-bindels-b72222198/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/SBindels/blok-tech"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={SjoerdBindelsCV}
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
