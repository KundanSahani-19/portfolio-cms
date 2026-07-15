import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl overflow-hidden bg-[#111827] border border-white/10 hover:border-cyan-400 duration-300"
    >
      <div className="h-56 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-7xl">
        🚀
      </div>

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-3">
          {project.title}
        </h2>

        <p className="text-gray-400 leading-7">
          {project.description}
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black duration-300"
          >
            <FaExternalLinkAlt />
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;