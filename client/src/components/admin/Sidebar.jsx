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

function Sidebar({
  activePage,
  setActivePage,
}) {
  const navigate = useNavigate();

  const menus = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: <FaHome />,
    },

    {
      id: "home",
      title: "Home Editor",
      icon: <FaEdit />,
    },

    {
      id: "about",
      title: "About",
      icon: <FaUser />,
    },

    {
      id: "projects",
      title: "Projects",
      icon: <FaFolderOpen />,
    },

    {
      id: "skills",
      title: "Skills",
      icon: <FaCode />,
    },

    {
      id: "experience",
      title: "Experience",
      icon: <FaBriefcase />,
    },

    {
      id: "education",
      title: "Education",
      icon: <FaGraduationCap />,
    },

    {
      id: "certificates",
      title: "Certificates",
      icon: <FaCertificate />,
    },

    {
      id: "messages",
      title: "Messages",
      icon: <FaEnvelope />,
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-72 h-screen bg-[#0f172a] border-r border-white/10 p-8 flex flex-col overflow-y-auto">

      {/* ================= LOGO ================= */}

      <div>
        <h1 className="text-3xl font-black text-cyan-400">
          Portfolio CMS
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Admin Dashboard
        </p>
      </div>


      {/* ================= MENU ================= */}

      <div className="mt-10 flex-1 space-y-2">

        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setActivePage(menu.id)}
            className={`
              w-full
              flex
              items-center
              gap-4
              px-5
              py-4
              rounded-xl
              duration-300
              text-left

              ${
                activePage === menu.id
                  ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                  : "text-gray-300 hover:bg-white/10 hover:text-cyan-400"
              }
            `}
          >

            {/* ICON */}

            <span className="text-lg">
              {menu.icon}
            </span>


            {/* TITLE */}

            <span className="font-medium">
              {menu.title}
            </span>

          </button>
        ))}

      </div>


      {/* ================= LOGOUT ================= */}

      <button
        onClick={logout}
        className="
          mt-10
          bg-red-500
          hover:bg-red-600
          duration-300
          rounded-xl
          py-4
          font-semibold
          flex
          justify-center
          items-center
          gap-3
        "
      >

        <FaSignOutAlt />

        Logout

      </button>

    </aside>
  );
}

export default Sidebar;