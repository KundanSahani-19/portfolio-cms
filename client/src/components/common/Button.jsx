import { motion } from "framer-motion";
import portfolioData from "../../data/portfolioData";

function Button({ children, variant = "primary" }) {
  const base =
    "relative px-7 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden isolate";

  const styles = {
    primary:
      "text-[#FAFAFF] bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C] " +
      "shadow-[0_5px_0_#000000,0_10px_20px_-4px_rgba(28,28,28,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)]",

    outline:
      "text-[#1C1C1C] bg-white/30 backdrop-blur-2xl border border-white/60 " +
      "shadow-[6px_6px_14px_rgba(28,28,28,0.1),-6px_-6px_14px_rgba(255,255,255,0.8),inset_0_1px_0_rgba(255,255,255,0.6)]",
  };

  const isResume = children === "Download Resume";

  const content = (
    <>
      <motion.span
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
        initial={{ x: "-150%" }}
        animate={{ x: "150%" }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  const MotionTag = isResume ? motion.a : motion.button;

  return (
    <MotionTag
      href={isResume ? portfolioData.personal.resume : undefined}
      download={isResume || undefined}
      className={`${base} ${styles[variant]} inline-flex items-center justify-center`}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ y: 2, scale: 0.96 }}
      animate={{ y: [0, -3, 0] }}
      transition={{
        y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        default: { type: "spring", stiffness: 300, damping: 15 },
      }}
    >
      {content}
    </MotionTag>
  );
}

export default Button;