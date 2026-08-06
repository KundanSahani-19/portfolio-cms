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

  const nameLetters = (home.name || "").split("");

  const containerStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Greeting */}
      <motion.p
        variants={fadeUpItem}
        animate={{ x: [0, 4, 0] }}
        transition={{ x: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="text-[#4A4A4A] text-xl font-medium"
      >
        {home.greeting}
      </motion.p>

      {/* Name — letter by letter reveal */}
      <motion.h1
        variants={fadeUpItem}
        className="text-5xl md:text-6xl lg:text-7xl font-black leading-none flex flex-wrap"
      >
        {nameLetters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3 + i * 0.04, duration: 0.5, ease: "easeOut" }}
            style={{ display: "inline-block" }}
            className="bg-gradient-to-r from-[#1C1C1C] via-[#6B6B6B] to-[#1C1C1C] bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Typewriter Roles */}
      <motion.div variants={fadeUpItem}>
        <Typewriter roles={home.roles} />
      </motion.div>

      {/* Tagline */}
      <motion.p
        variants={fadeUpItem}
        className="text-[#6B6B6B] text-lg max-w-xl leading-8"
      >
        {home.tagline}
      </motion.p>

      {/* Available Badge */}
      <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4 items-center">
        <motion.div
          animate={{
            boxShadow: [
              "3px 3px 8px rgba(28,28,28,0.1), -3px -3px 8px rgba(255,255,255,0.85)",
              "3px 3px 14px rgba(28,28,28,0.16), -3px -3px 14px rgba(255,255,255,0.95)",
              "3px 3px 8px rgba(28,28,28,0.1), -3px -3px 8px rgba(255,255,255,0.85)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-xl"
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-emerald-500"
          />

          <span className="text-[#1C1C1C] font-semibold">
            {home.availableText}
          </span>
        </motion.div>
      </motion.div>

      {/* Buttons */}
      <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-5">
        <Link to="contact" smooth={true} duration={700} offset={-80}>
          <MagneticButton>
            <Button>{home.hireButton}</Button>
          </MagneticButton>
        </Link>

        {home.resumeUrl && (
          <MagneticButton>
            <a href={home.resumeUrl} target="_blank" rel="noreferrer">
              <Button variant="outline">{home.resumeButton}</Button>
            </a>
          </MagneticButton>
        )}
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={fadeUpItem} className="grid grid-cols-3 gap-6 pt-4 max-w-md">

        {[
          { label: "Projects", value: home.stats?.projects },
          { label: "Skills", value: home.stats?.skills },
          { label: "Certification", value: home.stats?.certificates },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.08, rotate: [0, -2, 2, 0] }}
            className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-white to-[#DADDD8]/70"
          >
            <div className="text-center bg-white/35 backdrop-blur-xl rounded-[15px] py-3 shadow-[0_6px_18px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden relative">

              <motion.div
                animate={{ x: ["-60%", "160%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                  repeatDelay: 2,
                }}
                className="absolute -inset-y-4 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 pointer-events-none"
              />

              <h3 className="text-3xl font-black relative z-10 bg-gradient-to-b from-[#1C1C1C] to-[#4A4A4A] bg-clip-text text-transparent">
                {stat.value}
              </h3>

              <p className="text-[#6B6B6B] text-sm mt-1 relative z-10">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}

      </motion.div>

      {/* Social Links */}
      <motion.div variants={fadeUpItem}>
        <SocialLinks social={home.social} />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;