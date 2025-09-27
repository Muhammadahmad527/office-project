export default function OurStory() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="flex flex-col justify-center">
          {/* Icon + divider centered with image */}
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-4 text-red-600 text-2xl">🍕</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Our Journey
          </h2>

          {/* Years navigation */}
<div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
  <button className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow">
    2015
  </button>
  <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
    2018
  </button>
  <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
    2020
  </button>
  <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
    2022
  </button>
  <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
    2025
  </button>
</div>


          {/* Story text */}
          <p className="text-gray-600 leading-relaxed mb-6 text-center md:text-left">
            At Pizzaiolo, we bring the true taste of Italy to your table with every slice.
            Our passion for crafting authentic, wood-fired pizzas using the freshest
            ingredients sets us apart. Whether you’re craving a classic Margherita or a
            bold new flavor, every pizza is made with love, tradition, and a dedication
            to quality that you can taste in every bite.
          </p>


          {/* Read more */}
<a
  href="#"
  className="block text-red-600 font-semibold tracking-wider hover:underline text-center md:text-left"
>
  READ MORE
</a>

        </div>

        {/* Right side - image */}
        <div className="flex justify-center">
          <img
            src="/journey.jpg"
            alt="Pizza"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
