import { motion } from "framer-motion";
import DegreeBadge from "./DegreeBadge";

function EducationCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
    >
      <DegreeBadge year={item.year} />

      <h3 className="text-2xl font-bold mt-5">
        {item.degree}
      </h3>

      <p className="text-gray-400 mt-2">
        {item.institute}
      </p>

      <p className="text-cyan-400 mt-4 font-semibold">
        {item.score}
      </p>
    </motion.div>
  );
}

export default EducationCard;