import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

      setProjects(data || []);
    } catch (error) {
      console.error(error);
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
      tech: [...prev.tech, newTech.trim()],
    }));

    setNewTech("");
  };

  const removeTech = (index) => {
    setProject((prev) => ({
      ...prev,
      tech: prev.tech.filter((_, i) => i !== index),
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
      description: item.description || "",
      category: item.category || "",
      year: item.year || "",
      tech: item.tech || [],
      github: item.github || "",
      live: item.live || "",
      image: item.image || "",
      featured: item.featured || false,
    });

    setEditingId(item._id);

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

      alert("🗑️ Project Deleted Successfully");

      loadProjects();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to delete project");
    }
  };

  const cancelEdit = () => {
    setProject(emptyProject);
    setEditingId(null);
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
        Loading Projects...
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
        Projects
      </motion.h1>

      {/* FORM */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={glassCard}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 space-y-5 shadow-[0_12px_32px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]"
        >

          <h2 className="text-2xl font-bold text-[#1C1C1C]">
            {editingId ? "✏️ Edit Project" : "➕ Add New Project"}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Project Title"
              required
              className={inputClass}
            />

            <input
              name="category"
              value={project.category}
              onChange={handleChange}
              placeholder="Category e.g. React"
              className={inputClass}
            />

            <input
              name="year"
              value={project.year}
              onChange={handleChange}
              placeholder="Year e.g. 2026"
              className={inputClass}
            />

            <input
              name="image"
              value={project.image}
              onChange={handleChange}
              placeholder="Image URL"
              className={inputClass}
            />

            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              placeholder="Project Description"
              required
              rows="5"
              className={`${inputClass} md:col-span-2`}
            />

            <input
              name="github"
              value={project.github}
              onChange={handleChange}
              placeholder="GitHub URL"
              className={inputClass}
            />

            <input
              name="live"
              value={project.live}
              onChange={handleChange}
              placeholder="Live Demo URL"
              className={inputClass}
            />

          </div>

          {/* TECH STACK */}

          <div>
            <div className="flex gap-3">
              <input
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                placeholder="Add technology e.g. React"
                className={`flex-1 ${inputClass}`}
              />

              <motion.button
                type="button"
                onClick={addTech}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ y: 1, scale: 0.96 }}
                className="px-6 rounded-2xl font-bold text-[#FAFAFF]
                  bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
                  shadow-[0_4px_0_#000000,0_8px_14px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]"
              >
                Add
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <AnimatePresence>
                {project.tech.map((tech, index) => (
                  <motion.div
                    key={tech + index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex gap-2 items-center bg-[#ECEBE4] px-3 py-2 rounded-full
                      shadow-[2px_2px_5px_rgba(28,28,28,0.1),-2px_-2px_5px_rgba(255,255,255,0.9)]"
                  >
                    <span className="text-[#1C1C1C] text-sm">{tech}</span>

                    <motion.button
                      type="button"
                      onClick={() => removeTech(index)}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-rose-500"
                    >
                      ✕
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* FEATURED */}

          <label className="flex items-center gap-3 text-[#4A4A4A]">
            <input
              type="checkbox"
              checked={project.featured}
              onChange={(e) =>
                setProject({
                  ...project,
                  featured: e.target.checked,
                })
              }
              className="w-4 h-4 accent-[#1C1C1C]"
            />
            Featured Project
          </label>

          {/* BUTTONS */}

          <div className="flex gap-4">

            <motion.button
              type="submit"
              disabled={saving}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 1, scale: 0.97 }}
              className="px-8 py-4 rounded-2xl font-bold text-[#FAFAFF] relative overflow-hidden
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
                {saving ? "Saving..." : editingId ? "Update Project" : "Add Project"}
              </span>
            </motion.button>

            {editingId && (
              <motion.button
                type="button"
                onClick={cancelEdit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl font-bold text-[#1C1C1C] bg-white/40 backdrop-blur-xl
                  shadow-[4px_4px_10px_rgba(28,28,28,0.1),-4px_-4px_10px_rgba(255,255,255,0.85)]"
              >
                Cancel
              </motion.button>
            )}

          </div>

        </form>
      </motion.div>

      {/* PROJECT LIST */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {projects.map((item, i) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className={glassCard}
          >
            <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-5 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-xl mb-4 shadow-[0_6px_16px_rgba(28,28,28,0.15)]"
                />
              )}

              <h3 className="text-xl font-bold text-[#1C1C1C]">
                {item.title}
              </h3>

              <p className="text-[#4A4A4A] mt-1 font-medium">
                {item.category}
              </p>

              <p className="text-[#6B6B6B] mt-3 line-clamp-3 text-sm">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#ECEBE4] text-[#4A4A4A] px-2 py-1 rounded-full
                      shadow-[2px_2px_4px_rgba(28,28,28,0.1),-2px_-2px_4px_rgba(255,255,255,0.9)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5">

                <motion.button
                  onClick={() => handleEdit(item)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 1, scale: 0.96 }}
                  className="px-4 py-2 rounded-lg font-medium text-[#FAFAFF] text-sm
                    bg-gradient-to-b from-sky-400 to-sky-600
                    shadow-[0_3px_0_#0369A1,0_6px_12px_-2px_rgba(2,132,199,0.35)]"
                >
                  Edit
                </motion.button>

                <motion.button
                  onClick={() => handleDelete(item._id)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 1, scale: 0.96 }}
                  className="px-4 py-2 rounded-lg font-medium text-[#FAFAFF] text-sm
                    bg-gradient-to-b from-rose-400 to-rose-600
                    shadow-[0_3px_0_#9F1239,0_6px_12px_-2px_rgba(190,18,60,0.35)]"
                >
                  Delete
                </motion.button>

              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Projects;