import { motion } from "framer-motion";

const filters = [
  "All",
  "React",
  "Spring Boot",
  "Java",
  "Flutter",
  "Machine Learning",
  "Arduino",
];

function ProjectFilter({ active, setActive }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">

      {filters.map((item) => {

        const selected = active === item;

        return (

          <motion.button
            key={item}
            onClick={() => setActive(item)}

            whileHover={{
              y: -4,
              scale: 1.05,
            }}

            whileTap={{
              scale: 0.95,
            }}

            transition={{
              type: "spring",
              stiffness: 260,
            }}

            className={`
              relative
              overflow-hidden

              px-7
              py-3.5

              rounded-full

              font-semibold
              tracking-wide

              border

              duration-300

              ${
                selected
                  ? "bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-[0_10px_30px_rgba(28,28,28,.25)]"
                  : "bg-white/70 backdrop-blur-xl border-[#DADDD8] text-[#1C1C1C] hover:border-[#1C1C1C]"
              }
            `}
          >

            {/* Shine */}

            <motion.div
              animate={{
                x: ["-150%", "180%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="
                absolute
                inset-0

                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent

                -skew-x-12
              "
            />

            <span className="relative z-10">
              {item}
            </span>

          </motion.button>

        );

      })}

    </div>
  );
}

export default ProjectFilter;