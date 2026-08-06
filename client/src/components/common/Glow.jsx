import { motion } from "framer-motion";

function Glow() {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-40 left-20 w-72 h-72 rounded-full bg-[#1C1C1C]/[0.08] blur-[120px] -z-10"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-20 right-10 w-80 h-80 rounded-full bg-[#DADDD8]/80 blur-[120px] -z-10"
      />
    </>
  );
}

export default Glow;