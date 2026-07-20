import { useEffect, useState } from "react";
import axios from "axios";

function Education() {
  const API = "https://YOUR-RENDER-URL.onrender.com/api/educations";

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

  // =========================
  // FETCH EDUCATION
  // =========================

  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      const response = await axios.get(API);

      setEducations(response.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch education:",
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
  // ADD EDUCATION
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.degree || !form.institution) {
      alert(
        "⚠️ Degree and Institution are required"
      );

      return;
    }

    try {
      setSaving(true);

      const token =
        localStorage.getItem("token");

      await axios.post(API, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(
        "✅ Education Added Successfully"
      );

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

  // =========================
  // DELETE EDUCATION
  // =========================

  const deleteEducation = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this education?"
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

      alert("🗑 Education Deleted");

      fetchEducations();

    } catch (error) {
      console.error(error);

      alert(
        "❌ Failed to delete education"
      );
    }
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Education...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      {/* TITLE */}

      <h1 className="text-4xl font-black mb-8">
        Education Management
      </h1>


      {/* ADD FORM */}

      <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 mb-10">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          ➕ Add New Education
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          {/* DEGREE */}

          <input
            type="text"
            name="degree"
            value={form.degree}
            onChange={handleChange}
            placeholder="Degree (B.Tech Computer Science)"
            required
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* INSTITUTION */}

          <input
            type="text"
            name="institution"
            value={form.institution}
            onChange={handleChange}
            placeholder="Institution Name"
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


          {/* START YEAR */}

          <input
            type="text"
            name="startYear"
            value={form.startYear}
            onChange={handleChange}
            placeholder="Start Year (2023)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* END YEAR */}

          <input
            type="text"
            name="endYear"
            value={form.endYear}
            onChange={handleChange}
            placeholder="End Year (2027)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* GRADE */}

          <input
            type="text"
            name="grade"
            value={form.grade}
            onChange={handleChange}
            placeholder="CGPA / Percentage"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          {/* INSTITUTION URL */}

          <input
            type="url"
            name="institutionUrl"
            value={form.institutionUrl}
            onChange={handleChange}
            placeholder="Institution Website URL"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl md:col-span-2"
          />


          {/* DESCRIPTION */}

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description..."
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
              : "➕ Add Education"}
          </button>

        </form>

      </div>


      {/* EDUCATION LIST */}

      <div className="grid md:grid-cols-2 gap-6">

        {educations.length === 0 ? (

          <p className="text-gray-400">
            No education found. Add your first education.
          </p>

        ) : (

          educations.map((education) => (

            <div
              key={education._id}
              className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
            >

              {/* DEGREE */}

              <h2 className="text-2xl font-bold">
                {education.degree}
              </h2>


              {/* INSTITUTION */}

              <p className="text-cyan-400 text-lg mt-2">
                {education.institution}
              </p>


              {/* LOCATION */}

              {education.location && (

                <p className="text-gray-400 mt-2">
                  📍 {education.location}
                </p>

              )}


              {/* YEAR */}

              <p className="text-gray-400 mt-3">
                {education.startYear}
                {" - "}
                {education.endYear}
              </p>


              {/* GRADE */}

              {education.grade && (

                <p className="text-cyan-400 mt-3">
                  🎓 {education.grade}
                </p>

              )}


              {/* DESCRIPTION */}

              {education.description && (

                <p className="text-gray-400 leading-7 mt-4">
                  {education.description}
                </p>

              )}


              {/* WEBSITE */}

              {education.institutionUrl && (

                <a
                  href={education.institutionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-cyan-400 hover:text-cyan-300"
                >
                  Visit Institution →
                </a>

              )}


              {/* DELETE */}

              <button
                onClick={() =>
                  deleteEducation(
                    education._id
                  )
                }
                className="mt-6 w-full border border-red-400/40 text-red-400 py-3 rounded-xl hover:bg-red-400 hover:text-black duration-300"
              >
                🗑 Delete Education
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Education;