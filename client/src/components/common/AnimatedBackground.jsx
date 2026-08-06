import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#FAFAFF] via-[#EEF0F2] to-[#ECEBE4]">

      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#1C1C1C]/[0.08] blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -250, 120, 0],
          y: [0, 180, -120, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#DADDD8]/60 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, 120, -150, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-white/70 blur-[180px]"
      />

      {/* moving sheen sweep across the whole page */}
      <motion.div
        animate={{ x: ["-30%", "130%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        className="absolute top-0 left-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </div>
  );
}

export default AnimatedBackground;