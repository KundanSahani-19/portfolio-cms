import { motion } from "framer-motion";

const particles = Array.from({ length: 30 });

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-[#1C1C1C]/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;