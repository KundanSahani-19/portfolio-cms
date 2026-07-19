import { useEffect, useState } from "react";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../../services/projectService";

function Projects() {
  const emptyProject = {
    title: "",
    description: "",
    category: "",
    year: "",
    tech: [],
    github: "",
    live: "",
    image: "",
    featured: false,
  };

  const [projects, setProjects] =
    useState([]);

  const [project, setProject] =
    useState(emptyProject);

  const [newTech, setNewTech] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data =
        await getProjects();

      setProjects(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTech = () => {
    if (!newTech.trim()) return;

    setProject((prev) => ({
      ...prev,

      tech: [
        ...prev.tech,
        newTech.trim(),
      ],
    }));

    setNewTech("");
  };

  const removeTech = (index) => {
    setProject((prev) => ({
      ...prev,

      tech: prev.tech.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (editingId) {
        await updateProject(
          editingId,
          project
        );

        alert(
          "✅ Project Updated Successfully"
        );
      } else {
        await createProject(project);

        alert(
          "✅ Project Added Successfully"
        );
      }

      setProject(emptyProject);
      setEditingId(null);

      await loadProjects();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to save project"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setProject({
      title: item.title || "",
      description:
        item.description || "",
      category:
        item.category || "",
      year: item.year || "",
      tech: item.tech || [],
      github: item.github || "",
      live: item.live || "",
      image: item.image || "",
      featured:
        item.featured || false,
    });

    setEditingId(item._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this project?"
      );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);

      alert(
        "🗑️ Project Deleted Successfully"
      );

      loadProjects();
    } catch (error) {
      console.error(error);

      alert(
        "❌ Failed to delete project"
      );
    }
  };

  const cancelEdit = () => {
    setProject(emptyProject);
    setEditingId(null);
  };

  if (loading) {
    return (
      <div className="text-xl">
        Loading Projects...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      <h1 className="text-4xl font-black mb-8">
        Projects
      </h1>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 space-y-5"
      >

        <h2 className="text-2xl font-bold text-cyan-400">
          {editingId
            ? "✏️ Edit Project"
            : "➕ Add New Project"}
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
            className="bg-[#020617] p-4 rounded-xl"
          />

          <input
            name="category"
            value={project.category}
            onChange={handleChange}
            placeholder="Category e.g. React"
            className="bg-[#020617] p-4 rounded-xl"
          />

          <input
            name="year"
            value={project.year}
            onChange={handleChange}
            placeholder="Year e.g. 2026"
            className="bg-[#020617] p-4 rounded-xl"
          />

          <input
            name="image"
            value={project.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="bg-[#020617] p-4 rounded-xl"
          />

          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Project Description"
            required
            rows="5"
            className="bg-[#020617] p-4 rounded-xl md:col-span-2"
          />

          <input
            name="github"
            value={project.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="bg-[#020617] p-4 rounded-xl"
          />

          <input
            name="live"
            value={project.live}
            onChange={handleChange}
            placeholder="Live Demo URL"
            className="bg-[#020617] p-4 rounded-xl"
          />

        </div>

        {/* TECH STACK */}

        <div>

          <div className="flex gap-3">

            <input
              value={newTech}
              onChange={(e) =>
                setNewTech(
                  e.target.value
                )
              }
              placeholder="Add technology e.g. React"
              className="flex-1 bg-[#020617] p-4 rounded-xl"
            />

            <button
              type="button"
              onClick={addTech}
              className="bg-cyan-400 text-black px-6 rounded-xl font-bold"
            >
              Add
            </button>

          </div>

          <div className="flex flex-wrap gap-3 mt-4">

            {project.tech.map(
              (tech, index) => (

                <div
                  key={index}
                  className="flex gap-2 items-center bg-cyan-400/10 text-cyan-300 px-3 py-2 rounded-full"
                >

                  {tech}

                  <button
                    type="button"
                    onClick={() =>
                      removeTech(index)
                    }
                    className="text-red-400"
                  >
                    ✕
                  </button>

                </div>

              )
            )}

          </div>

        </div>

        {/* FEATURED */}

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={project.featured}
            onChange={(e) =>
              setProject({
                ...project,
                featured:
                  e.target.checked,
              })
            }
          />

          Featured Project
        </label>

        {/* BUTTONS */}

        <div className="flex gap-4">

          <button
            type="submit"
            disabled={saving}
            className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold"
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
              className="bg-gray-600 px-8 py-4 rounded-xl font-bold"
            >
              Cancel
            </button>

          )}

        </div>

      </form>

      {/* PROJECT LIST */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {projects.map((item) => (

          <div
            key={item._id}
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-5"
          >

            {item.image && (

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

            )}

            <h3 className="text-xl font-bold">
              {item.title}
            </h3>

            <p className="text-cyan-400 mt-1">
              {item.category}
            </p>

            <p className="text-gray-400 mt-3 line-clamp-3">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">

              {item.tech?.map(
                (tech, index) => (

                  <span
                    key={index}
                    className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>

                )
              )}

            </div>

            <div className="flex gap-3 mt-5">

              <button
                onClick={() =>
                  handleEdit(item)
                }
                className="bg-blue-500 px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDelete(item._id)
                }
                className="bg-red-500 px-4 py-2 rounded-lg"
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

export default Projects;