import { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { title: "Home", to: "home" },
  { title: "About", to: "about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          Kundan<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="text-cyan-400"
              className="cursor-pointer text-white hover:text-cyan-400 transition"
            >
              {item.title}
            </Link>
          ))}

          <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
            Hire Me
          </button>
        </nav>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-white hover:text-cyan-400 cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;