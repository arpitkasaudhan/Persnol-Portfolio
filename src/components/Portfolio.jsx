import React from "react";
import ecom from "../assets/portfolio/ecom.png";
import pma from "../assets/portfolio/pma.png";
import blog from "../assets/portfolio/blog.png";
import chat from "../assets/portfolio/chat.png";
import portfo from "../assets/portfolio/portfo.png";
import phising from "../assets/portfolio/phising.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Project Management App",
      src: pma,
      link: 'https://project-managment-app-ten.vercel.app/',
      repo: 'https://github.com/arpitkasaudhan/Project_Managment_APP',
      techStack: "React, Node.js, Express, MongoDB, GCP, RTK,Nodemailer"
    },
    {
      id: 2,
      title: "E-commerce Site",
      src: ecom,
      link: 'https://fgecom.vercel.app/',
      repo: 'https://github.com/arpitkasaudhan/fgecom',
      techStack: "React, Node.js, Express, MongoDB, Tailwind CSS, Stripe, RTK, nodemailer"
    },
    {
      id: 3,
      title: "Blog App",
      src: blog,
      link: 'https://blogapp-taupe.vercel.app/',
      repo: 'https://github.com/arpitkasaudhan/BlogApp-',
      techStack: "React, Appwrite, Tinymce,RTK, Tailwind CSS, RTK, React-Hook-form"
    },
    {
      id: 4,
      title: "Chat Application",
      src: chat,
      link: 'https://main--chat-application-net.netlify.app/',
      repo: 'https://github.com/arpitkasaudhan/CHAT-APP-USING-MERN-',
      techStack: "React,Node,Express,MongoDB, Socket.io, Peer.js."
    },
    {
      id: 5,
      title: "Phishing Detection",
      src: phising,
      link: 'https://catch-the-phish-qgfr.onrender.com/',
      repo: 'https://github.com/avinashsinghgit/v3_phising_detection',
      techStack: "python, HTML, CSS"
    },
    {
      id: 6,
      title: "Personal Portfolio",
      src: portfo,
      link: 'https://persnol-portfolio.vercel.app/',
      repo: 'https://github.com/arpitkasaudhan/Persnol-Portfolio',
      techStack: "React, Tailwind CSS, Getform"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, src, link, repo, techStack }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h3 className="text-xl font-semibold text-center py-2">{title}</h3>
              <p className="text-center text-gray-400 text-sm px-2">{techStack}</p>
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 object-cover w-full h-48"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
