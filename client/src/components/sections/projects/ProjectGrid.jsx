import portfolioData from "../../../data/portfolioData";
import ProjectCard from "./ProjectCard";

function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {portfolioData.projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;