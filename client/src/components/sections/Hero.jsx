import portfolioData from "../../data/portfolioData";
import Button from "../common/Button";
import Container from "../common/Container";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
    >
      <Container>
        <div className="text-center">

          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-bold">
            {portfolioData.personal.name}
          </h1>

          <h2 className="text-2xl md:text-4xl mt-6 text-gray-400">
            {portfolioData.personal.role}
          </h2>

          <div className="flex justify-center gap-5 mt-10">
            <Button>Hire Me</Button>

            <Button variant="outline">
              Download CV
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;