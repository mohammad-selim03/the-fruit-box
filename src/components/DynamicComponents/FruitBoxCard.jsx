import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import Button from "./Button";
import SelectItems from "./SelectItems";
import { servingsData } from "@/assets/StaticData";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { useState } from "react";

const FruitBoxCard = ({ data }) => {
  const [servings, setServings] = useState("10 Servings");
  const { setCartItems } = useContext(Context);

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      // Ensure prevItems is always an array, even if localStorage is corrupted
      const existingItems = Array.isArray(prevItems) ? prevItems : [];

      // Check if the item is already in the cart
      if (!existingItems.some((item) => item.name === data?.name)) {
        toast.success("Product added to the cart");

        // Create a sanitized data object
        const sanitizedData = {
          id: data?.id,
          name: data?.name,
          title: data?.title || "", // Set default values for missing fields
          description: data?.description || "",
          subDescription: data?.subDescription || "",
          buttonText: data?.buttonText || "",
          image: data?.image?.props?.src || data?.image || "", // Ensure image is a valid string
          bg: data?.bg?.props?.src || data?.bg || "", // Ensure background is valid
          price: data?.price * data?.quantity,
          quantity: data?.quantity || 1, // Ensure quantity defaults to 1 if missing
          servings: data?.description === "" && servings,
        };

        // Update cart in the state and localStorage
        const updatedCart = [...existingItems, sanitizedData];
        localStorage.setItem("fruits", JSON.stringify(updatedCart)); // Store as an array of objects
        return updatedCart;
      } else {
        toast.error("Product has already been added to the cart");
      }
      return existingItems; // Return previous cart state if the item is already present
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
          <img src={data?.image?.props?.src} alt={data?.name || "Fruit"} />
        </div>

        {/* Right Content Section */}
        <div className="relative z-20 overflow-hidden">
          <div
            className={cn(
              "bg-primaryLightColor absolute top-0 left-0 translate-y-80 group-hover:translate-y-0 transition-all duration-200 rounded-r-[25px] w-full h-full flex flex-col items-center justify-between py-10"
            )}
          >
            <p className="text-white px-3">{data?.description2}</p>
            {/* <Button className="border-2 rounded-2xl border-white w-full shadow-black/20 shadow-lg py-3 px-14">
              {data?.buttonText}
            </Button> */}
          </div>
          <img
            src={data?.bg?.props?.src}
            alt="Background"
            className="h-[315.548px]"
          />
          <div className="absolute right-0 px-7 top-[34%] -translate-y-1/2 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-[26px] text-white group-hover:hidden">{data?.name}</h2>

              {data?.description ? (
                <p className={cn("group-hover:hidden", !data?.name && "-mt-14 text-white")}>
                  {data?.subDescription || data?.description}
                </p>
              ) : (
                <div className="group-hover:absolute group-hover:-bottom-28 group-hover:w-[80%]">
                  <SelectItems
                    placeholder="10 Servings"
                    data={servingsData}
                    setServings={setServings}
                    triggerClass="py-6"
                  />
                </div>
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
                {data?.buttonText}
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
