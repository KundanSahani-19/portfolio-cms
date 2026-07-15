import { motion } from "framer-motion";
import portfolioData from "../../../data/portfolioData";
import Button from "../../common/Button";
import SocialLinks from "./SocialLinks";
import Typewriter from "./Typewriter";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <p className="text-cyan-400 text-xl">
        👋 Hello, I'm
      </p>

      <h1 className="text-6xl md:text-8xl font-black leading-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {portfolioData.personal.name}
        </span>
      </h1>

      <Typewriter />

      <p className="text-gray-400 text-lg max-w-xl leading-8">
        {portfolioData.personal.tagline}
      </p>

      <div className="flex gap-5">
        <Button>Hire Me</Button>

        <Button variant="outline">
          Download Resume
        </Button>
      </div>

      <SocialLinks />
    </motion.div>
  );
}

export default HeroContent;