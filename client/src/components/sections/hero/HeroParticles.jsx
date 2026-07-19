import { motion } from "framer-motion";

const particles = Array.from({ length: 30 });

function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, i) => (

        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/30 blur-sm"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      ))}

    </div>
  );
}

export default HeroParticles;