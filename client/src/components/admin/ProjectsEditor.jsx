import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const inputClass =
    "w-full bg-white/40 backdrop-blur-xl text-[#1C1C1C] placeholder:text-[#8A8A8A] p-4 rounded-2xl outline-none " +
    "shadow-[inset_3px_3px_8px_rgba(28,28,28,0.1),inset_-3px_-3px_8px_rgba(255,255,255,0.8)] " +
    "focus:shadow-[inset_3px_3px_8px_rgba(28,28,28,0.14),inset_-3px_-3px_8px_rgba(255,255,255,0.9),0_0_0_2px_rgba(28,28,28,0.15)] " +
    "transition-all duration-300";

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
        Projects Editor
      </motion.h1>

      {/* ================= FORM ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 space-y-6 shadow-[0_12px_32px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]"
        >

          <h2 className="text-2xl font-bold text-[#1C1C1C]">
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
            className={inputClass}
          />

          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Project Description"
            rows="5"
            required
            className={inputClass}
          />

          <input
            name="image"
            value={project.image}
            onChange={handleChange}
            placeholder="Project Image URL"
            className={inputClass}
          />

          <div className="flex gap-3">

            <input
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Example: React"
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

          <div className="flex flex-wrap gap-3">

            <AnimatePresence>
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={tech + index}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex gap-2 items-center bg-[#ECEBE4] px-4 py-2 rounded-xl
                    shadow-[3px_3px_6px_rgba(28,28,28,0.12),-3px_-3px_6px_rgba(255,255,255,0.9)]"
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

          <input
            name="github"
            value={project.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className={inputClass}
          />

          <input
            name="liveDemo"
            value={project.liveDemo}
            onChange={handleChange}
            placeholder="Live Demo URL"
            className={inputClass}
          />

          <div className="flex gap-4">

            <motion.button
              type="submit"
              disabled={saving}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 1, scale: 0.97 }}
              className="flex-1 py-4 rounded-2xl font-bold text-[#FAFAFF] relative overflow-hidden
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
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update Project"
                  : "Add Project"}
              </span>
            </motion.button>

            {editingId && (
              <motion.button
                type="button"
                onClick={cancelEdit}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 rounded-2xl text-[#1C1C1C] bg-white/40 backdrop-blur-xl
                  shadow-[4px_4px_10px_rgba(28,28,28,0.1),-4px_-4px_10px_rgba(255,255,255,0.85)]"
              >
                Cancel
              </motion.button>
            )}

          </div>

        </form>
      </motion.div>

      {/* ================= PROJECT LIST ================= */}

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((item, i) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70"
          >
            <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-5 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 shadow-[0_6px_16px_rgba(28,28,28,0.15)]"
                />
              )}

              <h3 className="text-xl font-bold text-[#1C1C1C]">
                {item.title}
              </h3>

              <p className="text-[#6B6B6B] mt-2 text-sm">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                {item.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#ECEBE4] text-[#4A4A4A] px-3 py-1 rounded-full
                      shadow-[2px_2px_5px_rgba(28,28,28,0.1),-2px_-2px_5px_rgba(255,255,255,0.9)]"
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
                  className="flex-1 py-2.5 rounded-xl font-semibold text-[#FAFAFF] text-sm
                    bg-gradient-to-b from-sky-400 to-sky-600
                    shadow-[0_3px_0_#0369A1,0_6px_12px_-2px_rgba(2,132,199,0.35)]"
                >
                  Edit
                </motion.button>

                <motion.button
                  onClick={() => handleDelete(item._id)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 1, scale: 0.96 }}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-[#FAFAFF] text-sm
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

export default ProjectsEditor;