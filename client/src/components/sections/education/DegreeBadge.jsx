import { motion } from "framer-motion";

function DegreeBadge({ year }) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.05,
      }}
      animate={{
        boxShadow: [
          "0 6px 16px rgba(28,28,28,0.3), inset 0 1px 1px rgba(255,255,255,0.5)",
          "0 8px 22px rgba(28,28,28,0.4), inset 0 1px 1px rgba(255,255,255,0.6)",
          "0 6px 16px rgba(28,28,28,0.3), inset 0 1px 1px rgba(255,255,255,0.5)",
        ],
      }}
      transition={{
        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        default: { type: "spring", stiffness: 280, damping: 18 },
      }}
      className="
      relative
      inline-flex
      items-center
      justify-center
      gap-2
      overflow-hidden

      px-5
      py-2.5

      rounded-full

      bg-gradient-to-b
      from-[#3A3A3A]
      to-[#1C1C1C]

      text-[#FAFAFF]
      font-semibold
      text-sm
      tracking-wide
    "
    >
      <motion.span
        animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="w-1.5 h-1.5 rounded-full bg-[#DADDD8] relative z-10"
      />

      <motion.div
        animate={{
          x: ["-150%", "180%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="
        absolute
        inset-0

        bg-gradient-to-r
        from-transparent
        via-white/25
        to-transparent

        -skew-x-12
      "
      />

      <span className="relative z-10">
        {year}
      </span>
    </motion.div>
  );
}

export default DegreeBadge;