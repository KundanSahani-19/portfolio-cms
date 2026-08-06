import { motion } from "framer-motion";

function VerifyButton({ link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ y: 1, scale: 0.96 }}
      className="mt-6 relative inline-flex items-center justify-center px-5 py-3 rounded-xl overflow-hidden
        font-bold text-[#FAFAFF]
        bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
        shadow-[0_4px_0_#000000,0_8px_16px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]"
    >
      <motion.span
        initial={{ x: "-150%" }}
        animate={{ x: "150%" }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
      />
      <span className="relative">Verify Certificate</span>
    </motion.a>
  );
}

export default VerifyButton;