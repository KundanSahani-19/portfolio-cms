import { motion } from "framer-motion";

function SectionTitle({
  subtitle,
  title,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-center mb-12"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-block text-cyan-400 uppercase tracking-[6px] font-semibold mb-4"
      >
        {subtitle}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl md:text-6xl font-black leading-tight"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

export default SectionTitle;