import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import portfolioData from "../../data/portfolioData";

function Footer() {
  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[#030712]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-black">
              Kundan
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Passionate Full Stack Developer building modern,
              scalable and responsive web applications using
              MERN Stack, Java and Spring Boot.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              {links.map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth
                  duration={600}
                  offset={-80}
                  className="block cursor-pointer text-gray-400 hover:text-cyan-400 transition capitalize"
                >
                  {item}
                </Link>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaEnvelope className="text-cyan-400 mt-1" />

                <p className="text-gray-400 break-all">
                  {portfolioData.personal.email}
                </p>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-cyan-400 mt-1" />

                <p className="text-gray-400">
                  {portfolioData.personal.location}
                </p>

              </div>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href={portfolioData.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Kundan Kumar Sahani.
            Crafted with ❤️ using React & Tailwind CSS.
          </p>

          <Link
            to="home"
            smooth
            duration={700}
            className="cursor-pointer w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowUp />
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;