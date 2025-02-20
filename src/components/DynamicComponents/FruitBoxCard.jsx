import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import Button from "./Button";
import SelectItems from "./SelectItems";
import { servingsData } from "@/assets/StaticData";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { useState } from "react";
import { greenCardbg } from "@/assets";

const FruitBoxCard = ({ data }) => {
  const [servings, setServings] = useState("10 Servings");
  const { setCartItems } = useContext(Context);

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      const existingItems = Array.isArray(prevItems) ? prevItems : [];

      if (!existingItems.some((item) => item.name === data?.name)) {
        toast.success("Product added to the cart");

        const sanitizedData = {
          id: data?.id,
          name: data?.name,
          description: data?.description || "",
          image: data?.image || "",
          price: parseInt(data?.price),
          quantity: data?.quantity || 1,
          servings: data?.servings,
          servings_multiple: data?.servings_multiple && servings,
        };
        const updatedCart = [...existingItems, sanitizedData];
        localStorage.setItem("fruits", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        toast.error("Product has already been added to the cart");
      }
      return existingItems;
    });
  };

  return (
    <div className="relative z-20">
      <div className="flex items-center relative group cursor-pointer">
        {/* Left Image Section */}
        <div
          className={cn(
            "w-[325.678px] h-[315.548px] flex items-center justify-center bg-white border border-r-0 border-secondaryTextColor rounded-l-[30px]",
            !data?.name && "border-SecondaryBg"
          )}
        >
          <img src={data?.image} alt={data?.name || "Fruit"} />
        </div>

        {/* Right Content Section */}
        <div className="relative z-20 overflow-hidden">
          <div
            className={cn(
              "bg-primaryLightColor absolute top-0 left-0 translate-y-80 group-hover:translate-y-0 transition-all duration-200 rounded-r-[25px] w-full h-full flex flex-col items-center justify-between py-10"
            )}
          >
            <div>
              <p className="text-white px-5 line-clamp-4">
                {data?.description}
              </p>
            </div>
          </div>
          <img src={greenCardbg} alt="Background" className="h-[315.548px]" />
          <div className="absolute right-0 px-7 top-[34%] -translate-y-1/2 w-full">
            <div className="flex flex-col gap-4">
              {data?.name && (
                <h2 className="text-[26px] text-white group-hover:hidden capitalize">
                  {data?.name}
                </h2>
              )}
              {data?.servings_multiple && (
                <>
                  <div className="group-hover:absolute group-hover:-bottom-28 group-hover:w-[80%]">
                    <SelectItems
                      placeholder="10 Servings"
                      data={servingsData}
                      setServings={setServings}
                      triggerClass="py-6"
                    />
                  </div>
                </>
              )}
              {data?.servings && (
                <h2 className="text-base text-white group-hover:hidden">
                  {data?.servings}
                </h2>
              )}
            </div>

            {/* Add to Cart Button */}
            <div
              onClick={handleAddToCart}
              className={cn(
                "absolute -bottom-32 w-[80%] z-20 group-hover:-bottom-[168px] flex flex-col gap-8"
                // !data?.description && "-bottom-[120px]"
              )}
            >
              <Button className="border-2 rounded-2xl border-white w-full shadow-black/20 shadow-lg py-3">
                Order now ${data?.price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FruitBoxCard.propTypes = {
  data: PropTypes.object,
};

export default FruitBoxCard;
