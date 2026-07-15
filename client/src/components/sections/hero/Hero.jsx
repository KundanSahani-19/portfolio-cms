import Container from "../../common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";
import BackgroundGlow from "./BackgroundGlow";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <BackgroundGlow />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <HeroContent />
          <HeroImage />
        </div>

        <ScrollIndicator />
      </Container>
    </section>
  );
}

export default Hero;