import { FaPizzaSlice, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-8 md:px-20 lg:px-40 py-16 md:py-32 gap-16 md:gap-28">
      {/* Left side video (on desktop) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <video
  src="/video.mp4"
  className="
    w-full 
    max-w-[260px]   /* small screens → narrower → smaller height */
    md:max-w-[340px] /* medium screens → a bit larger */
    lg:max-w-[420px] /* large screens → full size */
    h-auto 
    rounded-lg 
    bg-black
  "
  controls
  autoPlay
  loop
  muted
  playsInline
/>


      </div>

      {/* Right side content */}
      <div className="w-full md:w-[420px]">
        <div className="flex justify-center mb-4">
          <FaPizzaSlice className="text-yellow-500 text-4xl" />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-center">Pizza Catering</h2>

        <p className="text-lg text-gray-700 mb-6 text-center md:text-left leading-relaxed">
          We would like to take this opportunity to welcome you at our Pizza
          House. We are offering a warm, friendly atmosphere to share a meal
          with family and friends at any time of the day or evening.
        </p>

        {/* ⭐ 5 small stars */}
        <div className="flex justify-center space-x-2 pt-8">
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
        </div>

        {/* Bottom Section (h1 + button) */}
        <div className="text-center pt-10 md:pt-20">
          <button className="bg-red-600 text-white font-medium px-6 py-2 rounded-full border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-400 ease-in-out">
            Book Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
