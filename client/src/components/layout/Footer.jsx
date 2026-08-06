import { motion } from "framer-motion";
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

  const socials = [
    { icon: FaGithub, href: portfolioData.social.github },
    { icon: FaLinkedin, href: portfolioData.social.linkedin },
    { icon: FaInstagram, href: portfolioData.social.instagram },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <footer className="relative mt-32 overflow-hidden bg-gradient-to-b from-[#EEF0F2] to-[#ECEBE4]">

      {/* animated ambient glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#DADDD8]/70 blur-[140px]"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-24 w-96 h-96 rounded-full bg-[#1C1C1C]/[0.06] blur-[160px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">

          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            whileHover={{ y: -4 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/60"
          >
            <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_30px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <motion.h2
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#1C1C1C] via-[#6B6B6B] to-[#1C1C1C] bg-[length:200%_auto]"
              >
                Kundan<span className="text-[#6B6B6B]">.</span>
              </motion.h2>

              <p className="mt-4 text-[#4A4A4A] leading-7 text-sm">
                Passionate Full Stack Developer building modern,
                scalable and responsive web applications using
                MERN Stack, Java and Spring Boot.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            whileHover={{ y: -4 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/60"
          >
            <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_30px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <h3 className="text-lg font-bold mb-5 text-[#1C1C1C]">Quick Links</h3>

              <div className="space-y-2">
                {links.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={item}
                      smooth
                      duration={600}
                      offset={-80}
                      className="group relative block w-fit cursor-pointer text-[#4A4A4A] hover:text-[#1C1C1C] transition capitalize text-sm"
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#1C1C1C] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            whileHover={{ y: -4 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/60"
          >
            <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_30px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <h3 className="text-lg font-bold mb-5 text-[#1C1C1C]">Contact</h3>

              <div className="space-y-4">
                <motion.div whileHover={{ x: 4 }} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl bg-[#ECEBE4] flex items-center justify-center shrink-0 shadow-[3px_3px_6px_rgba(28,28,28,0.12),-3px_-3px_6px_rgba(255,255,255,0.9)]">
                    <FaEnvelope className="text-[#1C1C1C] text-xs" />
                  </div>
                  <p className="text-[#4A4A4A] break-all text-sm mt-1.5">
                    {portfolioData.personal.email}
                  </p>
                </motion.div>

                <motion.div whileHover={{ x: 4 }} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl bg-[#ECEBE4] flex items-center justify-center shrink-0 shadow-[3px_3px_6px_rgba(28,28,28,0.12),-3px_-3px_6px_rgba(255,255,255,0.9)]">
                    <FaMapMarkerAlt className="text-[#1C1C1C] text-xs" />
                  </div>
                  <p className="text-[#4A4A4A] text-sm mt-1.5">
                    {portfolioData.personal.location}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            whileHover={{ y: -4 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/60"
          >
            <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_30px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <h3 className="text-lg font-bold mb-5 text-[#1C1C1C]">Connect With Me</h3>

              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ y: -8, scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-[#1C1C1C]
                      bg-gradient-to-br from-white to-[#ECEBE4]
                      shadow-[5px_5px_10px_rgba(28,28,28,0.12),-5px_-5px_10px_rgba(255,255,255,0.9)]
                      hover:shadow-[0_0_20px_rgba(28,28,28,0.2)]"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-[#1C1C1C]/10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-[#6B6B6B] text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kundan Kumar Sahani.
            Crafted with ❤️ using React & Tailwind CSS.
          </p>

          <Link to="home" smooth duration={700} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              whileHover={{ scale: 1.15, y: -10 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center
                bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C] text-[#FAFAFF]
                shadow-[0_5px_0_#000000,0_10px_20px_-4px_rgba(28,28,28,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)]"
            >
              <FaArrowUp />
            </motion.div>
          </Link>
        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;