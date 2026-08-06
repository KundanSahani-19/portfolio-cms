import { useRef } from "react";
import { motion } from "framer-motion";

function MagneticButton({ children, className = "" }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default MagneticButton;