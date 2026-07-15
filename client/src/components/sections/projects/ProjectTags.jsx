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

          className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm"

        >

          {item}

        </motion.span>

      ))}

    </div>

  );
}

export default ProjectTags;