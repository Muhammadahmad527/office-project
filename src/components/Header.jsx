import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-8 lg:px-10 transition-all duration-500">
        
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

        {/* Desktop links - only visible ≥1036px */}
        <ul className="hidden xl:flex space-x-6 text-white font-medium">
          <li className="hover:text-red-600 cursor-pointer duration-300">Home</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Pizza Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Gallery</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Roaming Cannoli</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Pizzaiolo Setup</li>
        </ul>

        {/* Desktop Contact button - only visible ≥1036px */}
        <div className="hidden xl:flex items-center space-x-6 text-white font-medium">
          <button className="px-4 py-2 rounded-full font-semibold bg-red-600 text-white border-2 border-red-600 hover:bg-transparent hover:border-white hover:text-white transition-colors duration-400 ease-in-out focus:outline-none">
            Contact US
          </button>
        </div>

        {/* Hamburger - only visible ≤1035px */}
        <div className="xl:hidden text-white text-3xl cursor-pointer">
          <FiMenu onClick={() => setMenuOpen(true)} />
        </div>
      </nav>

      {/* Slide-in menu from right */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white transform transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <FiX
            className="text-3xl cursor-pointer hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Links inside menu */}
        <ul className="flex flex-col items-center space-y-6 text-lg mt-6">
          {[
            "Home",
            "Pizza Catering Form",
            "Gallery",
            "Catering Form",
            "Roaming Cannoli",
            "Pizzaiolo Setup",
          ].map((label) => (
            <li
              key={label}
              className="hover:text-red-600 cursor-pointer duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </li>
          ))}

          {/* Contact link */}
          <li
            className="text-red-500 font-semibold cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </header>
  );
}
