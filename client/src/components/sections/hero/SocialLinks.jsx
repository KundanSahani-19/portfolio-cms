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
    {
      icon: <FaGithub />,
      url: social.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: social.instagram,
      label: "Instagram",
    },
    {
      icon: <FaTwitter />,
      url: social.twitter,
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      url: social.email
        ? `mailto:${social.email}`
        : "",
      label: "Email",
    },
    {
      icon: <FaGlobe />,
      url: social.website,
      label: "Website",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 pt-2">

      {links.map(
        (link, index) =>
          link.url && (
            <a
              key={index}
              href={link.url}
              target={
                link.label === "Email"
                  ? "_self"
                  : "_blank"
              }
              rel="noreferrer"
              aria-label={link.label}
              className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              {link.icon}
            </a>
          )
      )}

    </div>
  );
}

export default SocialLinks;