import { motion } from "framer-motion";
import VerifyButton from "./VerifyButton";

function CertificateCard({ certificate }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
    >
      <div className="h-56 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center">

        <h2 className="text-5xl font-black">
          {certificate.badge}
        </h2>

      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold">
          {certificate.title}
        </h3>

        <p className="text-gray-400 mt-2">
          {certificate.issuer}
        </p>

        <p className="text-cyan-400 mt-1">
          {certificate.year}
        </p>

        <VerifyButton
          link={certificate.verify}
        />

      </div>
    </motion.div>
  );
}

export default CertificateCard;