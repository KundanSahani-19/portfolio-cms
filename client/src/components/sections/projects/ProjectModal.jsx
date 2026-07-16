import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-[#0f172a] border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-cyan-400 hover:text-black duration-300 flex items-center justify-center"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <div className="h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">

              <div className="flex items-center justify-between flex-wrap gap-3">

                <span className="text-cyan-400">
                  {project.category}
                </span>

                <span className="text-gray-400">
                  {project.year}
                </span>

              </div>

              <h2 className="text-4xl font-bold mt-3">
                {project.title}
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-5 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;