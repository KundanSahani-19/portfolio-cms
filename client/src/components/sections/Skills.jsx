import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../common/Container";
import SkillCard from "./skills/SkillCard";

import { getSkills } from "../../services/skillService";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const data = await getSkills();

      setSkills(data || []);
    } catch (error) {
      console.error("Failed to load skills:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="skills"
      className="py-16 lg:py-10"
    >
      <Container>

        {/* ================= HEADING ================= */}

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
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Use
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I use to build modern,
            scalable and high-performance applications.
          </p>
        </motion.div>


        {/* ================= LOADING ================= */}

        {loading && (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-400 text-lg">
              Loading skills...
            </p>
          </div>
        )}


        {/* ================= EMPTY STATE ================= */}

        {!loading && skills.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">
              No skills available yet.
            </p>
          </div>
        )}


        {/* ================= SKILLS GRID ================= */}

        {!loading && skills.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skills.map((skill) => (
              <SkillCard
                key={skill._id}
                skill={skill}
              />
            ))}
          </motion.div>
        )}

      </Container>
    </section>
  );
}

export default Skills;