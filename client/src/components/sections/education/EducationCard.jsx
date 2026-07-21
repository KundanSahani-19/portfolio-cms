import { motion } from "framer-motion";
import DegreeBadge from "./DegreeBadge";

function EducationCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
    >
      {/* Year */}
      <DegreeBadge
        year={`${item.startYear} - ${item.endYear}`}
      />

      {/* Degree */}
      <h3 className="text-2xl font-bold mt-5">
        {item.degree}
      </h3>

      {/* Institution */}
      <p className="text-cyan-400 mt-2">
        {item.institution}
      </p>

      {/* Location */}
      {item.location && (
        <p className="text-gray-400 mt-3">
          📍 {item.location}
        </p>
      )}

      {/* Grade */}
      {item.grade && (
        <p className="text-cyan-400 mt-4 font-semibold">
          🎓 {item.grade}
        </p>
      )}

      {/* Description */}
      {item.description && (
        <p className="text-gray-400 mt-4 leading-7">
          {item.description}
        </p>
      )}

      {/* Institution Link */}
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