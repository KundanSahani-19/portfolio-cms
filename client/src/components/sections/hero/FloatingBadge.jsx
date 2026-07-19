import { motion } from "framer-motion";

function FloatingBadge({ text, className }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute ${className}`}
    >
      <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-cyan-400/40 text-cyan-300 font-semibold shadow-lg">
        {text}
      </div>
    </motion.div>
  );
}

export default FloatingBadge;