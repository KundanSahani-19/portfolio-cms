import { motion } from "framer-motion";

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
    >
      {/* Icon */}

      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-16 h-16 object-contain mb-5"
        />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-cyan-400/10 flex items-center justify-center text-3xl mb-5">
          💻
        </div>
      )}

      {/* Skill Name */}

      <h3 className="text-2xl font-bold">
        {skill.name}
      </h3>

      {/* Category */}

      <p className="text-cyan-400 mt-2">
        {skill.category}
      </p>

      {/* Progress */}

      <div className="mt-6">

        <div className="flex justify-between mb-2 text-sm">

          <span className="text-gray-400">
            Proficiency
          </span>

          <span className="text-cyan-400">
            {skill.level}%
          </span>

        </div>

        <div className="h-2 bg-white/10 rounded-full overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width: `${skill.level}%`,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="h-full bg-cyan-400 rounded-full"
          />

        </div>

      </div>
    </motion.div>
  );
}

export default SkillCard;