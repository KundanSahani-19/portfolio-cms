import Navbar from "./Navbar";
import Footer from "./Footer";

import Glow from "../common/Glow";
import MouseGlow from "../common/MouseGlow";
import BackgroundGrid from "../common/BackgroundGrid";
import ScrollProgress from "../common/ScrollProgress";
import ScrollToTop from "../common/ScrollToTop";
import Cursor from "../common/Cursor";
import AnimatedBackground from "../common/AnimatedBackground";


function Layout({ children }) {
  return (
    <div className="bg-[#FAFAFF] text-[#1C1C1C] overflow-x-hidden">

      <BackgroundGrid />

      <AnimatedBackground />

      <Glow />

      <MouseGlow />

      <MouseGlow />

      <Cursor />

      <ScrollProgress />

      <Navbar />

      {children}

      <Footer />

      <ScrollToTop />

    </div>
  );
}

export default Layout;