import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Experience() {
  const API = "https://portfolio-cms-backend-8jty.onrender.com/api/experiences";

  const [experiences, setExperiences] = useState([]);

  const [form, setForm] = useState({
    company: "",
    role: "",
    location: "",
    startDate: "",
    endDate: "Present",
    description: "",
    technologies: "",
    companyUrl: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(API);

      setExperiences(response.data || []);
    } catch (error) {
      console.error("Failed to fetch experiences:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.company || !form.role) {
      alert("⚠️ Company and Role are required");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      const experienceData = {
        ...form,

        technologies: form.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean),
      };

      await axios.post(API, experienceData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Experience Added Successfully");

      setForm({
        company: "",
        role: "",
        location: "",
        startDate: "",
        endDate: "Present",
        description: "",
        technologies: "",
        companyUrl: "",
      });

      fetchExperiences();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to add experience"
      );
    } finally {
      setSaving(false);
    }
  };

  const deleteExperience = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this experience?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("🗑 Experience Deleted");

      fetchExperiences();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to delete experience");
    }
  };

  const inputClass =
    "bg-white/40 backdrop-blur-xl text-[#1C1C1C] placeholder:text-[#8A8A8A] p-4 rounded-2xl outline-none " +
    "shadow-[inset_3px_3px_8px_rgba(28,28,28,0.1),inset_-3px_-3px_8px_rgba(255,255,255,0.8)] " +
    "focus:shadow-[inset_3px_3px_8px_rgba(28,28,28,0.14),inset_-3px_-3px_8px_rgba(255,255,255,0.9),0_0_0_2px_rgba(28,28,28,0.15)] " +
    "transition-all duration-300";

  const glassCard =
    "relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70";

  if (loading) {
    return (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-[#1C1C1C] text-xl"
      >
        Loading Experience...
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
        Experience Management
      </motion.h1>

      {/* ADD FORM */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${glassCard} mb-10`}
      >
        <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_12px_32px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">
            ➕ Add New Experience
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              required
              className={inputClass}
            />

            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Your Role"
              required
              className={inputClass}
            />

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className={inputClass}
            />

            <input
              type="text"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              placeholder="Start Date (Jan 2025)"
              className={inputClass}
            />

            <input
              type="text"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              placeholder="End Date (Present)"
              className={inputClass}
            />

            <input
              type="url"
              name="companyUrl"
              value={form.companyUrl}
              onChange={handleChange}
              placeholder="Company Website URL"
              className={inputClass}
            />

            <input
              type="text"
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              placeholder="Technologies: React, Node.js, MongoDB"
              className={`${inputClass} md:col-span-2`}
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your work..."
              rows="5"
              className={`${inputClass} md:col-span-2`}
            />

            <motion.button
              type="submit"
              disabled={saving}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ y: 1, scale: 0.98 }}
              className="md:col-span-2 py-4 rounded-2xl font-bold text-[#FAFAFF] relative overflow-hidden
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
                {saving ? "Adding..." : "➕ Add Experience"}
              </span>
            </motion.button>

          </form>
        </div>
      </motion.div>

      {/* EXPERIENCE LIST */}

      <div className="space-y-6">

        {experiences.length === 0 ? (
          <p className="text-[#6B6B6B]">
            No experience found. Add your first experience.
          </p>
        ) : (
          experiences.map((experience, i) => (
            <motion.div
              key={experience._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={glassCard}
            >
              <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  <div>
                    <h2 className="text-2xl font-bold text-[#1C1C1C]">
                      {experience.role}
                    </h2>

                    <p className="text-[#4A4A4A] text-lg font-medium">
                      {experience.company}
                    </p>

                    {experience.location && (
                      <p className="text-[#6B6B6B]">
                        📍 {experience.location}
                      </p>
                    )}
                  </div>

                  <div className="text-[#6B6B6B]">
                    {experience.startDate} - {experience.endDate}
                  </div>

                </div>

                {experience.description && (
                  <p className="text-[#6B6B6B] leading-7 mt-5">
                    {experience.description}
                  </p>
                )}

                {experience.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-[#ECEBE4] text-[#4A4A4A] text-sm
                          shadow-[2px_2px_5px_rgba(28,28,28,0.1),-2px_-2px_5px_rgba(255,255,255,0.9)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <motion.button
                  onClick={() => deleteExperience(experience._id)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 1, scale: 0.96 }}
                  className="mt-6 px-5 py-3 rounded-xl font-semibold text-[#FAFAFF]
                    bg-gradient-to-b from-rose-400 to-rose-600
                    shadow-[0_3px_0_#9F1239,0_6px_12px_-2px_rgba(190,18,60,0.35)]"
                >
                  🗑 Delete Experience
                </motion.button>

              </div>
            </motion.div>
          ))
        )}

      </div>

    </div>
  );
}

export default Experience;