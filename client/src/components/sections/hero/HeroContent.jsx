import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Button from "../../common/Button";
import Typewriter from "./Typewriter";
import MagneticButton from "../../common/MagneticButton";
import SocialLinks from "./SocialLinks";

import { getHome } from "../../../services/homeService";

function HeroContent() {
  const [home, setHome] = useState({
    greeting: "",
    name: "Loading...",
    roles: [],
    tagline: "",
    availableText: "",
    hireButton: "",
    resumeButton: "",
    resumeUrl: "",

    social: {
      github: "",
      linkedin: "",
      instagram: "",
      twitter: "",
      email: "",
      website: "",
    },

    stats: {
      projects: "",
      skills: "",
      certificates: "",
    },
  });

  useEffect(() => {
    loadHome();
  }, []);

  const loadHome = async () => {
    try {
      const data = await getHome();

      if (data) {
        setHome(data);
      }
    } catch (error) {
      console.error("Failed to load Home data:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {/* Greeting */}
      <p className="text-cyan-400 text-xl">
        {home.greeting}
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {home.name}
        </span>
      </h1>

      {/* Typewriter Roles */}
      <Typewriter roles={home.roles} />

      {/* Tagline */}
      <p className="text-gray-400 text-lg max-w-xl leading-8">
        {home.tagline}
      </p>

      {/* Available Badge */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-green-400 font-semibold">
            {home.availableText}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-5">
        <Link
          to="contact"
          smooth={true}
          duration={700}
          offset={-80}
        >
          <MagneticButton>
            <Button>
              {home.hireButton}
            </Button>
          </MagneticButton>
        </Link>

        {home.resumeUrl && (
          <MagneticButton>
            <a
              href={home.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                {home.resumeButton}
              </Button>
            </a>
          </MagneticButton>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-8 pt-4 max-w-md">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            {home.stats?.projects}
          </h3>

          <p className="text-gray-400 text-sm">
            Projects
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            {home.stats?.skills}
          </h3>

          <p className="text-gray-400 text-sm">
            Skills
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            {home.stats?.certificates}
          </h3>

          <p className="text-gray-400 text-sm">
            Certification
          </p>
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks social={home.social} />
    </motion.div>
  );
}

export default HeroContent;