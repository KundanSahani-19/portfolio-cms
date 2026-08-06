import { motion } from "framer-motion";
import VerifyButton from "./VerifyButton";

function CertificateCard({ certificate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70"
    >
      <div className="rounded-[22px] overflow-hidden bg-white/35 backdrop-blur-2xl shadow-[0_12px_32px_rgba(28,28,28,0.1),inset_0_1px_0_rgba(255,255,255,0.85)]">

        <div className="h-56 relative overflow-hidden bg-gradient-to-br from-[#3A3A3A] to-[#1C1C1C] flex items-center justify-center">

          <motion.div
            animate={{ x: ["-60%", "160%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            className="absolute -inset-y-10 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-12"
          />

          <h2 className="text-5xl font-black text-[#FAFAFF] relative z-10">
            {certificate.badge}
          </h2>
        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold text-[#1C1C1C]">
            {certificate.title}
          </h3>

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