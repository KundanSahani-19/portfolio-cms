import { motion } from "framer-motion";

function EducationCard({ item }) {
  if (!item) return null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
    >
      <div className="inline-flex px-4 py-2 rounded-full bg-cyan-400 text-black font-bold">
        {item.startYear} - {item.endYear}
      </div>

      <h3 className="text-2xl font-bold mt-5">
        {item.degree}
      </h3>

      <p className="text-gray-400 mt-2">
        {item.institution}
      </p>

      {item.location && (
        <p className="text-gray-400 mt-3">
          📍 {item.location}
        </p>
      )}

      {item.grade && (
        <p className="text-cyan-400 mt-4 font-semibold">
          🎓 CGPA: {item.grade}
        </p>
      )}

      {item.description && (
        <p className="text-gray-400 mt-4 leading-7">
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