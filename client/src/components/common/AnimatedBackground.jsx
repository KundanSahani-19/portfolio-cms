import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -150, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -250, 120, 0],
          y: [0, 180, -120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, 120, -150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-[180px]"
      />

    </div>
  );
}

export default AnimatedBackground;