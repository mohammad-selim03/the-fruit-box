import { cartCar, logo } from "@/assets";
import { navItems } from "@/assets/StaticData";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const location = useLocation();

  const data = JSON.parse(localStorage.getItem("system-setting"));

  useEffect(() => {
    const loadCartItems = () => {
      const fruitsData = localStorage.getItem("fruits");

      let parsedData = [];

      if (fruitsData) {
        try {
          parsedData = JSON.parse(fruitsData);
        } catch (error) {
          // console.error("Error parsing fruits data:", error);
          parsedData = [];
        }
      }

      if (Array.isArray(parsedData)) {
        const total = parsedData.reduce(
          (sum, item) => sum + (item.quantity || 1),
          0
        );
        setTotalQuantity(total);
      } else {
        setTotalQuantity(0);
      }
    };

    loadCartItems();

    // Set interval to update cart items every second
    const intervalId = setInterval(loadCartItems, 1000);

    // Listen for changes in localStorage
    const handleStorageChange = (e) => {
      if (e.key === "fruits") {
        loadCartItems();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-white h-[120px] w-full px-5 lg:px-14 xl:px-[100px] flex items-center justify-between fixed top-0 z-[60] shadow-black/5 shadow-xl">
      <Link to={"/"}>
        <img src={data?.logo || logo || null} alt="logo" className="w-56 -mt-4" />
      </Link>
      <div className="flex items-center gap-5 ">
        <div className="lg:hidden flex">
          <MobileNav totalQuantity={totalQuantity} navItems={navItems} />
        </div>

        <div className="hidden sm:flex flex-col items-end">
          <Link to={"/cart"}>
            {" "}
            <div className="relative cursor-pointer shadow-black/10 shadow-lg bg-gradient-to-t from-primaryBoldColor to-primaryLightColor w-[250.95px] py-3 pe-8 ps-20 text-white rounded-2xl">
              <img
                src={cartCar}
                alt=""
                className="h-[55px] w-[72.5px] absolute -top-2 left-8"
              />
              <p className="text-left ml-10">Cart / {totalQuantity || 0}</p>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8 xl:gap-[50px] mt-2">
            {navItems?.map((data, idx) => {
              return (
                <Link
                  key={`index - ${idx}`}
                  to={data?.path}
                  className="relative"
                >
                  <button
                    className={cn(
                      "cursor-pointer hover:text-secondaryTextColor hover:font-extrabold duration-300 group",
                      location.pathname === data?.path &&
                        "text-secondaryTextColor font-extrabold"
                    )}
                  >
                    {data?.title}
                  </button>
                  {location.pathname === data?.path && (
                    <div className="flex items-center justify-center ">
                      <div className="absolute -bottom-2 w-[60%] mx-auto bg-secondaryTextColor h-0.5 " />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
