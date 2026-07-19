import { motion } from "framer-motion";
import FloatingBadge from "./FloatingBadge";

function HeroImage({ floatingSkills = [], heroImage = "" }) {
  const badgePositions = [
    "-top-5 left-8",
    "top-16 -right-8",
    "bottom-8 left-0",
    "bottom-2 right-10",
    "top-24 left-0",
    "top-1/2 -right-12",
    "bottom-24 -left-10",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center"
    >
      {/* Outer Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Animated Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/20 border-dashed"
      />

      {/* Dynamic Floating Skills */}
      {floatingSkills.map((skill, index) => (
        <FloatingBadge
          key={`${skill}-${index}`}
          text={skill}
          className={badgePositions[index % badgePositions.length]}
        />
      ))}

      {/* Profile Circle */}
      <motion.div
        whileHover={{
          rotate: 5,
          scale: 1.05,
        }}
        className="relative w-80 h-80 rounded-full border-4 border-cyan-400 bg-[#0f172a] flex items-center justify-center text-8xl shadow-[0_0_80px_rgba(34,211,238,0.45)] overflow-hidden"
      >
        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full duration-1000" />

        {/* Dynamic Profile Image */}
        {heroImage ? (
          <img
            src={heroImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          "👨‍💻"
        )}
      </motion.div>
    </motion.div>
  );
}

export default HeroImage;