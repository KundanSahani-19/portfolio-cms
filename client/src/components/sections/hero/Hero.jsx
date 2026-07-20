import { useEffect, useState } from "react";

import Container from "../../common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";
import HeroBackground from "./HeroBackground";
import HeroParticles from "./HeroParticles";
import AnimatedBackground from "./AnimatedBackground";

function Hero() {
  const [home, setHome] = useState({
    floatingSkills: [],
  });

  useEffect(() => {
    fetchHome();
  }, []);

  const fetchHome = async () => {
    try {
      const response = await fetch(
        "const API = "https://portfolio-cms-backend-8jty.onrender.com/api/home";"
      );

      const data = await response.json();

      if (data) {
        setHome(data);
      }
    } catch (error) {
      console.error("Failed to load home data:", error);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <HeroBackground />

      <HeroParticles />

      <AnimatedBackground />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <HeroContent />

          <HeroImage
            floatingSkills={home.floatingSkills || []}
            heroImage={home.heroImage || ""}
          />

        </div>

        <ScrollIndicator />
      </Container>
    </section>
  );
}

export default Hero;