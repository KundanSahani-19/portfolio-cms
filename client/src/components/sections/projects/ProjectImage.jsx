import { motion } from "framer-motion";

function ProjectImage({ image, title }) {
  return (
    <div className="relative h-64 overflow-hidden rounded-t-[22px]">

      <motion.img
        src={image}
        alt={title}
        whileHover={{
          scale: 1.15,
        }}
        transition={{
          duration: .5
        }}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/10 to-transparent" />

    </div>
  );
}

export default ProjectImage;