import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // hide cursor on mobile
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  if (isMobile) {
    return null;
  }

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // initial position off-screen
    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });

    // smooth movement
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });
    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    // mouse move
    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // click animation
    document.addEventListener("mousedown", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.6,
        duration: 0.2,
      });
    });
    document.addEventListener("mouseup", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2,
      });
    });

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", () => {});
      document.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <>
      {/* main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-black rounded-full pointer-events-none z-[9999]"
      />

      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[27px] h-[27px] border border-black rounded-full pointer-events-none z-[9999] opacity-50"
      />
    </>
  );
};

export default CustomCursor;
