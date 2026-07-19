import { useState } from "react";

import Sidebar from "../components/admin/Sidebar";

import Dashboard from "../components/admin/pages/Dashboard";
import HomeEditor from "../components/admin/pages/HomeEditor";
import Projects from "../components/admin/pages/Projects";
import Skills from "../components/admin/pages/Skills";
import Experience from "../components/admin/pages/Experience";
import Education from "../components/admin/pages/Education";
import Certificates from "../components/admin/pages/Certificates";
import Messages from "../components/admin/pages/Messages";

function Admin() {
  const [activePage, setActivePage] =
    useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "home":
        return <HomeEditor />;

      case "projects":
        return <Projects />;

      case "skills":
        return <Skills />;

      case "experience":
        return <Experience />;

      case "education":
        return <Education />;

      case "certificates":
        return <Certificates />;

      case "messages":
        return <Messages />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#020617] text-white">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 p-10 overflow-y-auto">
        {renderPage()}
      </main>

    </div>
  );
}

export default Admin;