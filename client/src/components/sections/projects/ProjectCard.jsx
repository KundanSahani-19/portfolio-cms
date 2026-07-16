import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl bg-[#0f172a] border border-white/10 hover:border-cyan-400 duration-300"
    >
      {/* Image */}

      <div className="relative overflow-hidden h-60">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />

        <div className="absolute top-5 left-5">

          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-cyan-400 text-black text-xs font-bold">
              Featured
            </span>
          )}

        </div>

      </div>

      {/* Body */}

      <div className="p-7">

        <div className="flex items-center justify-between mb-3">

          <span className="text-cyan-400 text-sm">
            {project.category}
          </span>

          <span className="text-gray-500 text-sm">
            {project.year}
          </span>

        </div>

        <h2 className="text-2xl font-bold mb-3">
          {project.title}
        </h2>

        <p className="text-gray-400 leading-7">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

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