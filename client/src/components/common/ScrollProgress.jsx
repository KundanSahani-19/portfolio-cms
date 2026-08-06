import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-white/40 backdrop-blur-sm z-[9999]">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-full origin-left bg-gradient-to-r from-[#DADDD8] via-[#6B6B6B] to-[#1C1C1C] shadow-[0_0_12px_rgba(28,28,28,0.4)]"
      />
    </div>
  );
}

export default ScrollProgress;