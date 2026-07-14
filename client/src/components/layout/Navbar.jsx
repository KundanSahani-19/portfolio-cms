import { useState } from "react";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

function Navbar() {
  const [active, setActive] = useState("About");

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          Kundan<span className="text-cyan-400">.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`transition duration-300 hover:text-cyan-400 ${
                active === item ? "text-cyan-400" : "text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Hire Me Button */}
        <button className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-full font-semibold text-black">
          Hire Me
        </button>

      </div>
    </header>
  );
}

export default Navbar;