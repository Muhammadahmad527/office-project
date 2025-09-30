// Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative min-h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/newcon.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center relative z-10">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Pizzaiolo Truck Logo"
          className="w-40 h-28 object-contain transition-transform duration-700 hover:rotate-[360deg]"
        />

        {/* Paragraph */}
        <p className="text-white text-lg mt-4 px-4">
          <span className="hover:text-yellow-500 cursor-pointer transition-colors duration-300 font-semibold">
            Pizzaiolo truck
          </span>{" "}
          © 2025. All rights reserved.
        </p>
      </div>

      {/* Social Media Icons - Bottom Right */}
      <div className="absolute bottom-4 right-6 flex space-x-4 text-white text-2xl z-10">
        <a href="https://www.facebook.com/pizzaiolosydney" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-sky-400 transition-colors duration-300" />
        </a> */}
        <a href="https://www.instagram.com/pizzaiolosydney/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
