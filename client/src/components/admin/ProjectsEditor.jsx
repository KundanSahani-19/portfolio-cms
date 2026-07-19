import { useEffect, useState } from "react";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";

function ProjectsEditor() {
  const emptyProject = {
    title: "",
    description: "",
    techStack: [],
    github: "",
    liveDemo: "",
    image: "",
  };

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(emptyProject);
  const [newTech, setNewTech] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();

      setProjects(data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTech = () => {
    if (!newTech.trim()) return;

    setProject((prev) => ({
      ...prev,
      techStack: [
        ...prev.techStack,
        newTech.trim(),
      ],
    }));

    setNewTech("");
  };

  const removeTech = (index) => {
    setProject((prev) => ({
      ...prev,
      techStack: prev.techStack.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (editingId) {
        await updateProject(editingId, project);

        alert("✅ Project Updated Successfully");
      } else {
        await createProject(project);

        alert("✅ Project Added Successfully");
      }

      setProject(emptyProject);
      setEditingId(null);

      await loadProjects();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "❌ Failed to save project"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item._id);

    setProject({
      title: item.title || "",
      description: item.description || "",
      techStack: item.techStack || [],
      github: item.github || "",
      liveDemo: item.liveDemo || "",
      image: item.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);

      alert("✅ Project Deleted");

      await loadProjects();
    } catch (error) {
      alert("❌ Failed to delete project");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);

    setProject(emptyProject);
  };

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Projects...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      <h1 className="text-4xl font-black mb-8">
        Projects Editor
      </h1>

      {/* ================= FORM ================= */}

      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 space-y-6"
      >

        <h2 className="text-2xl font-bold text-cyan-400">
          {editingId
            ? "✏️ Edit Project"
            : "➕ Add New Project"}
        </h2>

        <input
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Project Title"
          required
          className="w-full bg-[#020617] border border-white/10 p-4 rounded-xl"
        />

        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Project Description"
          rows="5"
          required
          className="w-full bg-[#020617] border border-white/10 p-4 rounded-xl"
        />

        <input
          name="image"
          value={project.image}
          onChange={handleChange}
          placeholder="Project Image URL"
          className="w-full bg-[#020617] border border-white/10 p-4 rounded-xl"
        />

        <div className="flex gap-3">

          <input
            value={newTech}
            onChange={(e) => setNewTech(e.target.value)}
            placeholder="Example: React"
            className="flex-1 bg-[#020617] border border-white/10 p-4 rounded-xl"
          />

          <button
            type="button"
            onClick={addTech}
            className="bg-cyan-400 text-black px-6 rounded-xl font-bold"
          >
            Add
          </button>

        </div>

        <div className="flex flex-wrap gap-3">

          {project.techStack.map((tech, index) => (
            <div
              key={index}
              className="flex gap-2 items-center bg-[#020617] px-4 py-2 rounded-xl"
            >
              <span>{tech}</span>

              <button
                type="button"
                onClick={() => removeTech(index)}
                className="text-red-400"
              >
                ✕
              </button>
            </div>
          ))}

        </div>

        <input
          name="github"
          value={project.github}
          onChange={handleChange}
          placeholder="GitHub URL"
          className="w-full bg-[#020617] border border-white/10 p-4 rounded-xl"
        />

        <input
          name="liveDemo"
          value={project.liveDemo}
          onChange={handleChange}
          placeholder="Live Demo URL"
          className="w-full bg-[#020617] border border-white/10 p-4 rounded-xl"
        />

        <div className="flex gap-4">

          <button
            type="submit"
            disabled={saving}
            className="flex-1 bg-cyan-400 text-black py-4 rounded-xl font-bold"
          >
            {saving
              ? "Saving..."
              : editingId
              ? "Update Project"
              : "Add Project"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="px-8 bg-gray-700 rounded-xl"
            >
              Cancel
            </button>
          )}

        </div>

      </form>

      {/* ================= PROJECT LIST ================= */}

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((item) => (
          <div
            key={item._id}
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-5"
          >

            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}

            <h3 className="text-xl font-bold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">

              {item.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}

            </div>

            <div className="flex gap-3 mt-5">

              <button
                onClick={() => handleEdit(item)}
                className="flex-1 bg-blue-500 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="flex-1 bg-red-500 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ProjectsEditor;