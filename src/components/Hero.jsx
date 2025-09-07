

// Hero.jsx

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative w-full"
      style={{ backgroundImage: "url('/img.jpg')", backgroundSize: "cover", backgroundPosition: "center"  }} // put hero image in public folder
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* dark overlay */}

      {/* Text Content */}
      <div className=" relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h3 className="text-yellow-400 text-2xl italic mb-4">
          Authentic Italian Woodfire Pizza
        </h3>
        <h1 className="text-5xl md:text-7xl font-bold">
          Pizzaiolo Woodfire Pizza
        </h1>
        {/* Order Online Button */}
        <button className="mt-8 px-4 py-2 rounded-full font-semibold
    bg-red-600 text-white
    border-2 border-red-600
    hover:bg-transparent hover:border-white hover:text-white
    transition-colors duration-200 ease-in-out
    focus:outline-none">
          ORDER ONLINE
        </button>
      </div>
    </section>
  );
}
