import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

const Dog = () => {
  gsap.registerPlugin(useGSAP());
  gsap.registerPlugin(ScrollTrigger);

  const { camera, gl } = useThree();

  const model = useGLTF("/models/Untitled.glb");
  const { actions } = useAnimations(model.animations, model.scene);

  // ✅ Camera + renderer setup
  useEffect(() => {
    camera.position.set(0, 0, 0.7);
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [camera, gl]);

  // ✅ Play animation
    useEffect(() => {
      if (!actions) return;

      const action = actions["Take 001"];
      action?.reset().fadeIn(0.3).play();

      return () => action?.fadeOut(0.3);
    }, [actions]);

  const girlModel = useRef(model);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-1",
        endTrigger: ".section-2",
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        scrub: true,
      },
    });

    tl.to(girlModel.current.scene.rotation, {
      y: `-=${Math.PI * 1.68}`,
      ease: "none",
    },"third")
    .to(girlModel.current.scene.position, {
      z: "-=0.75",
      y: "+=0.2",
      x: "-1.3",
    },"third")
    .to(girlModel.current.scene.rotation,{
      z:"-0.05"
    },"third")
  }, []);

  return (
    <>
      {/* ✅ ORIGINAL MODEL (no material override) */}
      <primitive
        object={model.scene}
        position={[0.5, -1.2, 0]}
        rotation={[0, -(Math.PI / 7), 0]}
      />

      {/* ✅ Lighting (important now) */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      {/* ✅ Controls */}
    </>
  );
};

export default Dog;
