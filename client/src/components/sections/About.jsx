import portfolioData from "../../data/portfolioData";
import Container from "../common/Container";

function About() {
  return (
    <section id="about" lassName="py-24" >
      <Container>
        <h2 className="text-4xl font-bold mb-8">
          {portfolioData.about.title}
        </h2>

        <p className="text-gray-400 text-lg leading-8">
          {portfolioData.about.description}
        </p>
      </Container>
    </section>
  );
}

export default About;