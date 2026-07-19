import { useEffect, useState } from "react";
import axios from "axios";

function Experience() {
  const API = "http://localhost:8000/api/experiences";

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

  // =========================
  // FETCH EXPERIENCES
  // =========================

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(API);

      setExperiences(response.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch experiences:",
        error
      );
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
      [name]: value,
    }));
  };

  // =========================
  // ADD EXPERIENCE
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.company || !form.role) {
      alert(
        "⚠️ Company and Role are required"
      );

      return;
    }

    try {
      setSaving(true);

      const token =
        localStorage.getItem("token");

      const experienceData = {
        ...form,

        technologies: form.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean),
      };

      await axios.post(
        API,
        experienceData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "✅ Experience Added Successfully"
      );

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

  // =========================
  // DELETE EXPERIENCE
  // =========================

  const deleteExperience = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this experience?"
      );

    if (!confirmDelete) return;

    try {
      const token =
        localStorage.getItem("token");

      await axios.delete(
        `${API}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "🗑 Experience Deleted"
      );

      fetchExperiences();

    } catch (error) {
      console.error(error);

      alert(
        "❌ Failed to delete experience"
      );
    }
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Experience...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      {/* =========================
          TITLE
      ========================= */}

      <h1 className="text-4xl font-black mb-8">
        Experience Management
      </h1>


      {/* =========================
          ADD FORM
      ========================= */}

      <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 mb-10">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          ➕ Add New Experience
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          {/* COMPANY */}

          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            required
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* ROLE */}

          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Your Role"
            required
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* LOCATION */}

          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* START DATE */}

          <input
            type="text"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            placeholder="Start Date (Jan 2025)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* END DATE */}

          <input
            type="text"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            placeholder="End Date (Present)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* COMPANY URL */}

          <input
            type="url"
            name="companyUrl"
            value={form.companyUrl}
            onChange={handleChange}
            placeholder="Company Website URL"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* TECHNOLOGIES */}

          <input
            type="text"
            name="technologies"
            value={form.technologies}
            onChange={handleChange}
            placeholder="Technologies: React, Node.js, MongoDB"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl md:col-span-2"
          />


          {/* DESCRIPTION */}

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your work..."
            rows="5"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl md:col-span-2"
          />


          {/* BUTTON */}

          <button
            type="submit"
            disabled={saving}
            className="md:col-span-2 bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300 duration-300 disabled:opacity-50"
          >
            {saving
              ? "Adding..."
              : "➕ Add Experience"}
          </button>

        </form>

      </div>


      {/* =========================
          EXPERIENCE LIST
      ========================= */}

      <div className="space-y-6">

        {experiences.length === 0 ? (

          <p className="text-gray-400">
            No experience found. Add your first experience.
          </p>

        ) : (

          experiences.map((experience) => (

            <div
              key={experience._id}
              className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
            >

              {/* HEADER */}

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <h2 className="text-2xl font-bold">
                    {experience.role}
                  </h2>

                  <p className="text-cyan-400 text-lg">
                    {experience.company}
                  </p>

                  {experience.location && (
                    <p className="text-gray-400">
                      📍 {experience.location}
                    </p>
                  )}

                </div>


                <div className="text-gray-400">

                  {experience.startDate}

                  {" - "}

                  {experience.endDate}

                </div>

              </div>


              {/* DESCRIPTION */}

              {experience.description && (

                <p className="text-gray-400 leading-7 mt-5">
                  {experience.description}
                </p>

              )}


              {/* TECHNOLOGIES */}

              {experience.technologies?.length > 0 && (

                <div className="flex flex-wrap gap-2 mt-5">

                  {experience.technologies.map(
                    (tech, index) => (

                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm"
                      >
                        {tech}
                      </span>

                    )
                  )}

                </div>

              )}


              {/* DELETE */}

              <button
                onClick={() =>
                  deleteExperience(
                    experience._id
                  )
                }
                className="mt-6 border border-red-400/40 text-red-400 px-5 py-3 rounded-xl hover:bg-red-400 hover:text-black duration-300"
              >
                🗑 Delete Experience
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Experience;