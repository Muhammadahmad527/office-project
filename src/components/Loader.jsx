import React, { useEffect, useState } from "react";

export default function PizzaioloLoader({ onFinish, duration = 2000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black z-50">
      {/* Chef */}
      <div className="relative flex flex-col items-center">
        {/* Hat */}
        <div className="w-20 h-12 bg-white rounded-t-full shadow-md" />
        {/* Face */}
        <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center relative">
          {/* Mustache */}
          <div className="absolute bottom-2 flex space-x-1">
            <div className="w-4 h-2 bg-black rounded-full rotate-[-20deg]" />
            <div className="w-4 h-2 bg-black rounded-full rotate-[20deg]" />
          </div>
        </div>
        {/* Body */}
        <div className="w-14 h-20 bg-red-600 rounded-b-full relative">
          {/* Arms */}
          <div className="absolute -top-2 -left-10 w-10 h-4 bg-amber-200 rounded-full animate-arm-left origin-right" />
          <div className="absolute -top-2 -right-10 w-10 h-4 bg-amber-200 rounded-full animate-arm-right origin-left" />
        </div>
      </div>

      {/* Pizza tossing */}
      <div className="relative mt-10">
        <div className="w-24 h-24 rounded-full bg-yellow-400 border-4 border-orange-600 animate-toss relative">
          {/* Pepperoni */}
          <div className="w-4 h-4 bg-red-700 rounded-full absolute top-4 left-6" />
          <div className="w-3 h-3 bg-red-700 rounded-full absolute bottom-6 right-6" />
          <div className="w-3 h-3 bg-red-700 rounded-full absolute top-8 right-8" />
        </div>
      </div>

      {/* Text */}
      <p className="mt-10 text-white text-2xl font-semibold tracking-wide animate-pulse">
        Welcome to Pizzaiolo...
      </p>
    </div>
  );
}
