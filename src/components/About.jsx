import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Hello, I'm Arpit Kasaudhan, a passionate web developer proficient in both backend and frontend programming. My journey in the tech world has led me to specialize in creating robust and scalable applications from scratch, allowing me to bring innovative ideas to life.        </p>

        <br />

        <p className="text-xl">
        I hold a B.Tech from Bundelkhand Institute of Engineering and Technology, Jhansi, and I'm a 2024 graduate. <br /> <br />
        Over the years, I've honed my skills in various programming languages including C++, JavaScript, and Python, and have developed expertise in web technologies such as React, Node.js, Express, MongoDB, and TailwindCSS.<br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
