import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FloatingBadge from "./FloatingBadge";
import OrbitRing from "./OrbitRing";

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

  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-100, 100], [12, -12]);
  const rotateY = useTransform(springX, [-100, 100], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center"
      style={{ perspective: 1000 }}
    >
      {/* Outer Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] rounded-full bg-[#DADDD8]/50 blur-[120px] pointer-events-none -z-10"
      />

      {/* Pulsing concentric rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 rounded-full border border-[#1C1C1C]/12 pointer-events-none"
        />
      ))}

      {/* Orbit rings with traveling dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <OrbitRing size={360} duration={18} />
        <OrbitRing size={400} duration={26} reverse />
      </div>

      {/* Dynamic Floating Skills */}
      {floatingSkills.map((skill, index) => (
        <FloatingBadge
          key={`${skill}-${index}`}
          text={skill}
          className={badgePositions[index % badgePositions.length]}
        />
      ))}

      {/* Profile Circle with 3D tilt */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -12, 0] }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        whileHover={{ scale: 1.05 }}
        className="relative z-10 w-80 h-80 rounded-full p-1.5 bg-gradient-to-br from-white via-[#DADDD8] to-[#1C1C1C]/30
          shadow-[0_25px_60px_rgba(28,28,28,0.2)]"
      >
        <div className="relative w-full h-full rounded-full bg-white/35 backdrop-blur-2xl flex items-center justify-center text-8xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">

          {/* Shine */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
          />

          {/* Dynamic Profile Image */}
          {heroImage ? (
            <img
              src={heroImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          ) : (
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              👨‍💻
            </motion.span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroImage;