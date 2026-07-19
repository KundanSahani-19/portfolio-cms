import { motion } from "framer-motion";
import portfolioData from "../../../data/portfolioData";
import Stats from "./Stats";

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <p className="text-gray-400 leading-9 text-lg">
        {portfolioData.about.description}
      </p>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
          <p className="text-cyan-400 text-sm">
            Experience
          </p>

          <h3 className="text-xl font-bold">
            {portfolioData.about.experience}
          </h3>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
          <p className="text-cyan-400 text-sm">
            Education
          </p>

          <h3 className="text-xl font-bold">
            {portfolioData.about.education}
          </h3>
        </div>
      </div>

      <Stats />
    </motion.div>
  );
}

export default AboutContent;