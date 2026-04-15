import React, { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {

  const handleEnter = (e) => {
  gsap.to(e.currentTarget, {
    x: 3,
    y: -3,
    duration: 0.2,
  });
};

const handleLeave = (e) => {
  gsap.to(e.currentTarget, {
    x: 0,
    y: 0,
    duration: 0.4,
    ease: "elastic.out(1.5, 0.3)",
  });
};
  
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-3xl  border-b border-white/10">
      {" "}
      <div className="max-w-8xl mx-auto flex items-center justify-between  px-20 py-4">
        {/* Logo */}
        <a
          href="#"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="font-heading text-2xl font-bold tracking-tighter flex items-center gap-3 group"
        >
          <div className="w-10 h-10  bg-[#10b981] rounded-xl flex items-center justify-center text-brand-black text-xl group-hover:rotate-12 transition-transform">
            A
          </div>

          <span className="text-white transition-colors font-[heroheading] hover:text-[#10b981]">Saini.</span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center border  text-xs bg-zinc-950 uppercase font-[para] tracking-wide  border-gray-600 px-12 py-3 rounded-full  gap-15  font-semibold text-white">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#10b981] transition duration-300"
          >
             About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#10b981] transition duration-300"
          >
            Experience
          </Link>

          <Link
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#10b981] transition duration-300"
          >
             Expertise
          </Link>

          <Link
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#10b981] transition duration-300"
          >
             WORK
          </Link>

          
        </div>
                  {/* Contact Button */}

        <Link
            to="contact"
            smooth
            duration={500}
            onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
            className=" cursor-pointer px-6 py-2 font-[para] uppercase text-xs tracking-wide  font-semibold  rounded-full bg-white text-black hover:bg-[#10b981] hover:text-white   "
          >
            Start a Project
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
