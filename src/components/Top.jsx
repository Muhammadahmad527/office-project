import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {   // 👈 same as Navbar
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all duration-300"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
}
