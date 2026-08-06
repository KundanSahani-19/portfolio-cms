import { motion } from "framer-motion";

function DegreeBadge({ year }) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
      }}
      className="
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden

      px-5
      py-2.5

      rounded-full

      bg-gradient-to-b
      from-[#3B3B3B]
      to-[#1F1F1F]

      border
      border-white/10

      text-[#ECEBE4]
      font-semibold
      text-sm
      tracking-wide

      shadow-[0_8px_20px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.08)]
    "
    >
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
        via-white/20
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