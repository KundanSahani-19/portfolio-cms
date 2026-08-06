import { motion } from "framer-motion";
import DegreeBadge from "./DegreeBadge";

function EducationCard({ item }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
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
        scale: 1.02,
      }}
      transition={{
        duration: .6,
        type: "spring",
        stiffness: 120,
      }}
      className="group relative"
    >

      {/* Border */}

      <div
        className="
        absolute
        inset-0
        rounded-[32px]
        p-[1.2px]

        bg-gradient-to-br

        from-white/20
        via-white/5
        to-transparent
      "
      >

        <div className="w-full h-full rounded-[30px] bg-[#090909]" />

      </div>

      {/* Glow */}

      <div
        className="
        absolute

        -inset-10

        opacity-0

        group-hover:opacity-100

        transition-all

        duration-700

        blur-[80px]

        bg-[#DADDD8]/10
      "
      />

      {/* Card */}

      <div
        className="
        relative

        overflow-hidden

        rounded-[30px]

        bg-[#111111]

        border

        border-white/10

        p-8

        shadow-[0_25px_60px_rgba(0,0,0,.55)]

        transition-all

        duration-500
      "
      >

        {/* Top Reflection */}

        <motion.div

          animate={{
            x: [
              "-140%",
              "180%",
            ],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2,
          }}

          className="
          absolute

          top-0

          left-0

          w-40

          h-full

          rotate-12

          bg-gradient-to-r

          from-transparent

          via-white/10

          to-transparent
        "
        />

        {/* Ambient Glow */}

        <div
          className="
          absolute

          -right-20

          -top-20

          h-48

          w-48

          rounded-full

          bg-[#DADDD8]/5

          blur-[90px]
        "
        />

        <DegreeBadge
          year={`${item.startYear} - ${item.endYear}`}
        />

        {/* Degree */}

        <motion.h3

          whileHover={{
            x: 5,
          }}

          className="
          mt-7

          text-3xl

          font-black

          text-[#FAFAFF]

          leading-tight
        "

        >

          {item.degree}

        </motion.h3>

        {/* Institution */}

        <p
          className="
          mt-3

          text-lg

          font-semibold

          text-[#DADDD8]
        "
        >

          {item.institution}

        </p>

        {/* Location */}

        {item.location && (

          <div

            className="
            mt-5

            flex

            items-center

            gap-2

            text-[#9CA3AF]
          "

          >

            <span>📍</span>

            <span>

              {item.location}

            </span>

          </div>

        )}

        {/* Grade */}

        {item.grade && (

          <motion.div

            whileHover={{
              scale: 1.04,
            }}

            className="
            mt-6

            inline-flex

            items-center

            gap-2

            rounded-2xl

            bg-[#1A1A1A]

            border

            border-white/10

            px-5

            py-3

            shadow-[0_8px_20px_rgba(0,0,0,.35)]
          "

          >

            <span>

              🎓

            </span>

            <span
              className="
              font-semibold

              text-[#ECEBE4]
            "
            >

              CGPA : {item.grade}

            </span>

          </motion.div>

        )}
                {/* Description */}

        {item.description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              mt-6
              text-[15px]
              leading-8
              text-[#A8A8A8]
            "
          >
            {item.description}
          </motion.p>
        )}

        {/* Visit University */}

        {item.institutionUrl && (
          <motion.a
            href={item.institutionUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              x: 6,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="
              mt-8
              inline-flex
              items-center
              gap-3

              rounded-xl

              bg-[#1B1B1B]

              border
              border-white/10

              px-5
              py-3

              text-[#ECEBE4]
              font-semibold

              hover:bg-[#252525]

              transition-all
              duration-300

              shadow-[0_8px_20px_rgba(0,0,0,.30)]
            "
          >
            Visit University

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </motion.a>
        )}

      </div>

    </motion.div>
  );
}

export default EducationCard;