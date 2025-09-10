import { useEffect, useState } from "react";

export default function PizzaioloLoader({ onFinish, duration = 3000 }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out 0.5s before actual removal
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, duration - 500);

    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, [duration, onFinish]);

  if (!visible) return null;

  const word = "Pizzaiolo";

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest text-yellow-400 flex space-x-1">
        {word.split("").map((char, idx) => {
          let anim = "";

          if (idx < 4) anim = "from-left"; // Pizz
          else if (idx === 4) anim = "from-top-mirror"; // a
          else anim = "from-right"; // iolo

          return (
            <span
              key={idx}
              className={`letter ${anim}`}
              style={{ animationDelay: `${idx * 0.25}s` }}
            >
              {char}
            </span>
          );
        })}
      </h1>

      <style>{`
        .letter {
          display: inline-block;
          opacity: 0;
        }

        @keyframes fromLeft {
          0% { transform: translateX(-120px); opacity: 0; }
          60% { transform: translateX(15px); opacity: 1; }
          80% { transform: translateX(-8px); }
          100% { transform: translateX(0); }
        }
        .from-left { animation: fromLeft 1s ease forwards; }

        @keyframes fromRight {
          0% { transform: translateX(120px); opacity: 0; }
          60% { transform: translateX(-15px); opacity: 1; }
          80% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
        .from-right { animation: fromRight 1s ease forwards; }

        @keyframes fromTopMirror {
          0% { transform: translateY(-120px) scaleX(-1); opacity: 0; }
          50% { transform: translateY(30px) scaleX(-1); opacity: 1; }
          80% { transform: translateY(-10px) scaleX(1); }
          100% { transform: translateY(0) scaleX(1); }
        }
        .from-top-mirror { animation: fromTopMirror 1.2s ease forwards; }
      `}</style>
    </div>
  );
}
