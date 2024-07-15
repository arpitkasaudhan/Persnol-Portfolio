import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I bring expertise in web development, specializing in technologies
            like React, Node.js, Express, MongoDB, and TailwindCSS. My
            proficiency extends to languages such as C++ and JavaScript,
            enabling me to create robust and innovative applications.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-full md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
