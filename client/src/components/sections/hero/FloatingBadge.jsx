import { motion } from "framer-motion";

function FloatingBadge({ text, className }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute bg-white/10 backdrop-blur-lg border border-cyan-400 px-4 py-2 rounded-full text-sm ${className}`}
    >
      {text}
    </motion.div>
  );
}

export default FloatingBadge;