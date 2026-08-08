import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] bg-[#1C1C1C]/60 backdrop-blur-xl flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: .9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 60,
              scale: .9,
            }}
            transition={{
              duration: .45,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
            relative
            overflow-hidden
            w-full
            max-w-6xl
            rounded-[34px]
            bg-white/40
            backdrop-blur-2xl
            shadow-[0_40px_120px_rgba(28,28,28,.25),inset_0_1px_0_rgba(255,255,255,.85)]
            "
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="
              absolute
              top-6
              right-6
              z-50

              w-12
              h-12

              rounded-full

              bg-white/50

              backdrop-blur-xl

              flex
              items-center
              justify-center

              text-[#1C1C1C]

              shadow-[3px_3px_10px_rgba(28,28,28,.12),-3px_-3px_10px_rgba(255,255,255,.9)]

              hover:bg-[#1C1C1C]
              hover:text-[#FAFAFF]

              duration-300
              "
            >
              <FaTimes />
            </button>

            {/* Hero Image */}

            <div className="relative h-[380px] overflow-hidden">

              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}

              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t

                from-[#FAFAFF]

                via-[#FAFAFF]/40

                to-transparent
                "
              />

              {/* Floating Badge */}

              <motion.div

                animate={{
                  y:[0,-8,0]
                }}

                transition={{
                  duration:3,
                  repeat:Infinity
                }}

                className="
                absolute
                left-8
                top-8

                px-5
                py-2

                rounded-full

                bg-gradient-to-b
                from-[#3A3A3A]
                to-[#1C1C1C]

                text-[#FAFAFF]

                font-bold

                shadow-[0_8px_20px_rgba(28,28,28,.35),inset_0_1px_1px_rgba(255,255,255,.15)]
                "
              >

                {project.category}

              </motion.div>

            </div>

            {/* Content */}

            <div className="p-10">

              {/* Top */}

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div>

                  <h2
                    className="
                    text-5xl
                    font-black
                    text-[#1C1C1C]
                    "
                  >
                    {project.title}
                  </h2>

                  <div className="flex items-center gap-5 mt-4 text-[#6B6B6B]">

                    <span className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {project.year}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaCode />
                      {project.category}
                    </span>

                  </div>

                </div>

              </div>

              {/* Description */}

              <p
                className="
                mt-8

                text-lg

                leading-9

                text-[#4A4A4A]
                "
              >
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="mt-10">

                <h3
                  className="
                  text-xl
                  font-bold
                  text-[#1C1C1C]
                  mb-5
                  "
                >
                  Technology Stack
                </h3>

                <div className="flex flex-wrap gap-3">

                  {project.tech.map((item, index) => (

                    <motion.span

                      key={index}

                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}

                      className="
                      px-5
                      py-3

                      rounded-full

                      bg-[#ECEBE4]

                      text-[#1C1C1C]

                      font-medium

                      shadow-[3px_3px_8px_rgba(28,28,28,.1),-3px_-3px_8px_rgba(255,255,255,.9)]
                      "

                    >

                      {item}

                    </motion.span>

                  ))}

                </div>

              </div>

              {/* Action Buttons */}

              <div className="flex flex-wrap gap-5 mt-12">

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ y: 1, scale: 0.97 }}
                  className="
                    flex items-center gap-3
                    px-7 py-4
                    rounded-2xl
                    bg-gradient-to-b
                    from-[#3A3A3A]
                    to-[#1C1C1C]
                    text-[#FAFAFF]
                    font-bold
                    shadow-[0_5px_0_#000000,0_10px_20px_-4px_rgba(28,28,28,.4),inset_0_1px_1px_rgba(255,255,255,.15)]
                    duration-300
                  "
                >
                  <FaGithub />
                  View Source
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ y: 1, scale: 0.97 }}
                  className="
                    flex items-center gap-3
                    px-7 py-4
                    rounded-2xl
                    bg-white/50
                    backdrop-blur-xl
                    text-[#1C1C1C]
                    font-bold
                    shadow-[3px_3px_10px_rgba(28,28,28,.1),-3px_-3px_10px_rgba(255,255,255,.9)]
                    hover:bg-white/70
                    duration-300
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </motion.a>

              </div>

            </div>
            {/* end Content (p-10) */}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}

export default ProjectModal;