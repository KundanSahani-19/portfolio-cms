import { useState } from "react";
import portfolioData from "../../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function ProjectGrid({ active }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    active === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (item) => item.category === active
        );

  return (
    <>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

        {filtered.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default ProjectGrid;