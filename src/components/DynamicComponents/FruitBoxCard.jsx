import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import Button from "./Button";
import SelectItems from "./SelectItems";
import { servingsData } from "@/assets/StaticData";
import { click } from "@/assets";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { useState } from "react";

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
          title: data?.title && data?.title,
          description: data?.description,
          subDescription: data?.subDescription && data?.subDescription,
          buttonText: data?.buttonText,
          image: data?.image?.props?.src || data?.image,
          bg: data?.bg?.props?.src || data?.bg,
          price: data?.price * data?.quantity,
          quantity: data?.quantity,
          servings: data?.description === "" && servings,
        };

        const updatedCart = [...existingItems, sanitizedData];
        localStorage.setItem("fruits", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        toast.error("Product has already in the cart");
      }
      return existingItems;
    });
  };

  return (
    <div className="relative z-20">
      <div className="flex items-center relative">
        {/* Left Image Section */}
        <div
          className={cn(
            "w-[325.678px] h-[315.548px] flex items-center justify-center bg-white border border-r-0 border-secondaryTextColor rounded-l-[30px]",
            !data?.name && "border-SecondaryBg"
          )}
        >
          <img src={data?.image?.props?.src} alt={data?.name || "Fruit"} />
        </div>

        {/* Right Content Section */}
        <div className="relative">
          <img
            src={data?.bg?.props?.src}
            alt="Background"
            className="h-[315.548px]"
          />
          <div className="absolute right-0 px-7 top-[34%] -translate-y-1/2 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-[26px] text-white">{data?.name}</h2>

              {data?.description ? (
                <p className={cn("", !data?.name && "-mt-14 text-white")}>
                  {data?.description}
                </p>
              ) : (
                <SelectItems
                  placeholder="10 Servings"
                  data={servingsData}
                  setServings={setServings}
                  triggerClass="py-6"
                />
              )}
            </div>

            {/* Add to Cart Button */}
            <div
              onClick={handleAddToCart}
              className={cn(
                "absolute -bottom-32 w-[80%]",
                !data?.description && "-bottom-[120px]"
              )}
            >
              <Button className="border-2 rounded-2xl border-white w-full shadow-black/20 shadow-lg py-3">
                {data?.buttonText}
              </Button>
            </div>

            {/* Click Indicator */}
            {!data?.name && (
              <img
                src={click}
                alt="Click Indicator"
                className="absolute -bottom-36 right-6"
              />
            )}
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
