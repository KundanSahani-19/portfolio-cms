import { motion } from "framer-motion";
import FloatingBadge from "./FloatingBadge";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      <FloatingBadge
        text="MERN"
        className="-top-5 left-0"
      />

      <FloatingBadge
        text="React"
        className="top-10 -right-6"
      />

      <FloatingBadge
        text="Node.js"
        className="bottom-5 left-2"
      />

      <div className="relative w-80 h-80 rounded-full border-4 border-cyan-400 bg-[#0f172a] flex items-center justify-center text-8xl shadow-[0_0_60px_rgba(34,211,238,0.4)]">
        👨‍💻
      </div>
    </motion.div>
  );
}

export default HeroImage;