import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";



const HeroSectionCon = () => {

  useGSAP(() => {
  
    const tl = gsap.timeline();

tl.from(".heading", {
  delay:1,
  x: -250,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3
})
tl.from(".para",{
     y: 20,
  opacity: 0,
  duration: 0.8,
  // stagger: 0.3
})
  
});
    
  return (
    <div className="flex flex-col gap-12 mt-14 ml-8">
      {/* {upper badge} */}
      <div className="inline-flex w-fit items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5">
        <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>

        <span className="text-[9px] font-[para] font-bold tracking-[0.3em] uppercase text-gray-400">
          Crafting experiences at the edge of tech
        </span>
      </div>

      {/* heading */}
      <div className="flex flex-col font-[heroheading] text-[100px] leading-none  font-bold">
        <span className="heading">Architecting</span>
        <span className= " heading text-zinc-700 italic font-semibold">Digital</span>
        <span className="heading text-[#10b981]">Masterpieces.</span>
      </div>

      <div className=" para max-w-xl text-2xl text-[#71717a] tracking-wide">
        I am Aditya Saini, a Creative Frontend Developer. I build
        high-performance, immersive web interfaces where code meets engineering
        elegance.
      </div>
    </div>
  );
};

export default HeroSectionCon;
