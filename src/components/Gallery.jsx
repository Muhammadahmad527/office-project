import { useState, useRef, useEffect } from "react";
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Gallery() {
  const images = [
    "/section1.jpeg",
    "/section2.jpeg",
    "/section3.jpeg",
    "/section4.jpeg",
    "/section5.jpeg",
    "/section6.jpeg",
    "/section7.jpeg",
    "/section8.jpeg",
    "/section9.jpeg",
    "/section10.jpeg",
    "/section11.jpeg",
    "/section12.jpeg",
    "/section13.jpeg",
    "/section14.jpeg",
    "/section15.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Initialize refs as array
  const refs = useRef([]);

  useEffect(() => {
    // ✅ Ensure this only runs in browser (Fix for Next.js SSR)
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="mb-20">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        GALLERY
      </h1>

      <section className="p-4 flex flex-col items-center">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 max-w-5xl w-full">
          {images.map((src, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer opacity-0 translate-y-6 transition-all duration-700 ease-out"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-40 opacity-0 group-hover:opacity-70 transition">
                <FiCamera className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="bg-red-600 text-white cursor-pointer font-medium px-6 py-2 rounded-full border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-400 ease-in-out">
            Show More
          </button>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white text-4xl">
            <FiX />
          </button>

          <button onClick={prevImage} className="absolute left-6 text-white text-5xl">
            <FiChevronLeft />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
          />

          <button onClick={nextImage} className="absolute right-6 text-white text-5xl">
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
