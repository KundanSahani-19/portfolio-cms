import { useEffect, useState } from "react";
import axios from "axios";

function AboutEditor() {
  const API =
    "https://portfolio-cms-backend-8jty.onrender.com/api/home";

  const [about, setAbout] = useState({
    description: "",
    experience: "",
    education: "",
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
        description: response.data.about?.description || "",
        experience: response.data.about?.experience || "",
        education: response.data.about?.education || "",
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

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading About Section...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">

      <h1 className="text-4xl font-black mb-8">
        About Page Editor
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 space-y-6"
      >

        <div>
          <label className="block mb-2 text-gray-300">
            About Description
          </label>

          <textarea
            name="description"
            value={about.description}
            onChange={handleChange}
            rows="8"
            placeholder="Write your About description..."
            className="w-full bg-[#020617] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Experience
          </label>

          <input
            name="experience"
            value={about.experience}
            onChange={handleChange}
            placeholder="Example: Fresher"
            className="w-full bg-[#020617] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">
            Education
          </label>

          <input
            name="education"
            value={about.education}
            onChange={handleChange}
            placeholder="Example: B.Tech CSE"
            className="w-full bg-[#020617] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition disabled:opacity-50"
        >
          {saving ? "Saving..." : "💾 Save About Changes"}
        </button>

      </form>

    </div>
  );
}

export default AboutEditor;