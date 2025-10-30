import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import logo from "../images/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ✅ TOP BAR (Hide when scrolled) */}
      {!scrolled && (
        <div className="bg-[#000000] text-white px-4 py-3 text-sm">

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center text-center space-y-2">

            {/* ✅ Row 1: Phone + Email in ONE LINE with spacing */}
            <div className="flex flex-wrap justify-center gap-3 text-[14px]">
              <a href="tel:0406858124" className="flex items-center gap-1 hover:text-red-500 transition">
                <FiPhone className="text-[16px]" />
                0406 858 124
              </a>

              <a
                href="mailto:pizzaiolosydney@gmail.com"
                className="flex items-center gap-1 hover:text-red-500 transition"
              >
                <FiMail className="text-[16px]" />
                pizzaiolosydney@gmail.com
              </a>
            </div>

            {/* ✅ Row 2: Mobile Icons + Contact Button */}
            <div className="flex items-center justify-center gap-4 pt-1">
              <a href="https://www.facebook.com/pizzaiolosydney" className="hover:text-red-500 transition">
                <FaFacebookF className="text-[18px]" />
              </a>

              <a href="https://www.instagram.com/pizzaiolosydney/" className="hover:text-red-500 transition">
                <FaInstagram className="text-[18px]" />
              </a>


              <button className="px-3 py-1 rounded bg-red-600 text-sm hover:bg-red-700 transition">
                Contact Us
              </button>
            </div>

          </div>


          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:0406858124" className="flex items-center gap-1 hover:text-red-500 transition">
                <FiPhone className="text-[16px]" />
                0406 858 124
              </a>

              <a
                href="mailto:pizzaiolosydney@gmail.com"
                className="flex items-center gap-1 hover:text-red-500 transition"
              >
                <FiMail className="text-[16px]" />
                pizzaiolosydney@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/pizzaiolosydney" target="_blank"
                rel="noopener noreferrer" className="hover:text-red-500 transition">
                <FaFacebookF className="text-[18px]" />
              </a>

              <a href="https://www.instagram.com/pizzaiolosydney/" target="_blank"
                rel="noopener noreferrer" className="hover:text-red-500 transition">
                <FaInstagram className="text-[18px]" />
              </a>
              <button className="px-4 py-1 rounded-full bg-red-600 hover:bg-transparent hover:border-1 duration-100 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      )}


      {/* ✅ NAVBAR */}
      <nav
        className={`flex items-center justify-between px-6 md:px-8 lg:px-10 transition-all duration-500 ${scrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
          }`}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className={`transition-all duration-500 ${scrolled ? "w-16 h-16" : "w-24 h-24"
            }`}
        />

        {/* Desktop Links */}
        <ul className="hidden xl:flex space-x-6 text-white font-medium">
          <li className="hover:text-red-600 cursor-pointer duration-300">Home</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Pizza Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Gallery</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Roaming Cannoli</li>
          <li className="hover:text-red-600 cursor-pointer duration-300">Pizzaiolo Setup</li>
        </ul>

        {/* Contact Button Desktop */}
        <button className="hidden xl:block px-4 py-2 rounded-full bg-red-600 border-2 border-red-600 text-white hover:bg-transparent hover:border-white transition cursor-pointer">
          Contact Us
        </button>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden text-white text-3xl cursor-pointer">
          <FiMenu onClick={() => setMenuOpen(true)} />
        </div>
      </nav>

      {/* ✅ MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white transform transition-transform duration-500 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <FiX className="text-3xl cursor-pointer hover:text-red-600" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col items-center space-y-6 text-lg mt-6">
          {["Home", "Pizza Catering Form", "Gallery", "Catering Form", "Roaming Cannoli", "Pizzaiolo Setup"].map(
            (label) => (
              <li key={label} onClick={() => setMenuOpen(false)} className="hover:text-red-600 cursor-pointer">
                {label}
              </li>
            )
          )}
          <li className="text-red-500 font-semibold" onClick={() => setMenuOpen(false)}>
            Contact Us
          </li>
        </ul>
      </div>
    </header>
  );
}
