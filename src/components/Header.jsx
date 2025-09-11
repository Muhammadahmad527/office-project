import { useEffect, useState } from "react";
import logo from "../images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="flex items-center justify-between px-8 transition-all duration-500">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Pizza House"
            className={`transition-all duration-500 ease-in-out hover:rotate-[360deg] ${
              scrolled ? "w-16 h-16" : "w-24 h-24"
            }`}
          />
        </div>

        {/* Center Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li className="hover:text-red-600 cursor-pointer duration-300">Home</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Pizza Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Gallery</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Roaming Cannoli</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Pizzaiolo Setup</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-white font-medium">
          <button className="px-4 py-2 rounded-full font-semibold bg-red-600 text-white border-2 border-red-600 hover:bg-transparent hover:border-white hover:text-white transition-colors duration-400 ease-in-out focus:outline-none">
            Contact US
          </button>
        </div>
      </nav>
    </header>
  );
}
