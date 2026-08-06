import { motion } from "framer-motion";
import {
  FaHome,
  FaFolderOpen,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaSignOutAlt,
  FaEdit,
  FaUser,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Sidebar({ activePage, setActivePage }) {
  const navigate = useNavigate();

  const menus = [
    { id: "dashboard", title: "Dashboard", icon: <FaHome /> },
    { id: "home", title: "Home Editor", icon: <FaEdit /> },
    { id: "about", title: "About", icon: <FaUser /> },
    { id: "projects", title: "Projects", icon: <FaFolderOpen /> },
    { id: "skills", title: "Skills", icon: <FaCode /> },
    { id: "experience", title: "Experience", icon: <FaBriefcase /> },
    { id: "education", title: "Education", icon: <FaGraduationCap /> },
    { id: "certificates", title: "Certificates", icon: <FaCertificate /> },
    { id: "messages", title: "Messages", icon: <FaEnvelope /> },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-72 h-screen p-4 flex flex-col overflow-y-auto bg-gradient-to-b from-[#EEF0F2] to-[#ECEBE4]"
    >

      {/* ambient glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#DADDD8]/70 blur-[110px] pointer-events-none"
      />

      <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70 mb-6">
        <div className="bg-white/40 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_8px_24px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">
          {/* ================= LOGO ================= */}
          <h1 className="text-2xl font-black bg-gradient-to-r from-[#1C1C1C] to-[#6B6B6B] bg-clip-text text-transparent">
            Portfolio CMS
          </h1>

          <p className="text-[#6B6B6B] text-sm mt-2">
            Admin Dashboard
          </p>
        </div>
      </div>

      {/* ================= MENU ================= */}

      <div className="relative flex-1 space-y-2 p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70">
        <div className="bg-white/30 backdrop-blur-2xl rounded-[22px] p-3 shadow-[0_8px_24px_rgba(28,28,28,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] space-y-1.5">
          {menus.map((menu) => {
            const isActive = activePage === menu.id;

            return (
              <motion.button
                key={menu.id}
                onClick={() => setActivePage(menu.id)}
                whileHover={{ x: isActive ? 0 : 4 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  relative w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl
                  duration-300 text-left overflow-hidden

                  ${
                    isActive
                      ? "text-[#FAFAFF] bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C] shadow-[0_4px_0_#000000,0_8px_16px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      : "text-[#4A4A4A] hover:text-[#1C1C1C] hover:bg-white/40"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    initial={{ x: "-150%" }}
                    animate={{ x: "150%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                  />
                )}

                <span className="text-lg relative z-10">{menu.icon}</span>
                <span className="font-medium relative z-10">{menu.title}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ================= LOGOUT ================= */}

      <motion.button
        onClick={logout}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ y: 1, scale: 0.97 }}
        className="mt-6 py-4 rounded-2xl font-semibold flex justify-center items-center gap-3
        text-[#FAFAFF] bg-gradient-to-b from-rose-400 to-rose-600
        shadow-[0_4px_0_#9F1239,0_8px_16px_-2px_rgba(190,18,60,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)]"
      >
        <FaSignOutAlt />
        Logout
      </motion.button>

    </motion.aside>
  );
}

export default Sidebar;