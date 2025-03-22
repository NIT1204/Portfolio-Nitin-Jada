import React from 'react'
import avatarImg from "../../assets/jada.png";
import TextChange from '../TextChange';

const Home = () => {
    return (
        <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 min-h-screen bg-[#0b0f2f]">
            {/* Text section */}
            <div className="md:w-2/3 md:pt-10">
                <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
                    <TextChange/>
                </h1>
                <p className="text-sm md:text-2xl tracking-tight mt-4">
                I'm an experienced Associate Automation Engineer with a passion for building efficient, scalable, and user-friendly solutions. I specialize in full-stack development using PHP, JavaScript, React.js, and MySQL, while also excelling in automation Workflows using Power Apps and Power Automate
                </p>
                <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    <a href='file:///C:/Users/NITIN%20JADA/Downloads/Nitin_Jada2.pdf'>Resume</a>
                </button>
            </div>

            {/* Image on the right side */}
            <div className="md:w-1/3 flex justify-end mt-5 md:mt-0">
                <img className="rounded-lg object-cover w-full max-w-xs md:max-w-sm" src={avatarImg} alt="Nitin Jada" />
            </div>
        </div>
    );
};

export default Home;
