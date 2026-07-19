import { motion } from "framer-motion";

const particles = Array.from({ length: 30 });

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -100],
            opacity: [0.2, 1, 0.2],
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