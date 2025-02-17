import { cartCar, logo } from "@/assets";
import { navItems } from "@/assets/StaticData";
import { Context } from "@/context/Context";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useContext(Context);
  console.log(cartItems?.length);

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
            <p className="text-left ml-10">Cart / {cartItems?.length || 0}</p>
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
