import { useEffect, useRef } from "react";
import { FaPizzaSlice, FaStar } from "react-icons/fa";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".fade-left, .fade-right");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }, { threshold: 0.3 });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col-reverse md:flex-row items-center px-8 md:px-20 lg:px-40 py-16 md:py-32 gap-16 md:gap-28 overflow-hidden">

      {/* Video */}
      <div className="fade-left w-full md:w-1/2 flex justify-center md:justify-end">
        <video
          src="/video.mp4"
          className="w-full max-w-[260px] md:max-w-[340px] lg:max-w-[420px] h-auto rounded-lg bg-black"
          controls
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content */}
      <div className="fade-right w-full md:w-[420px]">
        <div className="flex justify-center mb-4">
          <FaPizzaSlice className="text-yellow-500 text-4xl" />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-center">Pizza Catering</h2>

        <p className="text-lg text-gray-700 mb-6 text-center md:text-left leading-relaxed">
          We would like to take this opportunity to welcome you at our Pizza
          House. We are offering a warm, friendly atmosphere to share a meal
          with family and friends at any time of the day or evening.
        </p>

        <div className="flex justify-center space-x-2 pt-8">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-sm" />
          ))}
        </div>

        <div className="text-center pt-10 md:pt-20">
          <button className="bg-red-600 text-white font-medium px-6 py-2 rounded-full border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-all duration-300">
            Book Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
