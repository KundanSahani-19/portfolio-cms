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

  if (loading)
    return (
      <p className="text-[#4B5563]">
        Loading...
      </p>
    );

  if (!home)
    return (
      <p className="text-[#4B5563]">
        About data not available.
      </p>
    );

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="space-y-8"
    >
      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="text-[#4B5563] leading-9 text-lg"
      >
        {home.about?.description ||
          "I am a passionate Full Stack Developer."}
      </motion.p>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-5">

                {/* EXPERIENCE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="
            rounded-3xl
            bg-white/80
            backdrop-blur-xl
            border
            border-[#DADDD8]
            p-6
            shadow-[0_10px_30px_rgba(0,0,0,.08)]
            hover:shadow-[0_20px_45px_rgba(0,0,0,.12)]
            transition-all
            duration-300
          "
        >
          <p className="uppercase tracking-[4px] text-xs font-semibold text-[#6B7280]">
            Experience
          </p>

          <h3 className="text-2xl font-black mt-3 text-[#1C1C1C]">
            {home.about?.experience || "Fresher"}
          </h3>

          <div className="w-12 h-[3px] rounded-full bg-sky-500 mt-4" />

          <p className="text-[#4B5563] mt-4 leading-7">
            Passionate about building modern,
            responsive and scalable web applications.
          </p>
        </motion.div>

        {/* EDUCATION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="
            rounded-3xl
            bg-white/80
            backdrop-blur-xl
            border
            border-[#DADDD8]
            p-6
            shadow-[0_10px_30px_rgba(0,0,0,.08)]
            hover:shadow-[0_20px_45px_rgba(0,0,0,.12)]
            transition-all
            duration-300
          "
        >
          <p className="uppercase tracking-[4px] text-xs font-semibold text-[#6B7280]">
            Education
          </p>

          <h3 className="text-xl font-black mt-3 text-[#1C1C1C]">
            {home.about?.education ||
              "B.Tech Computer Science & Engineering"}
          </h3>

          <p className="text-[#4B5563] mt-4">
            {home.about?.university ||
              "ITM University, Gwalior"}
          </p>

          <div className="inline-flex mt-5 px-4 py-2 rounded-full bg-[#EEF0F2] border border-[#DADDD8] text-[#1C1C1C] font-semibold text-sm">
            Computer Science
          </div>
        </motion.div>

      </div>

            {/* =========================
          STATS
      ========================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        <Stats stats={home.stats} />
      </motion.div>

    </motion.div>
  );
}

export default AboutContent;