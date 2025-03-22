import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { SiPython, SiPhp,SiMysql } from "react-icons/si"
import EricssonLogo from '../../assets/Ericsson.png';
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPython color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPhp color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#47A248" size={50} />
          </span>
        </div>
        <div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
      <img src={EricssonLogo} alt="Ericsson Logo" className="w-12 h-12" />
      <span className="text-white">
        <h2 className="leading-tight">Associate Automation Engineer, Ericsson</h2>
        <p className="text-sm leading-tight font-thin">
          Aug 2023 - Present
        </p>
       {/* <ul className="text-sm p-2">
          <li>- Work as Associte Automation Engineer</li>
        </ul>*/}
      </span>
    </div>
    <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
      <img src={EricssonLogo} alt="Ericsson Logo" className="w-12 h-12" />
      <span className="text-white">
        <h2 className="leading-tight">Intern, Ericsson</h2>
        <p className="text-sm leading-tight font-thin">
          Feb 2023 - August 2023
        </p>
        {/*<ul className="text-sm p-2">
          <li>-intern</li>
        </ul>*/}
      </span>
    </div>
          
        </div>
      </div>
    </div>
  );
};

export default Experience;