import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { getProjects } from "../../../services/projectService";

function ProjectGrid({ active }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] =
    useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();

      setProjects(data || []);
    } catch (error) {
      console.error(
        "Failed to load projects:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (item) => item.category === active
        );

  if (loading) {
    return (
      <p className="text-gray-400">
        Loading projects...
      </p>
    );
  }

  if (!filtered.length) {
    return (
      <p className="text-gray-400">
        No projects available.
      </p>
    );
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onClick={() =>
              setSelectedProject(project)
            }
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  );
}

export default ProjectGrid;