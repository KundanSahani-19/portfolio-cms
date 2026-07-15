import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

function ProjectOverlay({ github, live }) {
  return (
    <motion.div

      initial={{ opacity:0 }}

      whileHover={{
        opacity:1
      }}

      className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-5"
    >

      <motion.a

        whileHover={{
          scale:1.2,
          rotate:8
        }}

        href={github}

        target="_blank"

        rel="noreferrer"

        className="w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center"
      >

        <FaGithub/>

      </motion.a>

      <motion.a

        whileHover={{
          scale:1.2,
          rotate:-8
        }}

        href={live}

        target="_blank"

        rel="noreferrer"

        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center"
      >

        <FaExternalLinkAlt/>

      </motion.a>

    </motion.div>
  );
}

export default ProjectOverlay;