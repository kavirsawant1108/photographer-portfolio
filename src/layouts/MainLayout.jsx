import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollTop />
      <main className="pt-24 pb-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;