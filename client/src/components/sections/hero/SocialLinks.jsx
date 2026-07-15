import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import portfolioData from "../../../data/portfolioData";

function SocialLinks() {
  return (
    <div className="flex gap-6 pt-2">

      <a
        href={portfolioData.social.github}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all"
      >
        <FaGithub />
      </a>

      <a
        href={portfolioData.social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all"
      >
        <FaLinkedin />
      </a>

      <a
        href={portfolioData.social.email}
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialLinks;