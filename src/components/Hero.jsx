import { useState, useEffect } from "react";

// Hero.jsx
export default function Hero() {
  const images = ["/img.jpg", "/img2.jpg", "/img3.jpg"]; // public/
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((c) => (c + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-32">
      {/* Sliding Track (X-axis) */}
      <div className="absolute inset-0 z-0">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            width: `${images.length * 100}vw`, // total width = N * 100vw
            transform: `translateX(-${currentIndex * 100}vw)`, // move by vw
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-screen flex-shrink-0 h-full flex items-center justify-center bg-black"
            >
              {/* object-contain prevents zoom/crop and centers the image */}
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Content (unchanged) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <h3 className="text-yellow-400 text-2xl italic mb-4">
          Authentic Italian Woodfire Pizza
        </h3>
        <h1 className="text-5xl md:text-7xl font-bold">
          Pizzaiolo Woodfire Pizza
        </h1>
        <h1 className="text-5xl md:text-3xl text-gray-300 pt-8">
          0406 858 124
        </h1>
        https://preview.themeforest.net/item/pizza-house-restaurant-cafe-bistro-theme/full_screen_preview/17622023
        {/* Order Online Button */}
        <button className="mt-8 px-4 py-2 rounded-full font-semibold bg-red-600 text-white border-2 border-red-600 hover:bg-transparent hover:border-white hover:text-white transition-colors duration-400 ease-in-out focus:outline-none">
          ORDER ONLINE
        </button>
      </div>
    </section>
  );
}
