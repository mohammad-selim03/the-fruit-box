import Footer from "@/components/ui/Shared/Footer";
import Navbar from "@/components/ui/Shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import { IoIosArrowUp } from "react-icons/io";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const location = useLocation();
  return (
    <div className="font-Comfort font-semibold relative ">
      <ScrollRestoration />
      <Navbar />
      {/* <div
        className={cn(
          "bg-[#F0EEE8] pb-96 pt-10",
          location.pathname === "/cart" && "bg-[#F0EEE8]",
          location.pathname === "/" && "bg-transparent"
        )}
      >
        <Outlet />
      </div> */}
      {/* <div
        className={cn(
          "-mt-[300px]",
          location.pathname === "/cart" && "-mt-[300px]"
        )}
      >
        <Footer />
      </div> */}
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
