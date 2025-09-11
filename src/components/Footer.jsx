import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative h-90 flex items-center justify-center"
      style={{
        backgroundImage: "url('/tree.png')", // banner background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Center Content (Logo + Text) */}
      <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/logo-retina.webp" // pizza logo
          alt="Pizza Logo"
          className="w-50 h-32 object-contain transition-transform duration-700 hover:rotate-[360deg]"
        />
        <p className="text-white text-1xl mt-2">
          <span className="hover:text-yellow-600 cursor-pointer transition-colors duration-300">
            Pizzaiolo
          </span>{" "}
          © 2025. All rights reserved.
        </p>
      </div>

      {/* Social Media Icons Bottom Right */}
      <div className="absolute bottom-4 right-6 flex space-x-4 text-white text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-sky-400 transition-colors duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
