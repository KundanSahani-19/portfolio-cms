import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import VerifyButton from "./VerifyButton";

function CertificateCard({ certificate }) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70"
    >

      {/* pulsing ambient glow on hover */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl bg-[#DADDD8]/40 pointer-events-none"
      />

      <div className="rounded-[22px] overflow-hidden bg-white/35 backdrop-blur-2xl shadow-[0_12px_32px_rgba(28,28,28,0.1),inset_0_1px_0_rgba(255,255,255,0.85)] relative">

        <div className="h-56 relative overflow-hidden bg-gradient-to-br from-[#3A3A3A] to-[#1C1C1C] flex items-center justify-center">

          <motion.div
            animate={{ x: ["-60%", "160%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            className="absolute -inset-y-10 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-12"
          />

          {/* rotating halo ring behind badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 rounded-full border border-dashed border-white/20"
          />

          <motion.h2
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: [0, -4, 4, 0] }}
            className="text-5xl font-black text-[#FAFAFF] relative z-10"
          >
            {certificate.badge}
          </motion.h2>
        </div>

        <div className="p-7">

          <motion.h3
            whileHover={{ x: 4 }}
            className="text-2xl font-bold text-[#1C1C1C]"
          >
            {certificate.title}
          </motion.h3>

          <p className="text-[#6B6B6B] mt-2">
            {certificate.issuer}
          </p>

          <p className="text-[#4A4A4A] mt-1 font-medium">
            {certificate.year}
          </p>

          <VerifyButton link={certificate.verify} />

        </div>
      </div>
    </motion.div>
  );
}

export default CertificateCard;