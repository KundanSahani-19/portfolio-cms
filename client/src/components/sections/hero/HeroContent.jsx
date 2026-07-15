import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolioData from "../../../data/portfolioData";
import Button from "../../common/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <p className="text-cyan-400 text-lg">
        👋 Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {portfolioData.personal.name}
        </span>
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-300">
        {portfolioData.personal.role}
      </h2>

      <p className="text-gray-400 max-w-xl leading-8">
        {portfolioData.personal.tagline}
      </p>

      <div className="flex gap-4">
        <Button>Hire Me</Button>

        <Button variant="outline">
          Download Resume
        </Button>
      </div>

      <div className="flex gap-6 text-2xl text-gray-400">

        <a
          href={portfolioData.social.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-cyan-400 transition" />
        </a>

        <a
          href={portfolioData.social.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-cyan-400 transition" />
        </a>

        <a href={portfolioData.social.email}>
          <FaEnvelope className="hover:text-cyan-400 transition" />
        </a>

      </div>
    </motion.div>
  );
}

export default HeroContent;