import { useEffect, useState } from "react";
import axios from "axios";

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
      console.error(
        "Failed to load dashboard stats:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: "💻",
    },
    {
      title: "Skills",
      value: stats.skills,
      icon: "⚡",
    },
    {
      title: "Experience",
      value: stats.experiences,
      icon: "💼",
    },
    {
      title: "Education",
      value: stats.educations,
      icon: "🎓",
    },
    {
      title: "Certificates",
      value: stats.certificates,
      icon: "🏆",
    },
    {
      title: "Messages",
      value: stats.messages,
      icon: "✉️",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-3">
          Dashboard
        </h1>

        <p className="text-gray-400">
          Welcome to your Portfolio CMS 👋
        </p>
      </div>

      {loading ? (
        <div className="text-gray-400 text-xl">
          Loading dashboard...
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 mb-3">
                    {card.title}
                  </p>

                  <h2 className="text-4xl font-black text-cyan-400">
                    {card.value}
                  </h2>
                </div>

                <div className="text-5xl">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;