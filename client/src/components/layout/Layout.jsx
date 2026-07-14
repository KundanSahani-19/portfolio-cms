import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;