import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Pepperoni",
    description:
      "Vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra posuere.",
    price: 17.8,
    image:
      "/newpizza.png", // replace with your image
  },
  {
    id: 2,
    name: "Glute-Free Pizza",
    description:
      "Integer vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra posuere.",
    price: 19.0,
    image:
      "newpizza.png", // replace with your image
  },
  {
    id: 3,
    name: "Gluten-Free Pasta",
    description:
      "Integer vitae enim vel nisi feugiat ultricies. Phasellus hendrerit pharetra posuere.",
    price: 14.3,
    image:
      "newpizza.png", // replace with your pasta image
  },
];

const PizzaSection = () => {
  return (
    <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('/this.jpg')" }}>

      <div className="text-center mb-12">
        <p className="text-yellow-500 italic">Order online now</p>
        <h2 className="text-4xl font-bold text-white">Our Delicious Pizzas</h2>
      </div>

      <div className="flex items-center justify-center gap-6">
        {/* Left arrow */}
        <button className="text-yellow-500 text-2xl hover:text-yellow-400">
          <FaArrowLeft />
        </button>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="text-center text-white">
              <img
                src={item.image}
                alt={item.name}
                className="w-56 h-56 object-cover mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-yellow-500 mt-4">
                {item.name}
              </h3>
              <p className="text-gray-200 mt-2 text-sm px-4">{item.description}</p>
              <p className="text-white font-bold mt-2">${item.price.toFixed(2)}</p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg">
                SELECT OPTIONS
              </button>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button className="text-yellow-500 text-2xl hover:text-yellow-400">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default PizzaSection;
