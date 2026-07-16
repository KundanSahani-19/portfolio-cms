import { motion } from "framer-motion";

function ProjectHeader({ title }) {
  return (
    <motion.h2

      layout

      className="text-2xl font-bold group-hover:text-cyan-400 duration-300"

    >
      {title}
    </motion.h2>
  );
}

export default ProjectHeader;