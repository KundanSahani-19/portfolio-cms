import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative flex items-center mb-16 ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Center Line Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20">

        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_35px_rgba(34,211,238,.5)]"
        >
          {item.type === "education" ? (
            <FaGraduationCap className="text-white text-xl" />
          ) : (
            <FaBriefcase className="text-white text-xl" />
          )}
        </motion.div>

      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
        className={`w-[44%] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 duration-300 ${
          isLeft ? "mr-auto" : "ml-auto"
        }`}
      >
        {/* Year */}
        <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-semibold mb-5">
          {item.year}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold">
          {item.title}
        </h2>

        {/* Company */}
        <p className="text-cyan-400 mt-2">
          {item.company}
        </p>

        {/* Description */}
        <p className="text-gray-400 leading-8 mt-5">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default TimelineItem;