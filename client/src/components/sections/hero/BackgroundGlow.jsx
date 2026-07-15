import { motion } from "framer-motion";

function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl top-20 left-10"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl bottom-10 right-10"
      />
    </>
  );
}

export default BackgroundGlow;