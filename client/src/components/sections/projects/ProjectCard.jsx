import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaJava,
  FaPython,
  FaReact,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

function ProjectCard({ project, onClick }) {
  const cardRef = useRef(null);

  const getProjectIcon = (category) => {
    switch (category) {
      case "React":
        return <FaReact />;

      case "Spring Boot":
        return <FaJava />;

      case "Java":
        return <FaJava />;

      case "Machine Learning":
        return <FaRobot />;

      case "Flutter":
        return <FaMobileAlt />;

      case "Python":
        return <FaPython />;

      default:
        return <FaLaptopCode />;
    }
  };

  const handleMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const reset = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-[#0f172a] border border-white/10 hover:border-cyan-400 duration-300"
    >
      {/* Thumbnail */}

      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 flex flex-col items-center justify-center">

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000" />

        {/* Icon */}
        <div className="text-7xl text-white mb-5 z-10">
          {getProjectIcon(project.category)}
        </div>

        {/* Project Name */}
        <h3 className="text-2xl font-bold text-white text-center px-5 z-10">
          {project.title}
        </h3>

        {/* Category */}
        <p className="text-cyan-200 mt-2 z-10">
          {project.category}
        </p>

        {/* Featured Badge */}
        {project.featured && (
          <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-cyan-400 text-black text-xs font-bold">
            Featured
          </span>
        )}
      </div>

      {/* Body */}

      <div className="p-7">

        <div className="flex justify-between mb-3">

          <span className="text-cyan-400">
            {project.category}
          </span>

          <span className="text-gray-500">
            {project.year}
          </span>

        </div>

        <h2 className="text-2xl font-bold mb-3">
          {project.title}
        </h2>

        <p className="text-gray-400 leading-7">
          {project.description}
        </p>

        {/* Tech Stack */}

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

        <div
          className="flex gap-4 mt-8"
          onClick={(e) => e.stopPropagation()}
        >

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