import Footer from "@/components/ui/Shared/Footer";
import Navbar from "@/components/ui/Shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import { IoIosArrowUp } from "react-icons/io";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { useGetApi } from "@/hooks/API/useGetApi";
import Loader from "@/components/ui/Shared/Loader";

const Layout = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // const { data: fruitsData, isLoading, isError } = useGetApi("products", true);
  // console.log("fruits data: ", fruitsData);
  // const servingsData = fruitsData?.find((data) => data?.price === null);
  // localStorage.setItem("servingsData", JSON.stringify(servingsData));
  const location = useLocation();
  const isLoading = false;
  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Loader size={100} />
    </div>
  ) : (
    <div className="font-Comfort font-semibold relative ">
      <ScrollRestoration />
      <Navbar />
      <div
        className={cn(
          "bg-[#F0EEE8] pb-96 pt-10",
          location.pathname === "/cart" && "bg-[#F0EEE8]",
          location.pathname === "/" && "bg-transparent"
        )}
      >
        <Outlet />
      </div>
      <div
        className={cn(
          "-mt-[300px]",
          location.pathname === "/cart" && "-mt-[300px]"
        )}
      >
        <Footer />
      </div>
      <Toaster />
      <div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 cursor-pointer z-30"
        onClick={handleScrollToTop}
      >
        <p className="p-2 md:p-3 border border-black hover:bg-primaryBoldColor hover:text-white transition-all duration-300 hover:border-white rounded-full bg-transparent">
          <IoIosArrowUp className="text-lg md:text-2xl" />
        </p>
      </div>
    </div>
  );
};

export default Layout;
