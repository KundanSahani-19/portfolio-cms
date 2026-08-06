import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { title: "Home", to: "home" },
  { title: "About", to: "about" },
  { title: "Experience", to: "experience" },
  { title: "Education", to: "education" },
  { title: "Skills", to: "skills" },
  { title: "Projects", to: "projects" },
  { title: "Certificates", to: "certificates" },
  { title: "Contact", to: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >

      {/* Floating glass capsule */}
      <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70">
        <div
          className="relative flex items-center justify-between h-16 md:h-18 px-5 md:px-7 rounded-[22px]
          bg-white/30 backdrop-blur-3xl
          shadow-[0_10px_32px_rgba(28,28,28,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]"
        >
          {/* liquid glass sheen sweep */}
          <div className="pointer-events-none absolute inset-0 rounded-[22px] overflow-hidden">
            <motion.div
              animate={{ x: ["-60%", "160%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute -inset-y-10 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12"
            />
          </div>

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="relative z-10 text-2xl font-bold text-[#1C1C1C] cursor-pointer tracking-tight"
          >
            Kundan
            <span className="text-[#6B6B6B]">.</span>
          </motion.h1>

          {/* Desktop Menu */}
          <nav className="relative z-10 hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#1C1C1C]/[0.04] shadow-[inset_2px_2px_5px_rgba(28,28,28,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                onSetActive={() => setActive(item.to)}
                className="group relative cursor-pointer px-4 py-2 rounded-full text-sm font-medium text-[#4A4A4A] transition-colors duration-300 hover:text-[#1C1C1C]"
              >
                <span className="relative z-10">{item.title}</span>

                {active === item.to && (
                  <motion.span
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C] shadow-[0_4px_12px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] -z-0"
                  />
                )}

                {active === item.to && (
                  <span className="absolute inset-0 z-10 flex items-center justify-center text-[#FAFAFF] font-semibold text-sm pointer-events-none">
                    {item.title}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Hire Me button */}
          <motion.button
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ y: 1, scale: 0.96 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
            className="relative z-10 hidden md:inline-flex items-center overflow-hidden
            px-6 py-2.5 rounded-full font-semibold text-[#FAFAFF]
            bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
            shadow-[0_4px_0_#000000,0_8px_16px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]"
          >
            <motion.span
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            />
            <span className="relative">Hire Me</span>
          </motion.button>

          {/* Mobile Icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="relative z-10 lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-2xl text-[#1C1C1C]
            bg-white/40 backdrop-blur-xl shadow-[3px_3px_8px_rgba(28,28,28,0.12),-3px_-3px_8px_rgba(255,255,255,0.8)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mt-3 rounded-3xl overflow-hidden
            bg-white/40 backdrop-blur-3xl
            shadow-[0_20px_50px_rgba(28,28,28,0.15),inset_0_1px_0_rgba(255,255,255,0.9)]"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-6 py-4 text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-white/40 cursor-pointer transition-colors duration-200 border-b border-[#1C1C1C]/5 last:border-none"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}

            <div className="p-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-full font-semibold text-[#FAFAFF]
                bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
                shadow-[0_4px_0_#000000,0_8px_16px_-2px_rgba(28,28,28,0.35)]"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;