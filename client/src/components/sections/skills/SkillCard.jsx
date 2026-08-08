import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function SkillCard({ skill }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-100, 100], [6, -6]);
  const rotateY = useTransform(springX, [-100, 100], [-6, 6]);

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
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >

      {/* Gradient border */}
      <div className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-br from-white to-[#DADDD8]/70">
        <div className="w-full h-full rounded-[22px] bg-[#FAFAFF]" />
      </div>

      {/* Ambient glow on hover */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[60px] bg-[#DADDD8]/50 rounded-full pointer-events-none"
      />

      {/* Card body */}
      <div className="relative overflow-hidden rounded-[22px] bg-white/40 backdrop-blur-2xl p-6 shadow-[0_10px_30px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] transition-shadow duration-500">

        {/* shine sweep */}
        <motion.div
          animate={{ x: ["-60%", "160%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
          className="absolute -inset-y-8 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 pointer-events-none"
        />

        {/* Icon */}

        {skill.icon ? (
          <motion.img
            whileHover={{ rotate: 8, scale: 1.1 }}
            src={skill.icon}
            alt={skill.name}
            className="w-16 h-16 object-contain mb-5 relative z-10"
          />
        ) : (
          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            className="w-16 h-16 rounded-2xl bg-[#ECEBE4] flex items-center justify-center text-3xl mb-5 relative z-10
              shadow-[4px_4px_10px_rgba(28,28,28,0.12),-4px_-4px_10px_rgba(255,255,255,0.9)]"
          >
            💻
          </motion.div>
        )}

        {/* Skill Name */}

        <h3 className="text-2xl font-bold text-[#1C1C1C] relative z-10">
          {skill.name}
        </h3>

        {/* Category */}

        <p className="text-[#4A4A4A] font-medium mt-2 relative z-10">
          {skill.category}
        </p>

        {/* Progress */}

        <div className="mt-6 relative z-10">

          <div className="flex justify-between mb-2 text-sm">

            <span className="text-[#6B6B6B]">
              Proficiency
            </span>

            <span className="text-[#1C1C1C] font-semibold">
              {skill.level}%
            </span>

          </div>

          <div className="h-2.5 bg-[#ECEBE4] rounded-full overflow-hidden shadow-[inset_2px_2px_5px_rgba(28,28,28,0.12),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              className="h-full rounded-full bg-gradient-to-r from-[#DADDD8] to-[#1C1C1C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
            />

          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;