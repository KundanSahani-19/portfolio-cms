import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, -50, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 60, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[150px]"
      />
    </>
  );
}

export default HeroBackground;