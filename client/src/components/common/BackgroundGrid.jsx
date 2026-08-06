import { motion } from "framer-motion";

function BackgroundGrid() {
  return (
    <motion.div
      animate={{ opacity: [0.06, 0.12, 0.06] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="fixed inset-0 -z-20"
      style={{
        backgroundImage:
          "linear-gradient(#1c1c1c12 1px, transparent 1px),linear-gradient(90deg,#1c1c1c12 1px,transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(circle at center, black 0%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 0%, transparent 80%)",
      }}
    />
  );
}

export default BackgroundGrid;