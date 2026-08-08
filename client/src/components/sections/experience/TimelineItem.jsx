import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      className={`
        relative
        flex
        items-center
        mb-20
        ${
          isLeft
            ? "lg:justify-start"
            : "lg:justify-end"
        }
      `}
    >
      {/* Timeline Icon */}

      <div
        className="
        hidden
        lg:flex
        absolute
        left-1/2
        -translate-x-1/2
        z-20
        "
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          whileHover={{
            scale: 1.15,
            rotate: 10,
          }}
          className="
          w-14
          h-14
          rounded-full
          bg-[#1C1C1C]
          border-4
          border-[#FAFAFF]
          flex
          items-center
          justify-center
          shadow-[0_15px_35px_rgba(28,28,28,.25)]
          "
        >
          <FaBriefcase className="text-white text-lg" />
        </motion.div>
      </div>

      {/* Left / Right Card */}

      <div
        className={`
          w-full
          lg:w-[38%]
          ${
            isLeft
              ? "lg:mr-auto"
              : "lg:ml-auto"
          }
        `}
      >
        <ExperienceCard item={item} />
      </div>
    </motion.div>
  );
}

export default TimelineItem;