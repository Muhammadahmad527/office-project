import { useEffect, useState } from "react";

export default function ViewportBadge() {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-1 rounded z-[9999] shadow-lg">
      {w}px
    </div>
  );
}
