import React from "react";
import AboutImg from "../../assets/ni.png";
import { IoArrowForward } from "react-icons/io5";


const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row items-center justify-between bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 overflow-hidden"
    >
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img className="h-60 md:h-80 rounded-lg object-cover" src={AboutImg} alt="About img" />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-2/3 mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">I am a passionate and results-driven Associate Automation Engineer with expertise in full-stack development and automation. I specialize in building efficient, scalable, and user-friendly solutions using PHP, JavaScript, React.js, and MySQL.</h2>
        <ul>
          {/* Programming language */}
          <li className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1 text-[#465697]" />
            <div>
              <h1 className="text-xl md:text-1xl font-semibold leading-normal">
               Programming Language: Python, Java, PHP, JavaScript
              </h1>
             {/* <p className="text-sm md:text-md leading-tight">
              HTML, CSS, JavaScript, React.js, Tailwind CSS
              </p>*/}
            </div>
          </li>

          {/* web technologies */}
          <li className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1 text-[#465697]" />
            <div>
              <h1 className="text-xl md:text-1xl font-semibold leading-normal">
              Web Technologies/Database: HTML, CSS,ReactJS, Redux, Webpack, JQuery, REST API, SOAP,MYSQL
              </h1>
              {/*<p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              </p>*/}
            </div>
          </li>

          {/* Devops tools */}
          <li className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1 text-[#465697]" />
            <div>
              <h1 className="text-xl md:text-1xl font-semibold leading-normal">
              DevOps Tools: Jenkins,CI/CD Pipeline Management, Git
              </h1>
            </div>
          </li>
          {/* Automation tools/Dev Tools */}
          <li className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1 text-[#465697]" />
            <div>
              <h1 className="text-xl md:text-1xl font-semibold leading-normal">
              utomation Tools/Dev Tools:Power Automate Desktop and Cloud, Power Apps, Adobe Dreamweaver
              </h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
