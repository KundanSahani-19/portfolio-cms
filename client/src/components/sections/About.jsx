import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import AboutContent from "./about/AboutContent";
import AboutImage from "./about/AboutImage";

function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-24"
    >
      <Container>

        <SectionTitle
          subtitle="About Me"
          title="Who Am I?"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <AboutImage />

          <AboutContent />

        </div>

      </Container>
    </section>
  );
}

export default About;