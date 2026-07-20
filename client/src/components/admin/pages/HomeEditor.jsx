import { useEffect, useState } from "react";
import axios from "axios";

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

  const API = "const API = "https://portfolio-cms-backend-8jty.onrender.com/api/home";";

  // =========================
  // FETCH HOME DATA
  // =========================

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

  // =========================
  // SIMPLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setHome((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SOCIAL INPUT CHANGE
  // =========================

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

  // =========================
  // STATS INPUT CHANGE
  // =========================

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

  // =========================
  // ADD ROLE
  // =========================

  const addRole = () => {
    if (!newRole.trim()) return;

    setHome((prev) => ({
      ...prev,

      roles: [...prev.roles, newRole.trim()],
    }));

    setNewRole("");
  };

  // =========================
  // DELETE ROLE
  // =========================

  const deleteRole = (index) => {
    setHome((prev) => ({
      ...prev,

      roles: prev.roles.filter((_, i) => i !== index),
    }));
  };

  // =========================
  // ADD FLOATING SKILL
  // =========================

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setHome((prev) => ({
      ...prev,

      floatingSkills: [
        ...prev.floatingSkills,
        newSkill.trim(),
      ],
    }));

    setNewSkill("");
  };

  // =========================
  // DELETE FLOATING SKILL
  // =========================

  const deleteSkill = (index) => {
    setHome((prev) => ({
      ...prev,

      floatingSkills: prev.floatingSkills.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // =========================
  // SAVE HOME DATA
  // =========================

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

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Home Editor...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      <h1 className="text-4xl font-black mb-8">
        Home Page Editor
      </h1>

      <form onSubmit={handleSave} className="space-y-8">

  {/* ================= HERO CONTENT ================= */}

  <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

    <h2 className="text-2xl font-bold text-cyan-400 mb-6">
      🏠 Hero Content
    </h2>

    <div className="grid md:grid-cols-2 gap-5">

      <input
        name="greeting"
        value={home.greeting}
        onChange={handleChange}
        placeholder="Greeting"
        className="bg-[#020617] border border-white/10 p-4 rounded-xl"
      />

      <input
        name="name"
        value={home.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="bg-[#020617] border border-white/10 p-4 rounded-xl"
      />

      <textarea
        name="tagline"
        value={home.tagline}
        onChange={handleChange}
        placeholder="Tagline"
        rows="4"
        className="bg-[#020617] border border-white/10 p-4 rounded-xl md:col-span-2"
      />

      <input
        name="availableText"
        value={home.availableText}
        onChange={handleChange}
        placeholder="Available Text"
        className="bg-[#020617] border border-white/10 p-4 rounded-xl md:col-span-2"
      />

    </div>

  </div>


  {/* ================= TYPEWRITER ROLES ================= */}

  <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

    <h2 className="text-2xl font-bold text-cyan-400 mb-6">
      ✨ Typewriter Roles
    </h2>

    <div className="flex gap-3 mb-5">

      <input
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        placeholder="Example: React Developer"
        className="flex-1 bg-[#020617] border border-white/10 p-4 rounded-xl"
      />

      <button
        type="button"
        onClick={addRole}
        className="bg-cyan-400 text-black px-6 rounded-xl font-bold"
      >
        Add
      </button>

    </div>

    <div className="flex flex-wrap gap-3">

      {home.roles.map((role, index) => (

        <div
          key={index}
          className="flex items-center gap-3 bg-[#020617] border border-white/10 px-4 py-3 rounded-xl"
        >

          <span>{role}</span>

          <button
            type="button"
            onClick={() => deleteRole(index)}
            className="text-red-400 hover:text-red-300"
          >
            ✕
          </button>

        </div>

      ))}

    </div>

  </div>


  {/* ================= FLOATING SKILLS ================= */}

  <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

    <h2 className="text-2xl font-bold text-cyan-400 mb-6">
      🧩 Floating Skills
    </h2>

    <div className="flex gap-3 mb-5">

      <input
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Example: React"
        className="flex-1 bg-[#020617] border border-white/10 p-4 rounded-xl"
      />

      <button
        type="button"
        onClick={addSkill}
        className="bg-cyan-400 text-black px-6 rounded-xl font-bold"
      >
        Add
      </button>

    </div>

    <div className="flex flex-wrap gap-3">

      {home.floatingSkills.map((skill, index) => (

        <div
          key={index}
          className="flex items-center gap-3 bg-[#020617] border border-white/10 px-4 py-3 rounded-xl"
        >

          <span>{skill}</span>

          <button
            type="button"
            onClick={() => deleteSkill(index)}
            className="text-red-400 hover:text-red-300"
          >
            ✕
          </button>

        </div>

      ))}

    </div>

  </div>


  {/* ================= STATS ================= */}

  <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

    <h2 className="text-2xl font-bold text-cyan-400 mb-6">
      📊 Statistics
    </h2>

    <div className="grid md:grid-cols-3 gap-5">

      <input
        name="projects"
        value={home.stats.projects}
        onChange={handleStatsChange}
        placeholder="Projects (15+)"
        className="bg-[#020617] border border-white/10 p-4 rounded-xl"
      />

      <input
        name="skills"
        value={home.stats.skills}
        onChange={handleStatsChange}
        placeholder="Skills (12+)"
        className="bg-[#020617] border border-white/10 p-4 rounded-xl"
      />

      <input
        name="certificates"
        value={home.stats.certificates}
        onChange={handleStatsChange}
        placeholder="Certificates (1+)"
        className="bg-[#020617] border border-white/10 p-4 rounded-xl"
      />

    </div>

  </div>

{/* ================= BUTTONS ================= */}

<div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    🔘 Buttons
  </h2>

  <div className="grid md:grid-cols-2 gap-5">

    <input
      name="hireButton"
      value={home.hireButton}
      onChange={handleChange}
      placeholder="Hire Button Text"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

    <input
      name="resumeButton"
      value={home.resumeButton}
      onChange={handleChange}
      placeholder="Resume Button Text"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

  </div>

</div>


{/* ================= RESUME ================= */}

<div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    📄 Resume
  </h2>

  <input
    name="resumeUrl"
    value={home.resumeUrl}
    onChange={handleChange}
    placeholder="Resume URL"
    className="w-full bg-[#020617] border border-white/10 p-4 rounded-xl"
  />

</div>


{/* ================= SOCIAL LINKS ================= */}

<div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    🌐 Social Links
  </h2>

  <div className="grid md:grid-cols-2 gap-5">

    <input
      name="github"
      value={home.social.github}
      onChange={handleSocialChange}
      placeholder="GitHub URL"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

    <input
      name="linkedin"
      value={home.social.linkedin}
      onChange={handleSocialChange}
      placeholder="LinkedIn URL"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

    <input
      name="instagram"
      value={home.social.instagram}
      onChange={handleSocialChange}
      placeholder="Instagram URL"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

    <input
      name="twitter"
      value={home.social.twitter}
      onChange={handleSocialChange}
      placeholder="Twitter / X URL"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

    <input
      name="email"
      value={home.social.email}
      onChange={handleSocialChange}
      placeholder="Email"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

    <input
      name="website"
      value={home.social.website}
      onChange={handleSocialChange}
      placeholder="Personal Website"
      className="bg-[#020617] border border-white/10 p-4 rounded-xl"
    />

  </div>

</div>


{/* ================= HERO IMAGE ================= */}

<div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6">

  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
    🖼 Hero Image
  </h2>

  <input
    name="heroImage"
    value={home.heroImage}
    onChange={handleChange}
    placeholder="Paste Image URL"
    className="w-full bg-[#020617] border border-white/10 p-4 rounded-xl"
  />

  {home.heroImage && (
    <img
      src={home.heroImage}
      alt="Hero Preview"
      className="mt-5 w-40 h-40 object-cover rounded-2xl border border-cyan-400"
    />
  )}

</div>
{/* ================= SAVE BUTTON ================= */}

<button
  type="submit"
  disabled={saving}
  className="w-full bg-cyan-400 text-black py-5 rounded-2xl font-black text-lg hover:bg-cyan-300 duration-300 disabled:opacity-50"
>
  {saving ? "Saving..." : "💾 Save Home Changes"}
</button>
</form>

    </div>
  );
}

export default HomeEditor;