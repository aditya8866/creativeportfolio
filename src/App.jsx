import "./App.css";
import Dog from "./component/Dog";
import { Canvas } from "@react-three/fiber";
import Navbar from "./component/Navbar";
import Particles from "./component/ParticleBG";
import Cursor from "./component/Cursor";
import HeroSectionCon from "./component/HeroSectionCon";
import AboutMe from "./component/AboutMe";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {

  gsap.registerPlugin(useGSAP());
  gsap.registerPlugin(ScrollTrigger);

  
  return (
    <main className="relative overflow-x-hidden bg-black text-white">
      
      {/* Cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar />

      {/* Background Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#30d3af"]}
          particleCount={1500}
          particleSpread={15}
          speed={0.2}
          particleBaseSize={40}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={true}
          pixelRatio={1}
        />
      </div>

      {/* 🔥 3D MODEL LAYER (GLOBAL, FLOATING) */}
      <div className="fixed top-0 left-0 w-full h-screen z-20 pointer-events-none">
        <Canvas className="w-full h-full">
          <Dog />
        </Canvas>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative ">

        {/* SECTION 1 */}
        <section className="section-1 w-full h-screen flex">
          
          {/* LEFT: Content */}
          <div className="w-1/2 h-full flex items-center justify-center z-10">
            <HeroSectionCon />
          </div>

          {/* RIGHT: Empty space for model */}
          <div className="w-1/2 h-full">
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-2 w-full h-screen flex ">

          <div className="w-2/5 h-full">

          </div>
          {/* Your content */}
          <div className="w-3/5 h-full z-55 relative ">
            <AboutMe/>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="w-full h-screen">
          {/* Model won't be used here (animation will stop) */}
        </section>

      </div>
    </main>
  );
}

export default App;