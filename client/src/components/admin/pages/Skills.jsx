import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Skills() {
  const API = "https://portfolio-cms-backend-8jty.onrender.com/api/skills";

  const [skills, setSkills] = useState([]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    level: 80,
    icon: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await axios.get(API);

      setSkills(res.data);
    } catch (error) {
      console.error("Failed to fetch skills:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "level" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.category) {
      alert("⚠️ Skill name and category are required");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      await axios.post(API, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Skill Added Successfully");

      setForm({
        name: "",
        category: "",
        level: 80,
        icon: "",
      });

      fetchSkills();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to add skill"
      );
    } finally {
      setSaving(false);
    }
  };

  const deleteSkill = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this skill?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("🗑 Skill Deleted");

      fetchSkills();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to delete skill");
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
        Loading Skills...
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
        Skills Management
      </motion.h1>

      {/* ADD SKILL FORM */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${glassCard} mb-10`}
      >
        <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_12px_32px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">
            ➕ Add New Skill
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Skill Name (React)"
              className={inputClass}
            />

            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category (Frontend)"
              className={inputClass}
            />

            <div>
              <label className="block text-[#6B6B6B] mb-2">
                Skill Level: {form.level}%
              </label>

              <input
                type="range"
                name="level"
                min="1"
                max="100"
                value={form.level}
                onChange={handleChange}
                className="w-full accent-[#1C1C1C] h-2 rounded-full bg-[#ECEBE4] shadow-[inset_2px_2px_5px_rgba(28,28,28,0.12),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]"
              />
            </div>

            <input
              type="text"
              name="icon"
              value={form.icon}
              onChange={handleChange}
              placeholder="Icon URL (Optional)"
              className={inputClass}
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
                {saving ? "Adding..." : "➕ Add Skill"}
              </span>
            </motion.button>

          </form>
        </div>
      </motion.div>

      {/* SKILLS LIST */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {skills.length === 0 ? (
          <p className="text-[#6B6B6B]">
            No skills found. Add your first skill.
          </p>
        ) : (
          skills.map((skill, i) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={glassCard}
            >
              <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 object-contain mb-4"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-[#ECEBE4] flex items-center justify-center text-2xl mb-4
                    shadow-[4px_4px_10px_rgba(28,28,28,0.12),-4px_-4px_10px_rgba(255,255,255,0.9)]">
                    💻
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#1C1C1C]">
                  {skill.name}
                </h3>

                <p className="text-[#4A4A4A] mt-1 font-medium">
                  {skill.category}
                </p>

                <div className="mt-5">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#6B6B6B]">Proficiency</span>
                    <span className="text-[#1C1C1C] font-medium">{skill.level}%</span>
                  </div>

                  <div className="h-2.5 bg-[#ECEBE4] rounded-full overflow-hidden shadow-[inset_2px_2px_5px_rgba(28,28,28,0.12),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#DADDD8] to-[#1C1C1C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                    />
                  </div>
                </div>

                <motion.button
                  onClick={() => deleteSkill(skill._id)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 1, scale: 0.96 }}
                  className="mt-6 w-full py-3 rounded-xl font-semibold text-[#FAFAFF]
                    bg-gradient-to-b from-rose-400 to-rose-600
                    shadow-[0_3px_0_#9F1239,0_6px_12px_-2px_rgba(190,18,60,0.35)]"
                >
                  🗑 Delete Skill
                </motion.button>

              </div>
            </motion.div>
          ))
        )}

      </div>

    </div>
  );
}

export default Skills;