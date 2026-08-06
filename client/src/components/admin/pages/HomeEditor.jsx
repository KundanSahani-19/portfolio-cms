import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function HomeEditor() {
  const [home, setHome] = useState({
    greeting: "",
    name: "",
    roles: [],
    tagline: "",
    heroImage: "",
    availableText: "",
    hireButton: "",
    resumeButton: "",
    resumeUrl: "",

    about: {
      description: "",
      experience: "",
      education: "",
    },

    social: {
      github: "",
      linkedin: "",
      instagram: "",
      twitter: "",
      email: "",
      website: "",
    },

    floatingSkills: [],

    stats: {
      projects: "",
      skills: "",
      certificates: "",
    },
  });

  const [newRole, setNewRole] = useState("");
  const [newSkill, setNewSkill] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const API =
    "https://portfolio-cms-backend-8jty.onrender.com/api/home";

  useEffect(() => {
    fetchHome();
  }, []);

  const fetchHome = async () => {
    try {
      const res = await axios.get(API);

      if (res.data) {
        setHome({
          greeting: res.data.greeting || "",
          name: res.data.name || "",
          roles: res.data.roles || [],
          tagline: res.data.tagline || "",
          heroImage: res.data.heroImage || "",
          availableText: res.data.availableText || "",
          hireButton: res.data.hireButton || "",
          resumeButton: res.data.resumeButton || "",
          resumeUrl: res.data.resumeUrl || "",

          about: {
            description: res.data.about?.description || "",
            experience: res.data.about?.experience || "",
            education: res.data.about?.education || "",
          },

          social: {
            github: res.data.social?.github || "",
            linkedin: res.data.social?.linkedin || "",
            instagram: res.data.social?.instagram || "",
            twitter: res.data.social?.twitter || "",
            email: res.data.social?.email || "",
            website: res.data.social?.website || "",
          },

          floatingSkills: res.data.floatingSkills || [],

          stats: {
            projects: res.data.stats?.projects || "",
            skills: res.data.stats?.skills || "",
            certificates: res.data.stats?.certificates || "",
          },
        });
      }
    } catch (error) {
      console.error("Failed to fetch Home data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setHome((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;

    setHome((prev) => ({
      ...prev,
      social: {
        ...prev.social,
        [name]: value,
      },
    }));
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;

    setHome((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        [name]: value,
      },
    }));
  };

  const addRole = () => {
    if (!newRole.trim()) return;

    setHome((prev) => ({
      ...prev,
      roles: [...prev.roles, newRole.trim()],
    }));

    setNewRole("");
  };

  const deleteRole = (index) => {
    setHome((prev) => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setHome((prev) => ({
      ...prev,
      floatingSkills: [...prev.floatingSkills, newSkill.trim()],
    }));

    setNewSkill("");
  };

  const deleteSkill = (index) => {
    setHome((prev) => ({
      ...prev,
      floatingSkills: prev.floatingSkills.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      await axios.put(API, home, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Home Updated Successfully");

      await fetchHome();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to update Home"
      );
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    "bg-white/40 backdrop-blur-xl text-[#1C1C1C] placeholder:text-[#8A8A8A] p-4 rounded-2xl outline-none " +
    "shadow-[inset_3px_3px_8px_rgba(28,28,28,0.1),inset_-3px_-3px_8px_rgba(255,255,255,0.8)] " +
    "focus:shadow-[inset_3px_3px_8px_rgba(28,28,28,0.14),inset_-3px_-3px_8px_rgba(255,255,255,0.9),0_0_0_2px_rgba(28,28,28,0.15)] " +
    "transition-all duration-300";

  const glassCard =
    "relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70";

  const glassInner =
    "bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_12px_32px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]";

  const sectionTitle = "text-2xl font-bold text-[#1C1C1C] mb-6";

  const chip = (label, onDelete) => (
    <div className="flex items-center gap-3 bg-[#ECEBE4] px-4 py-3 rounded-xl shadow-[3px_3px_6px_rgba(28,28,28,0.12),-3px_-3px_6px_rgba(255,255,255,0.9)]">
      <span className="text-[#1C1C1C]">{label}</span>

      <motion.button
        type="button"
        onClick={onDelete}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="text-rose-500"
      >
        ✕
      </motion.button>
    </div>
  );

  const addButton = (onClick) => (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ y: 1, scale: 0.96 }}
      className="px-6 rounded-2xl font-bold text-[#FAFAFF]
        bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
        shadow-[0_4px_0_#000000,0_8px_14px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]"
    >
      Add
    </motion.button>
  );

  const sectionMotion = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay },
  });

  if (loading) {
    return (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-[#1C1C1C] text-xl"
      >
        Loading Home Editor...
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-black mb-8 text-[#1C1C1C]"
      >
        Home Page Editor
      </motion.h1>

      <form onSubmit={handleSave} className="space-y-8">

        {/* ================= HERO CONTENT ================= */}

        <motion.div {...sectionMotion(0)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>🏠 Hero Content</h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="greeting"
                value={home.greeting}
                onChange={handleChange}
                placeholder="Greeting"
                className={inputClass}
              />

              <input
                name="name"
                value={home.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={inputClass}
              />

              <textarea
                name="tagline"
                value={home.tagline}
                onChange={handleChange}
                placeholder="Tagline"
                rows="4"
                className={`${inputClass} md:col-span-2`}
              />

              <input
                name="availableText"
                value={home.availableText}
                onChange={handleChange}
                placeholder="Available Text"
                className={`${inputClass} md:col-span-2`}
              />

            </div>
          </div>
        </motion.div>

        {/* ================= TYPEWRITER ROLES ================= */}

        <motion.div {...sectionMotion(0.05)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>✨ Typewriter Roles</h2>

            <div className="flex gap-3 mb-5">
              <input
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Example: React Developer"
                className={`flex-1 ${inputClass}`}
              />

              {addButton(addRole)}
            </div>

            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {home.roles.map((role, index) => (
                  <motion.div
                    key={role + index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {chip(role, () => deleteRole(index))}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ================= FLOATING SKILLS ================= */}

        <motion.div {...sectionMotion(0.1)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>🧩 Floating Skills</h2>

            <div className="flex gap-3 mb-5">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Example: React"
                className={`flex-1 ${inputClass}`}
              />

              {addButton(addSkill)}
            </div>

            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {home.floatingSkills.map((skill, index) => (
                  <motion.div
                    key={skill + index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {chip(skill, () => deleteSkill(index))}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ================= ABOUT CONTENT ================= */}

        <motion.div {...sectionMotion(0.15)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>👨‍💻 About Section</h2>

            <div className="space-y-5">

              <textarea
                value={home.about.description}
                onChange={(e) =>
                  setHome((prev) => ({
                    ...prev,
                    about: {
                      ...prev.about,
                      description: e.target.value,
                    },
                  }))
                }
                placeholder="About Description"
                rows="6"
                className={`w-full ${inputClass}`}
              />

              <input
                value={home.about.experience}
                onChange={(e) =>
                  setHome((prev) => ({
                    ...prev,
                    about: {
                      ...prev.about,
                      experience: e.target.value,
                    },
                  }))
                }
                placeholder="Experience e.g. Fresher"
                className={`w-full ${inputClass}`}
              />

              <input
                value={home.about.education}
                onChange={(e) =>
                  setHome((prev) => ({
                    ...prev,
                    about: {
                      ...prev.about,
                      education: e.target.value,
                    },
                  }))
                }
                placeholder="Education e.g. B.Tech CSE"
                className={`w-full ${inputClass}`}
              />

            </div>
          </div>
        </motion.div>

        {/* ================= STATS ================= */}

        <motion.div {...sectionMotion(0.2)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>📊 Statistics</h2>

            <div className="grid md:grid-cols-3 gap-5">

              <input
                name="projects"
                value={home.stats.projects}
                onChange={handleStatsChange}
                placeholder="Projects (15+)"
                className={inputClass}
              />

              <input
                name="skills"
                value={home.stats.skills}
                onChange={handleStatsChange}
                placeholder="Skills (12+)"
                className={inputClass}
              />

              <input
                name="certificates"
                value={home.stats.certificates}
                onChange={handleStatsChange}
                placeholder="Certificates (1+)"
                className={inputClass}
              />

            </div>
          </div>
        </motion.div>

        {/* ================= BUTTONS ================= */}

        <motion.div {...sectionMotion(0.25)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>🔘 Buttons</h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="hireButton"
                value={home.hireButton}
                onChange={handleChange}
                placeholder="Hire Button Text"
                className={inputClass}
              />

              <input
                name="resumeButton"
                value={home.resumeButton}
                onChange={handleChange}
                placeholder="Resume Button Text"
                className={inputClass}
              />

            </div>
          </div>
        </motion.div>

        {/* ================= RESUME ================= */}

        <motion.div {...sectionMotion(0.3)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>📄 Resume</h2>

            <input
              name="resumeUrl"
              value={home.resumeUrl}
              onChange={handleChange}
              placeholder="Resume URL"
              className={`w-full ${inputClass}`}
            />
          </div>
        </motion.div>

        {/* ================= SOCIAL LINKS ================= */}

        <motion.div {...sectionMotion(0.35)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>🌐 Social Links</h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="github"
                value={home.social.github}
                onChange={handleSocialChange}
                placeholder="GitHub URL"
                className={inputClass}
              />

              <input
                name="linkedin"
                value={home.social.linkedin}
                onChange={handleSocialChange}
                placeholder="LinkedIn URL"
                className={inputClass}
              />

              <input
                name="instagram"
                value={home.social.instagram}
                onChange={handleSocialChange}
                placeholder="Instagram URL"
                className={inputClass}
              />

              <input
                name="twitter"
                value={home.social.twitter}
                onChange={handleSocialChange}
                placeholder="Twitter / X URL"
                className={inputClass}
              />

              <input
                name="email"
                value={home.social.email}
                onChange={handleSocialChange}
                placeholder="Email"
                className={inputClass}
              />

              <input
                name="website"
                value={home.social.website}
                onChange={handleSocialChange}
                placeholder="Personal Website"
                className={inputClass}
              />

            </div>
          </div>
        </motion.div>

        {/* ================= HERO IMAGE ================= */}

        <motion.div {...sectionMotion(0.4)} className={glassCard}>
          <div className={glassInner}>
            <h2 className={sectionTitle}>🖼 Hero Image</h2>

            <input
              name="heroImage"
              value={home.heroImage}
              onChange={handleChange}
              placeholder="Paste Image URL"
              className={`w-full ${inputClass}`}
            />

            {home.heroImage && (
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={home.heroImage}
                alt="Hero Preview"
                className="mt-5 w-40 h-40 object-cover rounded-2xl shadow-[0_8px_24px_rgba(28,28,28,0.2)]"
              />
            )}
          </div>
        </motion.div>

        {/* ================= SAVE BUTTON ================= */}

        <motion.button
          type="submit"
          disabled={saving}
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ y: 1, scale: 0.98 }}
          className="w-full py-5 rounded-2xl font-black text-lg text-[#FAFAFF] relative overflow-hidden
            bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
            shadow-[0_5px_0_#000000,0_10px_20px_-4px_rgba(28,28,28,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)]
            disabled:opacity-60"
        >
          {!saving && (
            <motion.span
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
            />
          )}
          <span className="relative">
            {saving ? "Saving..." : "💾 Save Home Changes"}
          </span>
        </motion.button>

      </form>

    </div>
  );
}

export default HomeEditor;