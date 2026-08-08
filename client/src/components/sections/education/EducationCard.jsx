import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import DegreeBadge from "./DegreeBadge";

function EducationCard({ item }) {
  if (!item) return null;

  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-100, 100], [6, -6]);
  const rotateY = useTransform(springX, [-100, 100], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
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

        from-white
        via-[#DADDD8]/60
        to-transparent
      "
      >

        <div className="w-full h-full rounded-[30px] bg-[#FAFAFF]" />

      </div>

      {/* Glow */}

      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="
        absolute

        -inset-10

        opacity-0

        group-hover:opacity-100

        transition-all

        duration-700

        blur-[80px]

        bg-[#DADDD8]/50
      "
      />

      {/* Floating decorative dot */}

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-white to-[#DADDD8] shadow-[0_6px_16px_rgba(28,28,28,0.15)] z-20"
      />

      {/* Card */}

      <div
        className="
        relative

        overflow-hidden

        rounded-[30px]

        bg-white/40

        backdrop-blur-2xl

        p-8

        shadow-[0_20px_50px_rgba(28,28,28,.1),inset_0_1px_0_rgba(255,255,255,.85)]

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

          via-white/60

          to-transparent
        "
        />

        {/* Ambient Glow */}

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="
          absolute

          -right-20

          -top-20

          h-48

          w-48

          rounded-full

          bg-[#DADDD8]/40

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

          text-[#1C1C1C]

          leading-tight
          relative
          z-10
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

          text-[#4A4A4A]
          relative
          z-10
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

            text-[#6B6B6B]
            relative
            z-10
          "

          >

            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              📍
            </motion.span>

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

            bg-[#ECEBE4]

            px-5

            py-3
            relative
            z-10

            shadow-[3px_3px_8px_rgba(28,28,28,.1),-3px_-3px_8px_rgba(255,255,255,.9)]
          "

          >

            <motion.span
              animate={{ rotate: [0, -12, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            >
              🎓
            </motion.span>

            <span
              className="
              font-semibold

              text-[#1C1C1C]
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
              text-[#6B6B6B]
              relative
              z-10
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
              scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
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

              bg-white/50

              px-5
              py-3
              relative
              z-10

              text-[#1C1C1C]
              font-semibold

              hover:bg-white/70

              transition-all
              duration-300

              shadow-[3px_3px_10px_rgba(28,28,28,.1),-3px_-3px_10px_rgba(255,255,255,.9)]
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