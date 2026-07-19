import { useState } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Divider from "../common/Divider";
import ProjectGrid from "./projects/ProjectGrid";
import ProjectFilter from "./projects/ProjectFilter";

function Projects() {
  const [active, setActive] = useState("All");

  return (
    <section
      id="projects"
      className="relative py-16 lg:py-16 overflow-hidden"
    >
      <Container>

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <ProjectFilter
          active={active}
          setActive={setActive}
        />

        <div className="mt-12">
          <ProjectGrid active={active} />
        </div>

        <div className="mt-16">
          <Divider />
        </div>

      </Container>
    </section>
  );
}

export default Projects;