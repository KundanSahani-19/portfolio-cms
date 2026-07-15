import Container from "../../common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <HeroContent />
          <HeroImage />
        </div>

        <ScrollIndicator />
      </Container>
    </section>
  );
}

export default Hero;