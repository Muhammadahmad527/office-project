import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/container.jpg", "/websitemain2.jpeg", "/websitemain.jpeg"]; // public/
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  // ----- typing texts -----
  const h3Text = "Authentic Italian Woodfire Pizza";
  const mainText = "Pizzaiolo Woodfire Pizza";
  const phoneText = "0406 858 124";
  const texts = [h3Text, mainText, phoneText];

  const [displayed, setDisplayed] = useState(["", "", ""]);
  const [lineIndex, setLineIndex] = useState(0); // which line is being typed
  const [charIndex, setCharIndex] = useState(0); // next char index for current line
  const [typingDone, setTypingDone] = useState(false);

  const speed = 60; // ms per character (tweak for faster/slower)

  useEffect(() => {
    let t;
    if (lineIndex < texts.length) {
      const cur = texts[lineIndex];
      // still characters to type on current line
      if (charIndex < cur.length) {
        t = setTimeout(() => {
          setDisplayed((prev) => {
            const copy = [...prev];
            copy[lineIndex] = cur.slice(0, charIndex + 1);
            return copy;
          });
          setCharIndex((c) => c + 1);
        }, speed);
      } else {
        // finished this line -> short pause then start next line
        t = setTimeout(() => {
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }, 300);
      }
    } else {
      // all lines done — hide caret
      if (!typingDone) setTypingDone(true);
    }
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, charIndex]); // texts are constant here

  return (
    <section className="relative h-screen w-full overflow-hidden pt-32">
      {/* Sliding Track (X-axis) */}
      <div className="absolute inset-0  z-0">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out "
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
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover "
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        {/* h3 responsive - typing */}
        <h3 className="text-lg sm:text-xl md:text-2xl italic mb-4 text-yellow-400">
          <span className="whitespace-pre">{displayed[0]}</span>
          {/* caret shown only while typing this line */}
          <span
            className={`typing-caret ${lineIndex === 0 && !typingDone ? "" : "hidden"}`}
          />
        </h3>

        {/* Main Heading responsive - typing */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
          <span className="whitespace-pre">{displayed[1]}</span>
          <span
            className={`typing-caret ${lineIndex === 1 && !typingDone ? "" : "hidden"}`}
          />
        </h1>

        {/* Phone Number responsive - typing */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 pt-8">
          <span className="whitespace-pre">{displayed[2]}</span>
          <span
            className={`typing-caret ${lineIndex === 2 && !typingDone ? "" : "hidden"}`}
          />
        </h1>

        {/* Order Online Button */}
        <button className="mt-8 px-4 py-2 rounded-full font-semibold cursor-pointer bg-red-600 text-white border-2 border-red-600 hover:bg-transparent hover:border-white hover:text-white transition-colors duration-400 ease-in-out focus:outline-none">
          ORDER ONLINE
        </button>
      </div>
    </section>
  );
}
