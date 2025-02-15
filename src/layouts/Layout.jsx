import Footer from "@/components/ui/Shared/Footer";
import Navbar from "@/components/ui/Shared/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="font-Comfort font-semibold">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
