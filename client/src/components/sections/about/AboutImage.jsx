import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex items-center justify-center h-[650px]"
    >
      {/* Background Glow */}

      <div className="absolute w-[520px] h-[520px] rounded-full bg-[#DADDD8] blur-[180px] opacity-80 blur-[140px]" />

      <div className="absolute w-[380px] h-[380px] rounded-full border border-[#DADDD8] animate-pulse" />

      {/* Orbit Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[450px] h-[450px] rounded-full border border-[#DADDD8]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_18px_white]" />
      </motion.div>

      {/* Glass Card */}

      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: -2,
        }}
        className="relative w-[340px] h-[440px] rounded-[40px] bg-[#FAFAFF]/80 backdrop-blur-3xl border border-[#DADDD8] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,.35)]"
      >
        {/* Reflection */}

        <motion.div
          animate={{
            x: ["-150%", "180%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute top-0 left-0 w-24 h-full rotate-12 bg-gradient-to-r from-transparent via-[#EEF0F2] to-transparent"
        />

        {/* Emoji */}

        <div className="absolute inset-0 flex items-center justify-center text-[130px]">

          👨‍💻

        </div>

        {/* Bottom Blur */}

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#EEF0F2] to-transparent" />
      </motion.div>

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-6 top-16 text-5xl text-[#1C1C1C]"
      >
        ⚛️
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-10 top-32 text-4xl text-[#1C1C1C]"
      >
        🚀
      </motion.div>

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-5 text-5xl text-[#1C1C1C]"
      >
        💻
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-28 left-5 text-4xl text-[#6B7280]"
      >
        ☁️
      </motion.div>

    </motion.div>
  );
}