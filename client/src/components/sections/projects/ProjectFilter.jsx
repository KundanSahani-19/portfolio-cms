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
    <div className="flex flex-wrap justify-center gap-4 mb-14">
      {filters.map((item) => (
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -3 }}
          key={item}
          onClick={() => setActive(item)}
          className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
            active === item
              ? "bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-500/30"
              : "border-white/10 bg-white/5 hover:border-cyan-400 hover:text-cyan-400"
          }`}
        >
          {item}
        </motion.button>
      ))}
    </div>
  );
}

export default ProjectFilter;