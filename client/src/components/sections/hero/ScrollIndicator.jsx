import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-10 h-16 rounded-full border-2 border-cyan-400 flex justify-center items-start p-2">

        <FaAngleDown className="text-cyan-400 text-xl" />

      </div>
    </motion.div>
  );
}

export default ScrollIndicator;