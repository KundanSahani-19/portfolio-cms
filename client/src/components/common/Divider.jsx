import { motion } from "framer-motion";

function Divider() {
  return (
    <div className="relative max-w-6xl mx-auto h-px overflow-hidden">
      <div className="h-full bg-gradient-to-r from-transparent via-[#1C1C1C]/25 to-transparent" />
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[2px]"
      />
    </div>
  );
}

export default Divider;