import { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const API = "https://YOUR-RENDER-URL.onrender.com/api/skills";

  const [skills, setSkills] = useState([]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    level: 80,
    icon: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // =========================
  // FETCH SKILLS
  // =========================

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

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "level" ? Number(value) : value,
    }));
  };

  // =========================
  // ADD SKILL
  // =========================

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

  // =========================
  // DELETE SKILL
  // =========================

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

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Skills...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      {/* TITLE */}

      <h1 className="text-4xl font-black mb-8">
        Skills Management
      </h1>

      {/* =========================
          ADD SKILL FORM
      ========================= */}

      <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 mb-10">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          ➕ Add New Skill
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          {/* NAME */}

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Skill Name (React)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />

          {/* CATEGORY */}

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category (Frontend)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />

          {/* LEVEL */}

          <div>

            <label className="block text-gray-400 mb-2">
              Skill Level: {form.level}%
            </label>

            <input
              type="range"
              name="level"
              min="1"
              max="100"
              value={form.level}
              onChange={handleChange}
              className="w-full accent-cyan-400"
            />

          </div>

          {/* ICON */}

          <input
            type="text"
            name="icon"
            value={form.icon}
            onChange={handleChange}
            placeholder="Icon URL (Optional)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />

          {/* BUTTON */}

          <button
            type="submit"
            disabled={saving}
            className="md:col-span-2 bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300 duration-300 disabled:opacity-50"
          >
            {saving ? "Adding..." : "➕ Add Skill"}
          </button>

        </form>

      </div>

      {/* =========================
          SKILLS LIST
      ========================= */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {skills.length === 0 ? (

          <p className="text-gray-400">
            No skills found. Add your first skill.
          </p>

        ) : (

          skills.map((skill) => (

            <div
              key={skill._id}
              className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
            >

              {/* ICON */}

              {skill.icon ? (

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-14 object-contain mb-4"
                />

              ) : (

                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center text-2xl text-cyan-400 mb-4">
                  💻
                </div>

              )}

              {/* NAME */}

              <h3 className="text-2xl font-bold">
                {skill.name}
              </h3>

              {/* CATEGORY */}

              <p className="text-cyan-400 mt-1">
                {skill.category}
              </p>

              {/* LEVEL */}

              <div className="mt-5">

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-gray-400">
                    Proficiency
                  </span>

                  <span className="text-cyan-400">
                    {skill.level}%
                  </span>

                </div>

                <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />

                </div>

              </div>

              {/* DELETE */}

              <button
                onClick={() => deleteSkill(skill._id)}
                className="mt-6 w-full border border-red-400/40 text-red-400 py-3 rounded-xl hover:bg-red-400 hover:text-black duration-300"
              >
                🗑 Delete Skill
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Skills;