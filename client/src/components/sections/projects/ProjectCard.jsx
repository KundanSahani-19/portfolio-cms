import { useRef } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaJava,
  FaPython,
  FaReact,
  FaRobot,
  FaMobileAlt,
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

    const rotateY = ((x / rect.width) - 0.5) * 10;

    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
      scale(1.015)
    `;

  };

  const reset = () => {

    if (!cardRef.current) return;

    cardRef.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      scale(1)
    `;

  };

  return (

    <motion.div

      ref={cardRef}

      onMouseMove={handleMove}

      onMouseLeave={reset}

      onClick={onClick}

      initial={{ opacity: 0, y: 30 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, amount: 0.3 }}

      whileHover={{
        y:-6
      }}

      transition={{
        duration:.35
      }}

      className="
      group
      relative
      cursor-pointer
      duration-500
      max-w-sm
      mx-auto
      "

    >
      {/* Premium Glow */}

      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="
        absolute
        -inset-4
        rounded-[32px]
        opacity-0
        group-hover:opacity-100
        duration-700
        blur-2xl
        bg-gradient-to-r
        from-[#DADDD8]/40
        via-white/40
        to-[#ECEBE4]/40
        "
      />

      {/* Card */}

      <div
        className="
        relative
        overflow-hidden
        rounded-[24px]

        bg-white/40
        backdrop-blur-2xl

        shadow-[0_12px_32px_rgba(28,28,28,.1)]

        duration-500

        group-hover:shadow-[0_16px_40px_rgba(28,28,28,.16)]
        "
      >

        {/* Animated Background */}

        <motion.div

          animate={{
            rotate:360
          }}

          transition={{
            duration:26,
            repeat:Infinity,
            ease:"linear"
          }}

          className="
          absolute
          -top-24
          -right-24
          h-56
          w-56
          rounded-full

          bg-gradient-to-br

          from-[#DADDD8]/50
          to-white/30

          blur-2xl
          "

        />

        <motion.div

          animate={{
            rotate:-360
          }}

          transition={{
            duration:30,
            repeat:Infinity,
            ease:"linear"
          }}

          className="
          absolute
          -bottom-28
          -left-28
          h-64
          w-64
          rounded-full

          bg-gradient-to-br

          from-[#ECEBE4]/50
          to-[#DADDD8]/30

          blur-2xl
          "

        />

        {/* Image */}

        <div
          className="
          relative
          h-44
          overflow-hidden

          bg-gradient-to-br

          from-[#3A3A3A]
          via-[#1C1C1C]
          to-[#0d0d0d]

          flex
          flex-col
          items-center
          justify-center
          "
        >

          {/* Shine */}

          <motion.div

            animate={{
              x:["-200%","220%"]
            }}

            transition={{
              duration:3.5,
              repeat:Infinity,
              ease:"easeInOut"
            }}

            className="
            absolute
            inset-0

            bg-gradient-to-r

            from-transparent
            via-white/15
            to-transparent

            -skew-x-12
            "

          />

          {/* Floating Icon */}

          <motion.div

            animate={{
              y:[0,-8,0],
              rotate:[0,5,-5,0],
              scale: [1, 1.08, 1],
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
            text-5xl
            text-[#FAFAFF]
            drop-shadow-2xl
            z-10
            "

          >

            {getProjectIcon(project.category)}

          </motion.div>

          {/* Featured */}

          {project.featured && (

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="
              absolute
              top-3
              left-3

              px-3
              py-1.5

              rounded-full

              bg-gradient-to-b
              from-[#FBBF24]
              to-[#D97706]

              text-[#1C1C1C]

              font-bold

              text-[11px]

              shadow-[0_6px_14px_rgba(217,119,6,.4),inset_0_1px_1px_rgba(255,255,255,.4)]
              "
            >

              ⭐ Featured

            </motion.div>

          )}

          {/* Category */}

          <motion.div
            whileHover={{ scale: 1.06 }}
            className="
            absolute
            bottom-3

            px-4
            py-1.5

            rounded-full

            bg-white/20

            backdrop-blur-lg

            text-[#FAFAFF]

            text-sm

            font-semibold
            "
          >

            {project.category}

          </motion.div>

        </div>

        {/* Body */}

        <div className="relative p-5">

          {/* Top */}

          <div className="flex items-center justify-between">

            <span
              className="
              text-[#4A4A4A]
              text-sm
              font-medium
              tracking-wide
              "
            >
              {project.year}
            </span>

            <motion.div

              whileHover={{
                rotate:360
              }}

              transition={{
                duration:.6
              }}

              className="
              w-9
              h-9

              rounded-xl

              bg-[#ECEBE4]

              flex
              items-center
              justify-center

              text-[#1C1C1C]
              text-sm

              shadow-[3px_3px_8px_rgba(28,28,28,.1),-3px_-3px_8px_rgba(255,255,255,.9)]
              "

            >

              {getProjectIcon(project.category)}

            </motion.div>

          </div>

          {/* Title */}

          <motion.h2

            whileHover={{
              x:4
            }}

            className="
            mt-3

            text-xl

            font-black

            leading-tight

            text-[#1C1C1C]

            duration-300
            "

          >

            {project.title}

          </motion.h2>

          {/* Description */}

          <p
            className="
            mt-2.5

            text-[#6B6B6B]

            text-sm

            leading-6

            min-h-[65px]
            "
          >

            {project.description}

          </p>

          {/* Tech Stack */}

          <div
            className="
            flex
            flex-wrap
            gap-2
            mt-4
            "
          >

            {project.tech.map((tech,index)=>(

              <motion.span

                key={index}

                initial={{ opacity: 0, scale: 0.8 }}

                whileInView={{ opacity: 1, scale: 1 }}

                viewport={{ once: true }}

                transition={{ delay: index * 0.06 }}

                whileHover={{
                  scale:1.08,
                  y:-2
                }}

                className="
                px-3
                py-1.5

                rounded-full

                bg-[#ECEBE4]

                text-[#1C1C1C]

                text-xs

                font-medium

                duration-300

                shadow-[2px_2px_5px_rgba(28,28,28,.08),-2px_-2px_5px_rgba(255,255,255,.9)]
                "

              >

                {tech}

              </motion.span>

            ))}

          </div>

          {/* Buttons */}

          <div className="flex items-center justify-between mt-6">

            {/* GitHub */}

            <motion.a

              whileHover={{
                scale:1.06,
                y:-2,
              }}

              whileTap={{
                scale:.95,
              }}

              href={project.github}

              target="_blank"

              rel="noreferrer"

              className="
              flex
              items-center
              gap-2

              px-4
              py-2.5

              rounded-xl

              bg-gradient-to-b

              from-[#3A3A3A]
              to-[#1C1C1C]

              text-[#FAFAFF]

              text-sm

              font-semibold

              shadow-[0_3px_0_#000000,0_6px_14px_-2px_rgba(28,28,28,.35),inset_0_1px_1px_rgba(255,255,255,.15)]

              transition-all
              duration-300
              "

            >

              <FaGithub className="text-sm"/>

              GitHub

            </motion.a>

            {/* Live */}

            <motion.a

              whileHover={{
                scale:1.06,
                x:2,
              }}

              whileTap={{
                scale:.95,
              }}

              href={project.live}

              target="_blank"

              rel="noreferrer"

              className="
              flex
              items-center
              gap-2

              px-4
              py-2.5

              rounded-xl

              bg-white/50

              backdrop-blur-xl

              text-[#1C1C1C]

              text-sm

              font-semibold

              hover:bg-white/70

              duration-300

              shadow-[3px_3px_8px_rgba(28,28,28,.1),-3px_-3px_8px_rgba(255,255,255,.9)]
              "

            >

              Live

              <motion.div

                animate={{
                  x:[0,4,0],
                }}

                transition={{
                  repeat:Infinity,
                  duration:1.4,
                }}

              >

                <FaExternalLinkAlt className="text-xs"/>

              </motion.div>

            </motion.a>

          </div>

        </div>

        {/* Bottom Glow */}

        <motion.div

          animate={{
            opacity:[0.2,0.5,0.2],
            scale:[1,1.15,1],
          }}

          transition={{
            duration:5,
            repeat:Infinity,
          }}

          className="
          absolute

          -bottom-20

          left-1/2

          -translate-x-1/2

          w-56

          h-28

          rounded-full

          bg-[#DADDD8]/40

          blur-[80px]

          pointer-events-none
          "

        />

      </div>
    </motion.div>

  );

}

export default ProjectCard;