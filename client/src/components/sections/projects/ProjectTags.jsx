import { motion } from "framer-motion";

function ProjectTags({ tech }) {
  return (

    <div className="flex flex-wrap gap-3 mt-6">

      {tech.map((item,index)=>(

        <motion.span

          key={index}

          whileHover={{
            scale:1.1
          }}

          className="px-4 py-2 rounded-full bg-[#ECEBE4] text-[#1C1C1C] text-sm font-medium shadow-[2px_2px_6px_rgba(28,28,28,.08),-2px_-2px_6px_rgba(255,255,255,.9)]"

        >

          {item}

        </motion.span>

      ))}

    </div>

  );
}

export default ProjectTags;