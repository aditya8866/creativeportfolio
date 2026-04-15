import React from "react";
import gsap from "gsap";

const AboutMe = () => {

  const handleEnter = (e) => {
    gsap.to(e.currentTarget, {
      x: 4,
      y: -4,
      scale: 1.1,
      duration: 0.2,
    });
  };

  const handleLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1.5, 0.3)",
    });
  };

  return (
    <div className="w-full ml-30">
      
      {/* Heading */}
      <div className="font-[heroheading] text-6xl font-bold mb-10 text-[#32d3a2]">
        About ME
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 font-[para] text-xl max-w-2xl text-[#9f9fa9]">
        
        <p>
          Hello! My name is Aditya and I enjoy building things that live on the
          internet. My interest in web development started when I began
          experimenting with JavaScript and customizing small projects.
        </p>

        <p>
          I’m a Computer Applications student focused on becoming a skilled MERN
          stack developer, building scalable apps with clean UI and smooth
          animations.
        </p>

        <p>
          When I’m not coding, I explore Three.js, improve my skills, and work on
          creative ideas solving real-world problems.
        </p>

        {/* Buttons + Icons */}
        <div className="flex items-center gap-10 mt-5">

          {/* Button */}
          <a className="group flex text-sm items-center gap-3 px-8 py-5 bg-[#1DBA8A] text-white rounded-2xl font-semibold tracking-wide 
          hover:scale-105 hover:shadow-[0_0_25px_rgba(29,186,138,0.6)] transition-all duration-300">
            
            <span>EXPLORE MY WORKS</span>

            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </a>

          {/* GitHub Icon */}
          <a
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="cursor-pointer"
            
          >
            <svg width="30" viewBox="0 0 24 24" fill="#9f9fa9">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.7.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.59 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="cursor-pointer"
          >
            <svg width="30" viewBox="0 0 24 24" fill="#9f9fa9">
              <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.98h3v11h-3v-11zm7.5 0h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.47h-3v-5.73c0-1.37-.02-3.13-1.9-3.13-1.9 0-2.2 1.48-2.2 3.03v5.83h-3v-11z"/>
            </svg>
          </a>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;