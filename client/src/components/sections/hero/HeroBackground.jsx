import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

      <motion.div
        animate={{ x: [0, 120, -50, 0], y: [0, -60, 80, 0], rotate: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#DADDD8]/60 blur-[120px]"
      />

      <motion.div
        animate={{ x: [0, -100, 80, 0], y: [0, 60, -80, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-[#1C1C1C]/[0.07] blur-[130px]"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-white/50 blur-[150px]"
      />

      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-[#DADDD8]/25 blur-[90px]"
      />

    </div>
  );
}

export default HeroBackground;