import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full top-10 left-10"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full bottom-0 right-0"
      />

    </div>
  );
}

export default Background;