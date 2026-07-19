import { motion } from "framer-motion";

function OrbitRing({
  size,
  duration,
  reverse = false,
}) {
  return (
    <motion.div
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      className="absolute rounded-full border border-cyan-400/20"
      style={{
        width: size,
        height: size,
      }}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
    </motion.div>
  );
}

export default OrbitRing;