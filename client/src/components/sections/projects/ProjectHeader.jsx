import { motion } from "framer-motion";

function ProjectHeader({ title }) {
  return (
    <motion.h2

      layout

      className="text-2xl font-bold text-[#1C1C1C] group-hover:text-[#4A4A4A] duration-300"

    >
      {title}
    </motion.h2>
  );
}

export default ProjectHeader;