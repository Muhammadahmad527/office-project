import logo from '../images/logo.png'

// Navbar.jsx
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-8 py-4">

        {/* Logo on the Left */}
        <div>
          <img
            src={logo} // put your logo in public folder
            alt="Pizza House"
            className="w-26 h-26 transition-transform duration-700 ease-in-out
    hover:rotate-[360deg]"
          />
        </div>

        {/* Center Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Pizza Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer">Gallery</li>
          <li className="hover:text-red-600 cursor-pointer">Catering Form</li>
          <li className="hover:text-red-600 cursor-pointer">Roaming Cannoli</li>
          <li className="hover:text-red-600 cursor-pointer">Pizzaiolo Setup</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-white font-medium">
          <button className="px-4 py-2 rounded-full font-semibold bg-red-600 text-white border-2 border-red-600 hover:bg-transparent hover:border-white hover:text-white
          transition-colors duration-400 ease-in-out
          focus:outline-none">
            Contact US
          </button>
        </div>
      </nav>
    </header>
  );
}
