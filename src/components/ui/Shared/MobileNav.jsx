import { cartCar } from "@/assets";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { HiMenuAlt1 } from "react-icons/hi";
import { useLocation } from "react-router";
import { Link } from "react-router";

const MobileNav = ({ totalQuantity, navItems }) => {
  const location = useLocation();
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="border border-gray-400 rounded-xl py-2.5 px-3 bg-transparent text-black">
            <HiMenuAlt1 size={25} />
          </button>
        </SheetTrigger>
        <SheetContent className="z-[70] border-0">
          <SheetHeader>
            <Link to={"/cart"} className="mt-5">
              <SheetClose asChild>
                <div className="relative cursor-pointer shadow-black/10 shadow-lg bg-gradient-to-t from-primaryBoldColor to-primaryLightColor w-[250.95px] py-3 pe-8 ps-20 text-white rounded-2xl">
                  <img
                    src={cartCar}
                    alt=""
                    className="h-[55px] w-[72.5px] absolute -top-2 left-8"
                  />
                  <p className="text-left ml-10">Cart / {totalQuantity || 0}</p>
                </div>
              </SheetClose>
            </Link>
          </SheetHeader>
          <div className="flex flex-col items-center mt-10 gap-6 py-4">
            {navItems?.map((data, idx) => {
              return (
                <SheetClose asChild key={`index - ${idx}`}>
                  <Link
                    to={data?.path}
                    className={cn(
                      "text-xl text-center",
                      location?.pathname === data?.path &&
                        "text-secondaryTextColor"
                    )}
                  >
                    {data?.title}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

MobileNav.propTypes = {
  totalQuantity: PropTypes.number,
  navItems: PropTypes.array,
};
