import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#FAFAFF] to-[#EEF0F2]">

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center px-14 py-12 rounded-[28px] bg-white/30 backdrop-blur-3xl border border-white/70 shadow-[0_20px_60px_rgba(28,28,28,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]"
      >

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-20 h-20 rounded-full border-4 border-[#1C1C1C]/70 border-t-transparent shadow-[0_0_25px_rgba(28,28,28,0.15)]"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="mt-8 text-3xl font-black bg-gradient-to-r from-[#1C1C1C] via-[#6B6B6B] to-[#1C1C1C] bg-clip-text text-transparent"
        >
          Kundan Kumar Sahani
        </motion.h1>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-3 text-[#6B6B6B]"
        >
          Loading Portfolio...
        </motion.p>

      </motion.div>

    </div>
  );
}

export default Loader;