import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[9999]"
    />
  );
}

export default ScrollProgress;