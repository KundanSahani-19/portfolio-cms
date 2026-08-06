import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-10 h-16 rounded-full bg-white/40 backdrop-blur-xl flex justify-center items-start p-2
        shadow-[4px_4px_10px_rgba(28,28,28,0.1),-4px_-4px_10px_rgba(255,255,255,0.85)]">
        <FaAngleDown className="text-[#1C1C1C] text-xl" />
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;