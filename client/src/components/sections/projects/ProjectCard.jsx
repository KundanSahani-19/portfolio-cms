import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111827] hover:border-cyan-400 duration-300"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-7xl group-hover:scale-110 duration-500">
          🚀
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black duration-300"
          >
            <FaExternalLinkAlt />
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;