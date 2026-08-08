import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
} from "react-icons/fa";

function ExperienceCard({ item }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[26px]
      border
      border-[#DADDD8]
      bg-[#FAFAFF]/90
      backdrop-blur-2xl
      p-6
      max-w-md
      w-full
      mx-auto
      shadow-[0_18px_50px_rgba(28,28,28,.08)]
      transition-all
      duration-500
      "
    >
      {/* Animated Gradient Border */}

      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        inset-0
        rounded-[26px]
        opacity-40
        blur-xl
        pointer-events-none
        "
        style={{
          background:
            "linear-gradient(120deg,#1C1C1C,#DADDD8,#ECEBE4,#EEF0F2,#FAFAFF)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Background Glow */}

      <div
        className="
        absolute
        -right-16
        -top-16
        w-40
        h-40
        rounded-full
        bg-[#DADDD8]/40
        blur-3xl
        opacity-70
        group-hover:scale-125
        duration-700
        "
      />

      <div
        className="
        absolute
        -left-16
        bottom-0
        w-36
        h-36
        rounded-full
        bg-[#ECEBE4]/40
        blur-3xl
        opacity-70
        group-hover:scale-125
        duration-700
        "
      />

      <div className="relative z-10">

        {/* Top Row */}

        <div className="flex items-center justify-between">

          {/* Icon */}

          <motion.div
            whileHover={{
              rotate: 15,
              scale: 1.1,
            }}
            className="
            w-12
            h-12
            rounded-xl
            bg-gradient-to-br
            from-[#1C1C1C]
            to-[#444]
            flex
            items-center
            justify-center
            shadow-[0_14px_26px_rgba(28,28,28,.25)]
            "
          >
            <FaBriefcase
              className="
              text-white
              text-base
              "
            />
          </motion.div>

          {/* Year */}

          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            className="
            px-4
            py-1.5
            rounded-full
            bg-[#ECEBE4]
            border
            border-[#DADDD8]
            text-[#1C1C1C]
            text-xs
            font-bold
            shadow
            "
          >
            {item.year}
          </motion.div>

        </div>

        {/* Title */}

        <motion.h2
          layout
          className="
          mt-5
          text-2xl
          font-black
          leading-tight
          text-[#1C1C1C]
          "
        >
          {item.title}
        </motion.h2>

        {/* Company */}

        <div
          className="
          mt-2.5
          flex
          items-center
          gap-2
          "
        >

          <div
            className="
            w-1.5
            h-1.5
            rounded-full
            bg-[#1C1C1C]
            "
          />

          <h3
            className="
            text-sm
            font-semibold
            text-[#666]
            "
          >
            {item.company}
          </h3>

        </div>

        {/* Description */}

        <p
          className="
          mt-5
          text-sm
          leading-6
          text-[#666]
          "
        >
          {item.description}
        </p>

        {/* Skills */}

        {item.skills && (

          <div className="mt-5 flex flex-wrap gap-2">

            {item.skills.map((skill, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{
                  duration: .25,
                }}
                className="
                px-3
                py-1.5
                rounded-full
                bg-[#EEF0F2]
                border
                border-[#DADDD8]
                text-[#1C1C1C]
                text-xs
                font-semibold
                shadow-sm
                hover:shadow-lg
                duration-300
                cursor-default
                "
              >
                {skill}
              </motion.div>

            ))}

          </div>

        )}

        {/* Bottom Button */}

        <motion.div
          whileHover={{
            x: 5,
          }}
          className="
          mt-6
          flex
          items-center
          gap-2
          text-[#1C1C1C]
          text-sm
          font-semibold
          "
        >

          <span>
            View Details
          </span>

          <FaArrowRight className="text-xs" />

        </motion.div>

      </div>

      {/* Premium Shine Effect */}

      <motion.div
        initial={{
          x: "-160%",
        }}
        animate={{
          x: "180%",
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-0
        left-0
        w-20
        h-full
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        -skew-x-12
        pointer-events-none
        "
      />

      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        rounded-[26px]
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        shadow-[0_0_50px_rgba(218,221,216,.55)]
        pointer-events-none
        "
      />

      {/* Floating Decorative Circle */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-5
        right-5
        w-11
        h-11
        rounded-full
        bg-gradient-to-br
        from-[#DADDD8]
        to-[#EEF0F2]
        opacity-40
        blur-md
        "
      />

      {/* Small Dot */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        top-6
        right-8
        w-1.5
        h-1.5
        rounded-full
        bg-[#1C1C1C]
        opacity-40
        "
      />

    </motion.div>
  );
}

export default ExperienceCard;