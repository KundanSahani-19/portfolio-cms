import { motion } from "framer-motion";

function OrbitRing({ size, duration, reverse = false }) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="absolute rounded-full border border-[#1C1C1C]/15"
      style={{ width: size, height: size }}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1C1C1C] shadow-[0_0_16px_rgba(28,28,28,0.4)]" />
    </motion.div>
  );
}

export default OrbitRing;