
import { FaPizzaSlice, FaStar } from "react-icons/fa";

const About = () => {
  return (
    
    <div className="flex flex-row items-center justify-between px-32 py-32">
      

      {/* Right side video */}
      <div className="w-1/2 flex justify-end space-x-6">
        
        <video
          src="/video.mp4"
          className="w-[300px]"
          controls
          autoPlay
          loop
          muted
        />
        <img className="w-[300px]" src="/new.jpeg" alt="" />
      </div>
      {/* Left side content */}
      <div className="w-[400px]">
        <div className="flex justify-center mb-4">
          <FaPizzaSlice className="text-yellow-500 text-4xl" />
        </div>

        <h2 className="text-3xl font-bold mb-4 text-center">
          Pizza Catering
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          We would like to take this opportunity to welcome you at our Pizza House. 
          We are offering a warm, friendly atmosphere to share a meal with family and friends 
          at any time of the day or evening.
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
        <div className="text-center pt-20">
          <button className="bg-red-600 text-white font-medium px-6 py-2 rounded-full border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-400 ease-in-out">
            Book Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
