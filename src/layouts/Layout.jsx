import Footer from "@/components/ui/Shared/Footer";
import Navbar from "@/components/ui/Shared/Navbar";
import { Outlet } from "react-router";
import { IoIosArrowUp } from "react-icons/io";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-Comfort font-semibold relative">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
      <div
        className="fixed bottom-10 right-10 cursor-pointer z-30"
        onClick={handleScrollToTop}
      >
        <p className="p-3 border border-black hover:bg-primaryBoldColor hover:text-white transition-all duration-300 hover:border-primaryBoldColor rounded-full bg-transparent">
          <IoIosArrowUp size={25} />
        </p>
      </div>
    </div>
  );
};

export default Layout;
