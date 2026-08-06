import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Dashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    experiences: 0,
    educations: 0,
    certificates: 0,
    messages: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [
        projects,
        skills,
        experiences,
        educations,
        certificates,
        messages,
      ] = await Promise.all([
        axios.get(
          "https://portfolio-cms-backend-8jty.onrender.com/api/projects"
        ),

        axios.get(
          "https://portfolio-cms-backend-8jty.onrender.com/api/skills"
        ),

        axios.get(
          "https://portfolio-cms-backend-8jty.onrender.com/api/experiences"
        ),

        axios.get(
          "https://portfolio-cms-backend-8jty.onrender.com/api/educations"
        ),

        axios.get(
          "https://portfolio-cms-backend-8jty.onrender.com/api/certificates"
        ),

        axios.get(
          "https://portfolio-cms-backend-8jty.onrender.com/api/messages",
          {
            headers,
          }
        ),
      ]);

      setStats({
        projects: projects.data?.length || 0,
        skills: skills.data?.length || 0,
        experiences: experiences.data?.length || 0,
        educations: educations.data?.length || 0,
        certificates: certificates.data?.length || 0,
        messages: messages.data?.length || 0,
      });
    } catch (error) {
      console.error("Failed to load dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    { title: "Projects", value: stats.projects, icon: "💻" },
    { title: "Skills", value: stats.skills, icon: "⚡" },
    { title: "Experience", value: stats.experiences, icon: "💼" },
    { title: "Education", value: stats.educations, icon: "🎓" },
    { title: "Certificates", value: stats.certificates, icon: "🏆" },
    { title: "Messages", value: stats.messages, icon: "✉️" },
  ];

  return (
    <div className="max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-black mb-3 text-[#1C1C1C]">
          Dashboard
        </h1>

        <p className="text-[#6B6B6B]">
          Welcome to your Portfolio CMS 👋
        </p>
      </motion.div>

      {loading ? (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="text-[#6B6B6B] text-xl"
        >
          Loading dashboard...
        </motion.div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70"
            >
              <div className="bg-white/40 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] relative overflow-hidden">

                <motion.div
                  animate={{ x: ["-60%", "160%"] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                    repeatDelay: 2,
                  }}
                  className="absolute -inset-y-6 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 pointer-events-none"
                />

                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-[#6B6B6B] mb-3">{card.title}</p>

                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.08 + 0.3 }}
                      className="text-4xl font-black bg-gradient-to-b from-[#1C1C1C] to-[#4A4A4A] bg-clip-text text-transparent"
                    >
                      {card.value}
                    </motion.h2>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#ECEBE4] flex items-center justify-center text-4xl
                    shadow-[5px_5px_10px_rgba(28,28,28,0.12),-5px_-5px_10px_rgba(255,255,255,0.9)]">
                    {card.icon}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Dashboard;