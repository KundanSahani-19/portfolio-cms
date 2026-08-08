import { motion } from "framer-motion";
import certificateData from "./certificateData";
import CertificateCard from "./CertificateCard";

function CertificateGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {certificateData.map((certificate) => (
        <motion.div
          key={certificate.title}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
        >
          <CertificateCard certificate={certificate} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default CertificateGrid;