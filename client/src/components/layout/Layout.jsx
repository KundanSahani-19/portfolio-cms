import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;