import { useState } from "react";
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Gallery() {
  const images = [
    "/gallery.jpeg",
    "/gallery2.jpeg",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpeg",
    "/gallery6.jpeg",
    "/gallery7.jpeg",
    "/gallery8.jpeg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-5xl w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Camera Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
                <FiCamera className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button (Demo Only) */}
        <div className="mt-8">
          <button className="bg-red-600 text-white font-medium px-6 py-2 rounded-full border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-400 ease-in-out">
            Show More
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            <FiX />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-5xl"
          >
            <FiChevronLeft />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-5xl"
          >
            <FiChevronRight />
          </button>
        </div>
        
      )}
    </div>
  );
}
