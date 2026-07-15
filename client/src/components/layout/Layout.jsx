import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-[#030712] text-white overflow-x-hidden">

      <Navbar />

      {children}

      <Footer />

    </div>
  );
}

export default Layout;