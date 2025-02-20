import { cartCar } from "@/assets"; 
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import PropTypes from "prop-types";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router";

const MobileNav = ({ totalQuantity, navItems }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="border border-gray-400 rounded-xl py-2.5 px-3 bg-transparent text-black">
            <HiMenuAlt1 size={25} />
          </button>
        </SheetTrigger>
        <SheetContent className="z-[70] ">
          <SheetHeader>
            <Link to={"/cart"} className="mt-5">
              <div className="relative cursor-pointer shadow-black/10 shadow-lg bg-gradient-to-t from-primaryBoldColor to-primaryLightColor w-[250.95px] py-3 pe-8 ps-20 text-white rounded-2xl">
                <img
                  src={cartCar}
                  alt=""
                  className="h-[55px] w-[72.5px] absolute -top-2 left-8"
                />
                <p className="text-left ml-10">Cart / {totalQuantity || 0}</p>
              </div>
            </Link>
          </SheetHeader>
          <div className="flex flex-col items-center mt-10 gap-6 py-4">
            {navItems?.map((data, idx) => {
              return (
                <SheetClose asChild key={`index - ${idx}`}>
                  <Link to={data?.path} className="text-xl text-center">
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
