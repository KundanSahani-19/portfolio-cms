import { useEffect, useRef } from "react";

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

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />

      <div
        ref={ring}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-cyan-400 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}

export default Cursor;