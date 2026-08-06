import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

function SocialLinks({ social = {} }) {
  const links = [
    { icon: <FaGithub />, url: social.github, label: "GitHub" },
    { icon: <FaLinkedin />, url: social.linkedin, label: "LinkedIn" },
    { icon: <FaInstagram />, url: social.instagram, label: "Instagram" },
    { icon: <FaTwitter />, url: social.twitter, label: "Twitter" },
    {
      icon: <FaEnvelope />,
      url: social.email ? `mailto:${social.email}` : "",
      label: "Email",
    },
    { icon: <FaGlobe />, url: social.website, label: "Website" },
  ];

  return (
    <div className="flex flex-wrap gap-4 pt-2">

      {links.map(
        (link, index) =>
          link.url && (
            <motion.a
              key={index}
              href={link.url}
              target={link.label === "Email" ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={link.label}
              whileHover={{ y: -5, scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.92 }}
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#1C1C1C]
                bg-gradient-to-br from-white to-[#ECEBE4]
                shadow-[5px_5px_10px_rgba(28,28,28,0.12),-5px_-5px_10px_rgba(255,255,255,0.9)]
                hover:shadow-[0_0_18px_rgba(28,28,28,0.2)] transition-shadow duration-300"
            >
              {link.icon}
            </motion.a>
          )
      )}

    </div>
  );
}

export default SocialLinks;