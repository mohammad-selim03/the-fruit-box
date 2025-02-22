import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import Button from "./Button";
import SelectItems from "./SelectItems";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import { greenCardbg } from "@/assets";

const FruitBoxCard = ({ data }) => {
  // Initialize state with first serving's data if available
  const initialServing = data?.servings?.[0] || { name: "10 Servings", price: "10.00" };
  const [selectedServing, setSelectedServing] = useState(initialServing);
  const { setCartItems } = useContext(Context);

  const handleServingChange = (servingName) => { 
    const selected = data?.servings?.find(serving => serving.name === servingName);
    if (selected) {
      setSelectedServing(selected);
    }
  };

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      const existingItems = Array.isArray(prevItems) ? prevItems : [];

      if (!existingItems.some((item) => item?.name === data?.name)) {
        toast.success("Product added to the cart");

        const sanitizedData = {
          id: data?.id,
          name: data?.name,
          description: data?.description || "",
          image: data?.image || "",
          price: selectedServing?.price ? parseFloat(selectedServing.price) : parseFloat(data?.price),
          quantity: data?.quantity || 1,
          servings: data?.servings_single || "",
          servings_multiple: data?.price_multiple ? selectedServing.name : null,
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
            "w-[325.678px] h-[315.548px] flex items-center justify-center overflow-hidden bg-white border border-r-0 border-secondaryTextColor group-hover:border-primaryBoldColor rounded-l-[30px]",
            !data?.name && "border-SecondaryBg"
          )}
        >
          <img src={data?.image} alt={data?.name || "Fruit"} />
        </div>

        {/* Right Content Section */}
        <div className="relative z-20 rounded-r-[25px] overflow-hidden">
          <div
            className={cn(
              "bg-primaryBoldColor absolute top-0 left-0 translate-y-80 group-hover:translate-y-0 transition-all duration-200 rounded-r-[25px] w-full h-full flex flex-col items-center justify-between py-10"
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
              {data?.price_multiple !== null && (
                <div className="group-hover:absolute group-hover:-bottom-28 group-hover:w-[80%]">
                  <SelectItems
                    data={data?.servings}
                    setServings={handleServingChange}
                    triggerClass="py-6"
                    value={selectedServing.name}
                  />
                </div>
              )}
            </div>

            {/* Add to Cart Button with Dynamic Price */}
            <div
              onClick={handleAddToCart}
              className={cn(
                "absolute -bottom-32 w-[80%] z-20 group-hover:-bottom-[168px] flex flex-col gap-8"
              )}
            >
              <Button className="border-2 rounded-2xl border-white w-full shadow-black/20 shadow-lg py-3">
                Order now ${data?.price_multiple 
                  ? parseFloat(selectedServing?.price).toFixed(2) 
                  : parseFloat(data?.price).toFixed(2)}
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