import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(true);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/arpitkasaudhan/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/arpitkasaudhan",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kasaudhanarpit37@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1MON2HqxnrhuBMxQKlS64QvfuoQ6msXx2/view",
    },
    {
      id: 5,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/ArpitKasaudhan",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="fixed top-[35%] left-0 flex flex-col items-start">
      <button
        className="bg-gray-700 text-white p-1 rounded-full m-2 hover:bg-gray-600"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>
      {isVisible && (
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SocialLinks;
