import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolioData from "../../../data/portfolioData";

function SocialLinks() {
  return (
    <div className="flex gap-6 text-2xl text-gray-400">

      <a
        href={portfolioData.social.github}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="hover:text-cyan-400 transition duration-300" />
      </a>

      <a
        href={portfolioData.social.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
      </a>

      <a href={portfolioData.social.email}>
        <FaEnvelope className="hover:text-cyan-400 transition duration-300" />
      </a>

    </div>
  );
}

export default SocialLinks;