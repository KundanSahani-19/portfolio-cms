import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import portfolioData from "../../../data/portfolioData";

function ContactSocial() {
  return (
    <div className="flex gap-5 pt-6">

      <a
        href={portfolioData.social.github}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black duration-300"
      >
        <FaGithub />
      </a>

      <a
        href={portfolioData.social.linkedin}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href={portfolioData.social.instagram}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black duration-300"
      >
        <FaInstagram />
      </a>

    </div>
  );
}

export default ContactSocial;