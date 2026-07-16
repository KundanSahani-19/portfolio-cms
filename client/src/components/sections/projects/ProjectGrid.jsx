import portfolioData from "../../../data/portfolioData";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ active }) {

  const filtered =
    active === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((item) =>
          item.category === active
        );

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

      {filtered.map((project) => (

        <ProjectCard
          key={project.title}
          project={project}
        />

      ))}

    </div>
  );
}

export default ProjectGrid;