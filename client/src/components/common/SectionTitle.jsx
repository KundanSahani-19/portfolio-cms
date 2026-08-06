import { motion } from "framer-motion";

function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-12"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.2em", scale: 0.8 }}
        whileInView={{ opacity: 1, letterSpacing: "0.4em", scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        className="inline-block px-4 py-1.5 rounded-full text-[#1C1C1C] uppercase tracking-[6px] font-semibold mb-4
          bg-white/40 backdrop-blur-2xl border border-white/70 shadow-[4px_4px_10px_rgba(28,28,28,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]"
      >
        {subtitle}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        className="text-5xl md:text-6xl font-black leading-tight bg-gradient-to-b from-[#1C1C1C] to-[#6B6B6B] bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

export default SectionTitle;