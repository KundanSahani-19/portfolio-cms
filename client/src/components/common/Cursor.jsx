import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 bg-[#1C1C1C] shadow-[0_0_10px_rgba(28,28,28,0.6)]"
      />

      <motion.div
        ref={ring}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border border-white/70 backdrop-blur-md bg-white/20 shadow-[0_0_16px_rgba(28,28,28,0.12)]"
      />
    </>
  );
}

export default Cursor;