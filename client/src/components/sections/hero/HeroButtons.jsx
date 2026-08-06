import { motion } from "framer-motion";
import portfolioData from "../../../data/portfolioData";

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5">

      <motion.a
        href="#contact"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ y: 1, scale: 0.96 }}
        className="relative overflow-hidden px-8 py-3 rounded-full font-bold text-[#FAFAFF]
          bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
          shadow-[0_4px_0_#000000,0_8px_16px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]"
      >
        <motion.span
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
        />
        <span className="relative">Hire Me</span>
      </motion.a>

      <motion.a
        href={portfolioData.personal.resume}
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ y: 1, scale: 0.96 }}
        className="px-8 py-3 rounded-full font-bold text-[#1C1C1C] bg-white/40 backdrop-blur-xl
          shadow-[4px_4px_10px_rgba(28,28,28,0.1),-4px_-4px_10px_rgba(255,255,255,0.85)]"
      >
        Download CV
      </motion.a>

    </div>
  );
}

export default HeroButtons;