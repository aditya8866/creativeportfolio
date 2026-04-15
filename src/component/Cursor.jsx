import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    if (!dot || !circle) return;

    // smooth follower
    const xTo = gsap.quickTo(circle, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(circle, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // center both
      gsap.set(dot, {
        x: clientX,
        y: clientY,
        xPercent: -50,
        yPercent: -50,
      });

      xTo(clientX);
      yTo(clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    if (!dot || !circle) return;

    const xTo = gsap.quickTo(circle, "x", { duration: 0.2 });
    const yTo = gsap.quickTo(circle, "y", { duration: 0.2 });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.set(dot, {
        x: clientX,
        y: clientY,
        xPercent: -50,
        yPercent: -50,
      });

      xTo(clientX);
      yTo(clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // 👇 ADD YOUR CODE HERE
    const targets = document.querySelectorAll(" a");

    const enterHandler = () => {
      // hide dot
      gsap.to(dotRef.current, { scale:0.7  });

      // circle hover style
      gsap.set(circleRef.current, {
        backgroundColor: "rgba(47, 207, 172, 0.15)", // soft fill
        borderColor: "#2fcfac", // solid border
      });
      gsap.to(circleRef.current, { scale: 1.8 });
    };

    const leaveHandler = () => {
      // show dot
      gsap.to(dotRef.current, { scale: 1});

      // reset circle to original
      gsap.set(circleRef.current, {
        backgroundColor: "transparent", // ✅ instead of "none"
        opacity: 1,
        borderColor: "#2fcfac", // ✅ back to white
      });

      gsap.to(circleRef.current, { scale: 1 });
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enterHandler);
      el.addEventListener("mouseleave", leaveHandler);
    });

    // cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);

      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enterHandler);
        el.removeEventListener("mouseleave", leaveHandler);
      });
    };
  }, []);

  return (
    <>
      {/* center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#2fcfac] rounded-full pointer-events-none z-[9999]"
      />

      {/* outer circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#2fcfac] rounded-full pointer-events-none z-[9998] "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
