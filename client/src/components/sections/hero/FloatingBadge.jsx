import { useRef } from "react";
import { motion } from "framer-motion";

function FloatingBadge({ text, className }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className={`absolute ${className}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="px-5 py-2 rounded-full bg-white/40 backdrop-blur-2xl text-[#1C1C1C] font-semibold text-sm cursor-default
          shadow-[4px_4px_10px_rgba(28,28,28,0.12),-4px_-4px_10px_rgba(255,255,255,0.85),inset_0_1px_0_rgba(255,255,255,0.6)]
          hover:shadow-[0_0_16px_rgba(28,28,28,0.2)] transition-shadow duration-300"
        style={{ transition: "transform 0.15s ease-out" }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

export default FloatingBadge;