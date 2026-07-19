import { useEffect, useRef } from "react";

function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[450px] h-[450px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.08) 40%, transparent 75%)",
        filter: "blur(80px)",
      }}
    />
  );
}

export default MouseGlow;