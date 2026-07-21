import { motion } from "framer-motion";

function EducationCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
    >
      <h3 className="text-2xl font-bold text-white">
        {item.degree}
      </h3>

      <p className="text-cyan-400 text-lg mt-3">
        {item.institution}
      </p>

      {item.location && (
        <p className="text-gray-400 mt-3">
          📍 {item.location}
        </p>
      )}

      <p className="text-sm text-gray-500 mt-3">
        {item.startYear} - {item.endYear}
      </p>

      {item.grade && (
        <p className="text-cyan-400 font-semibold mt-4">
          🎓 {item.grade}
        </p>
      )}

      {item.description && (
        <p className="text-gray-400 leading-7 mt-5">
          {item.description}
        </p>
      )}

      {item.institutionUrl && (
        <a
          href={item.institutionUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 text-cyan-400 hover:underline"
        >
          Visit Institution →
        </a>
      )}
    </motion.div>
  );
}

export default EducationCard;