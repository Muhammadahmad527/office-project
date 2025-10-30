import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Jeremy Ong",
    date: "2024-08-16",
    text: "So we had spied this lovely pizza truck that's been parked near the community garden...",
  },
  {
    name: "Carla Attwell",
    date: "2024-08-01",
    text: "I’m quite particular about my pizzas and though I haven’t tried every option in Sydney...",
  },
  {
    name: "Matt R",
    date: "2024-06-08",
    text: "Hands down best Authentic wood fire pizza around! 🍕🔥",
  },
  {
    name: "Sophia L",
    date: "2024-07-10",
    text: "Incredible flavors and crispy crust. My kids loved it!",
  },
  {
    name: "David K",
    date: "2024-07-20",
    text: "One of the best pizza trucks I’ve ever tried. Highly recommended!",
  },
  {
    name: "Emma W",
    date: "2024-08-05",
    text: "The staff were so friendly and the pizza was fresh and hot!",
  },
  {
    name: "Lucas M",
    date: "2024-07-28",
    text: "Perfectly baked woodfire pizza with amazing toppings!",
  },
  {
    name: "Hannah G",
    date: "2024-08-02",
    text: "Tried it last night and already planning my next visit!",
  },
  {
    name: "Tom S",
    date: "2024-06-30",
    text: "Authentic flavors, great portion sizes, worth every cent!",
  },
  {
    name: "Olivia P",
    date: "2024-08-12",
    text: "This truck has completely changed my pizza standards. Amazing!",
  },
];

export default function Review() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 3 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 3) % reviews.length);
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + 3);
  if (visibleReviews.length < 3) {
    visibleReviews.push(...reviews.slice(0, 3 - visibleReviews.length));
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2 flex justify-center text-center w-full gap-1">
        <span className="font-bold">
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#DB4437" }}>o</span>
          <span style={{ color: "#F4B400" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#0F9D58" }}>l</span>
          <span style={{ color: "#DB4437" }}>e</span>
        </span>
        <span>Reviews</span>
      </h2>

      <div className="text-yellow-500 text-3xl mb-1">★★★★★</div>
      <p className="mb-6 text-gray-600">Trusted by 43 Verified <span className="font-semibold">Clients</span></p>

      <div className="flex items-center justify-center gap-4">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="p-2 rounded-full border shadow hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {visibleReviews.map((review, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-md border bg-white p-4 text-left"
            >
              <div className="font-semibold text-lg">{review.name}</div>
              <div className="text-sm text-gray-500 mb-2">{review.date}</div>
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="p-2 rounded-full border shadow hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4">Verified by Trustindex ✅</p>
    </div>
  );
}
