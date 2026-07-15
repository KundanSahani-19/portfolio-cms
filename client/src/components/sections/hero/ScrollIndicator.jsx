import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="flex justify-center mt-16"
    >
      <div className="w-7 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;