import { cartCar, logo } from "@/assets";
import { navItems } from "@/assets/StaticData";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => { 
  const [totalQuantity, setTotalQuantity] = useState(0); // Total quantity variable
  const location = useLocation();

  useEffect(() => {
    // Function to load cart data
    const loadCartItems = () => {
      const fruitsData = localStorage.getItem("fruits");
      const parsedData = fruitsData ? JSON.parse(fruitsData) : []; 

      // Calculate total quantity
      const total = parsedData.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );
      setTotalQuantity(total);
    };

    // Load initial data
    loadCartItems();

    // Set up interval to check localStorage every second
    const intervalId = setInterval(loadCartItems, 1000);

    // Listen for storage events from other tabs
    const handleStorageChange = (e) => {
      if (e.key === "fruits") {
        loadCartItems();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-white h-[120px] w-full px-[100px] flex items-center  justify-between">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="flex flex-col items-end">
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
        <div className="flex items-center gap-[50px] mt-2">
          {navItems?.map((data, idx) => {
            return (
              <Link key={`index - ${idx}`} to={data?.path} className="relative">
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
  );
};

export default Navbar;
