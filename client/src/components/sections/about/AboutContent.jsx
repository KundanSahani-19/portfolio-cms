import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Stats from "./Stats";

const API =
  "https://portfolio-cms-backend-8jty.onrender.com/api/home";

function AboutContent() {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axios.get(API);
        setHome(response.data);
      } catch (error) {
        console.error("Failed to load About data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-400">
        Loading...
      </p>
    );
  }

  if (!home) {
    return (
      <p className="text-gray-400">
        About data not available.
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* DESCRIPTION */}

      <p className="text-gray-400 leading-9 text-lg">
        {home.about?.description ||
          "I am a passionate Full Stack Developer."}
      </p>

      {/* EXPERIENCE + EDUCATION */}

      <div className="grid grid-cols-2 gap-5">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

          <p className="text-cyan-400 text-sm">
            Experience
          </p>

          <h3 className="text-xl font-bold">
            {home.about?.experience || "Fresher"}
          </h3>

        </div>


        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

          <p className="text-cyan-400 text-sm">
            Education
          </p>

          <h3 className="text-xl font-bold">
            {home.about?.education || "B.Tech CSE"}
          </h3>

        </div>

      </div>

      {/* STATS */}

      <Stats stats={home.stats} />

    </motion.div>
  );
}

export default AboutContent;