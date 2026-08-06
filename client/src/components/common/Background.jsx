import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#FAFAFF] to-[#EEF0F2]">

      <motion.div
        animate={{ x: [0, 150, 0], y: [0, 100, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-[#1C1C1C]/[0.07] blur-[150px] rounded-full top-10 left-10"
      />

      <motion.div
        animate={{ x: [0, -150, 0], y: [0, -120, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-[#DADDD8]/70 blur-[150px] rounded-full bottom-0 right-0"
      />

      {/* liquid glass sheen layer */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 backdrop-blur-[2px] bg-white/10"
      />
    </div>
  );
}

export default Background;