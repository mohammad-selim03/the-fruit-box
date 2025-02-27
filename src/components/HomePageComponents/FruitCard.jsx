import Button from "@/components/DynamicComponents/Button";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { cn } from "@/lib/utils";
import { useState, useContext } from "react";
import { Context } from "@/context/Context";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

const FruitCard = ({ data }) => {
  const initialServing = data?.servings?.[0] || [];
  const [selectedServing, setSelectedServing] = useState(initialServing);
  const [quantity, setQuantity] = useState(1);

  const { setCartItems } = useContext(Context);
  const navigate = useNavigate();

  const handleServingChange = (servingName) => {
    const selected = data?.servings?.find(
      (serving) => serving.name === servingName
    );
    if (selected) {
      setSelectedServing(selected);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("fruits")) || [];
    const existingItem = storedCart.find((item) => item.id === data.id);

    if (existingItem) {
      toast.error("Product has already been added to the cart");
      return;
    }

    // Create initial new item
    let newItem = {
      id: data?.id,
      name: data?.name,
      description: data?.description || "",
      image: data?.image || "",
      price:
        data?.price !== null ? data?.price : parseFloat(selectedServing?.price),
      quantity,
      servings_multiple: data?.price_multiple ? selectedServing.name : null,
      servings: data?.servings_single || "", 
      servings_id:
        data?.price_multiple ||
        (data?.servings_single !== null && selectedServing),
    };

    // // If the original data has a servings array, handle it properly
    // if (
    //   data?.servings &&
    //   Array.isArray(data.servings) &&
    //   data.servings.length > 0
    // ) {
    //   // Extract only the first serving
    //   const firstServing = data.servings[0];

    //   // Add the servings array with just the first serving
    //   newItem.servings = [firstServing];

    //   // If no price is set and we have a serving with price, use it
    //   if ((!newItem.price || newItem.price === null) && firstServing.price) {
    //     newItem.price = parseFloat(firstServing.price);
    //   }
    // } else {
    //   // If there was a servings property, maintain it but ensure it's only including the necessary data
    //   if (data?.servings) {
    //     newItem.servings = data.servings;
    //   }
    // }

    const updatedCart = [...storedCart, newItem];

    localStorage.setItem("fruits", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    toast.success("Product added to the cart");
    navigate("/cart");
  };

  return (
    <div
      key={data?.id}
      className="flex items-center justify-between gap-2 lg:gap-12 w-full border-b border-gray-300 py-5"
    >
      <div className="w-[400px] sm:w-[200px]">
        <img
          src={data?.image}
          alt={data?.name}
          className={cn(
            "w-[200px]",
            data?.name === "SMALL Fruit Box" && "w-2/3"
          )}
        />
      </div>
      <div className="w-[382px] flex flex-col gap-2">
        <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-[#798090] capitalize line-clamp-2">
          {data?.name}{" "}
          {data?.servings_single ? (
            <span className="text-secondaryTextColor text-base sm:text-lg lg:text-2xl font-bold">
              {data?.servings_single}
            </span>
          ) : (
            <span className="text-secondaryTextColor text-sm sm:text-lg lg:text-2xl font-bold">
              10-85 Servings
            </span>
          )}
        </h2>
        <p className="line-clamp-3 font-extralight text-xs sm:text-sm lg:text-base">
          {data?.description}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 lg:gap-5">
        {data?.servings_single === null ? (
          <p className="text-[28px] sm:text-[28px] lg:text-[40px] text-secondaryTextColor w-28 text-center">
            {selectedServing?.price ? (
              <p>${parseFloat(selectedServing.price)}</p>
            ) : (
              <p className="text-xs">Select servings to show price</p>
            )}
          </p>
        ) : (
          <p className="text-[28px] sm:text-[28px] lg:text-[40px] text-secondaryTextColor w-28 text-center">
            {data?.price ? (
              <p>${parseFloat(data?.price) * parseFloat(quantity || 1)}</p>
            ) : (
              <p className="text-xs">Select servings to show price</p>
            )}
          </p>
        )}
        <div>
          <div className="flex items-center justify-between gap-1 md:gap-2 border border-gray-300 p-1 rounded-xl max-w-[120px]">
            <button
              className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
              onClick={handleDecrement}
            >
              <FiMinus className="text-xs lg:text-sm text-black/80" />
            </button>
            <span className="w-5 flex items-center justify-center text-sm lg:text-base">
              {quantity < 10 && "0"}
              {quantity}
            </span>
            <button
              className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
              onClick={handleIncrement}
            >
              <FiPlus className="text-xs lg:text-sm text-black/80" />
            </button>
          </div>
          {data?.price_multiple && (
            <div className="mt-3 w-full">
              <SelectItems
                data={data?.servings}
                value={selectedServing?.name}
                setServings={handleServingChange}
                triggerClass="border border-gray-300 text-gray-500 w-full sm:max-w-[100px] px-0 rounded-xl"
                valueClass="text-[10px]"
              />
            </div>
          )}
          <div
            className={cn(
              "flex md:hidden mt-2",
              data?.price === null && " cursor-none"
            )}
            onClick={handleAddToCart}
          >
            <Button
              className={cn(
                "capitalize px-3 md:px-8 lg:px-14 shadow-black/20 shadow-md py-2 lg:py-3 text-sm lg:text-base w-full text-nowrap"
              )}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div
        className={cn("hidden md:flex", data?.price === null && " cursor-none")}
        onClick={handleAddToCart}
      >
        <Button
          className={cn(
            "capitalize px-5 md:px-8 lg:px-14 shadow-black/20 shadow-md py-2 lg:py-3 text-sm lg:text-base w-full text-nowrap"
          )}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default FruitCard;

FruitCard.propTypes = {
  data: PropTypes.object,
};
