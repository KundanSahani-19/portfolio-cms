import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import EducationTimeline from "./EducationTimeline";

function Education() {
  return (
    <section id="education" className="py-24">
      <Container>
        <SectionTitle
          subtitle="Education"
          title="Academic Journey"
        />

        <EducationTimeline />
      </Container>
    </section>
  );
}

export default Education;