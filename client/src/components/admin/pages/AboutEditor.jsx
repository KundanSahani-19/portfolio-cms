import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function AboutEditor() {
  const API =
    "https://portfolio-cms-backend-8jty.onrender.com/api/home";

  const [about, setAbout] = useState({
    title: "",
    description: "",
    experience: "",
    education: "",
    university: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await axios.get(API);

      setAbout({
        title: response.data.about?.title || "",
        description: response.data.about?.description || "",
        experience: response.data.about?.experience || "",
        education: response.data.about?.education || "",
        university: response.data.about?.university || "",
      });
    } catch (error) {
      console.error("Failed to fetch About:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAbout((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const response = await axios.get(API);

      const existingHome = response.data;

      await axios.put(API, {
        ...existingHome,
        about: about,
      });

      alert("✅ About section updated successfully!");
    } catch (error) {
      console.error("Failed to update About:", error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to update About section"
      );
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    "w-full bg-white/40 backdrop-blur-xl text-[#1C1C1C] placeholder:text-[#8A8A8A] rounded-2xl p-4 outline-none " +
    "shadow-[inset_3px_3px_8px_rgba(28,28,28,0.1),inset_-3px_-3px_8px_rgba(255,255,255,0.8)] " +
    "focus:shadow-[inset_3px_3px_8px_rgba(28,28,28,0.14),inset_-3px_-3px_8px_rgba(255,255,255,0.9),0_0_0_2px_rgba(28,28,28,0.15)] " +
    "transition-all duration-300";

  const labelClass = "block mb-2 text-[#6B6B6B]";

  const glassCard =
    "relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70";

  const glassInner =
    "bg-white/35 backdrop-blur-2xl rounded-[22px] p-8 space-y-6 shadow-[0_12px_32px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]";

  if (loading) {
    return (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-[#1C1C1C] text-xl"
      >
        Loading About Section...
      </motion.div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-black mb-8 text-[#1C1C1C]"
      >
        About Page Editor
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={glassCard}
      >
        <form onSubmit={handleSubmit} className={glassInner}>

          <div>
            <label className={labelClass}>About Title</label>

            <input
              type="text"
              name="title"
              value={about.title}
              onChange={handleChange}
              placeholder="Example: About Me"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>About Description</label>

            <textarea
              name="description"
              value={about.description}
              onChange={handleChange}
              rows="8"
              placeholder="Write your About description..."
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Experience</label>

            <input
              type="text"
              name="experience"
              value={about.experience}
              onChange={handleChange}
              placeholder="Example: Fresher"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Education</label>

            <input
              type="text"
              name="education"
              value={about.education}
              onChange={handleChange}
              placeholder="Example: B.Tech Computer Science & Engineering"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>University</label>

            <input
              type="text"
              name="university"
              value={about.university}
              onChange={handleChange}
              placeholder="Example: ITM University, Gwalior"
              className={inputClass}
            />
          </div>

          <motion.button
            type="submit"
            disabled={saving}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ y: 1, scale: 0.98 }}
            className="w-full py-4 rounded-2xl font-bold text-[#FAFAFF] relative overflow-hidden
              bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
              shadow-[0_4px_0_#000000,0_8px_16px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]
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
              {saving ? "Saving..." : "💾 Save About Changes"}
            </span>
          </motion.button>

        </form>
      </motion.div>

    </div>
  );
}

export default AboutEditor;