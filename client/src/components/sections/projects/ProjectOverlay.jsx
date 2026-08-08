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

      className="absolute inset-0 bg-[#1C1C1C]/60 backdrop-blur-sm flex items-center justify-center gap-5"
    >

      <motion.a

        whileHover={{
          scale:1.2,
          rotate:8
        }}

        href={github}

        target="_blank"

        rel="noreferrer"

        className="w-14 h-14 rounded-full bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C] text-[#FAFAFF] flex items-center justify-center shadow-[0_8px_20px_rgba(28,28,28,.4),inset_0_1px_1px_rgba(255,255,255,.15)]"
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

        className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-xl text-[#1C1C1C] flex items-center justify-center shadow-[3px_3px_10px_rgba(28,28,28,.15),-3px_-3px_10px_rgba(255,255,255,.9)]"
      >

        <FaExternalLinkAlt/>

      </motion.a>

    </motion.div>
  );
}

export default ProjectOverlay;