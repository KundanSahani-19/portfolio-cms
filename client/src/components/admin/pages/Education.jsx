import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Education() {
  const API = "https://portfolio-cms-backend-8jty.onrender.com/api/educations";

  const [educations, setEducations] = useState([]);

  const [form, setForm] = useState({
    degree: "",
    institution: "",
    location: "",
    startYear: "",
    endYear: "",
    grade: "",
    description: "",
    institutionUrl: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      const response = await axios.get(API);

      setEducations(response.data || []);
    } catch (error) {
      console.error("Failed to fetch education:", error);
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

    if (!form.degree || !form.institution) {
      alert("⚠️ Degree and Institution are required");
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

      alert("✅ Education Added Successfully");

      setForm({
        degree: "",
        institution: "",
        location: "",
        startYear: "",
        endYear: "",
        grade: "",
        description: "",
        institutionUrl: "",
      });

      fetchEducations();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to add education"
      );
    } finally {
      setSaving(false);
    }
  };

  const deleteEducation = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this education?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("🗑 Education Deleted");

      fetchEducations();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to delete education");
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
        Loading Education...
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
        Education Management
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
            ➕ Add New Education
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="degree"
              value={form.degree}
              onChange={handleChange}
              placeholder="Degree (B.Tech Computer Science)"
              required
              className={inputClass}
            />

            <input
              type="text"
              name="institution"
              value={form.institution}
              onChange={handleChange}
              placeholder="Institution Name"
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
              name="startYear"
              value={form.startYear}
              onChange={handleChange}
              placeholder="Start Year (2023)"
              className={inputClass}
            />

            <input
              type="text"
              name="endYear"
              value={form.endYear}
              onChange={handleChange}
              placeholder="End Year (2027)"
              className={inputClass}
            />

            <input
              type="text"
              name="grade"
              value={form.grade}
              onChange={handleChange}
              placeholder="CGPA / Percentage"
              className={inputClass}
            />

            <input
              type="url"
              name="institutionUrl"
              value={form.institutionUrl}
              onChange={handleChange}
              placeholder="Institution Website URL"
              className={`${inputClass} md:col-span-2`}
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description..."
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
                {saving ? "Adding..." : "➕ Add Education"}
              </span>
            </motion.button>

          </form>
        </div>
      </motion.div>

      {/* EDUCATION LIST */}

      <div className="grid md:grid-cols-2 gap-6">

        {educations.length === 0 ? (
          <p className="text-[#6B6B6B]">
            No education found. Add your first education.
          </p>
        ) : (
          educations.map((education, i) => (
            <motion.div
              key={education._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={glassCard}
            >
              <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

                <h2 className="text-2xl font-bold text-[#1C1C1C]">
                  {education.degree}
                </h2>

                <p className="text-[#4A4A4A] text-lg mt-2 font-medium">
                  {education.institution}
                </p>

                {education.location && (
                  <p className="text-[#6B6B6B] mt-2">
                    📍 {education.location}
                  </p>
                )}

                <p className="text-[#6B6B6B] mt-3">
                  {education.startYear} - {education.endYear}
                </p>

                {education.grade && (
                  <p className="text-[#1C1C1C] mt-3 font-medium">
                    🎓 {education.grade}
                  </p>
                )}

                {education.description && (
                  <p className="text-[#6B6B6B] leading-7 mt-4">
                    {education.description}
                  </p>
                )}

                {education.institutionUrl && (
                  <a
                    href={education.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-[#1C1C1C] font-medium hover:text-[#4A4A4A]"
                  >
                    Visit Institution →
                  </a>
                )}

                <motion.button
                  onClick={() => deleteEducation(education._id)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 1, scale: 0.96 }}
                  className="mt-6 w-full py-3 rounded-xl font-semibold text-[#FAFAFF]
                    bg-gradient-to-b from-rose-400 to-rose-600
                    shadow-[0_3px_0_#9F1239,0_6px_12px_-2px_rgba(190,18,60,0.35)]"
                >
                  🗑 Delete Education
                </motion.button>

              </div>
            </motion.div>
          ))
        )}

      </div>

    </div>
  );
}

export default Education;