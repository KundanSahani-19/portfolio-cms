import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { getProjects } from "../../../services/projectService";

function ProjectGrid({ active }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = useMemo(() => {
    if (active === "All") return projects;

    return projects.filter(
      (item) => item.category === active
    );
  }, [projects, active]);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            w-14
            h-14
            rounded-full
            border-[5px]
            border-[#DADDD8]
            border-t-[#1C1C1C]
          "
        />
      </div>
    );
  }

  if (!filteredProjects.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          text-center
          py-20
          text-[#666]
          text-lg
        "
      >
        No Projects Found.
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        layout
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-10
        "
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project._id}
            layout
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
          >
            <ProjectCard
              project={project}
              onClick={() =>
                setSelectedProject(project)
              }
            />
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default ProjectGrid;