import Button from "@/components/DynamicComponents/Button";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { cn } from "@/lib/utils";
import { useState, useContext } from "react";
import { Context } from "@/context/Context";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FiMinus, FiPlus } from "react-icons/fi";

const FruitCard = ({ data }) => {
  const initialServing = data?.servings?.[0] || [];
  const [selectedServing, setSelectedServing] = useState(initialServing);
  const [quantity, setQuantity] = useState(1);
  const { setCartItems } = useContext(Context);

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

    const newItem = {
      id: data?.id,
      name: data?.name,
      description: data?.description || "",
      image: data?.image || "",
      price:
        data?.price !== null ? data?.price : parseFloat(selectedServing?.price),
      quantity,
      servings_multiple: data?.price_multiple ? selectedServing.name : null,
      servings_id: data?.price_multiple && selectedServing,
    };

    const updatedCart = [...storedCart, newItem];
    localStorage.setItem("fruits", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    toast.success("Product added to the cart");
  };
  console.log("data price", data?.price);
  return (
    <div
      key={data?.id}
      className="flex items-center gap-12 w-full border-b py-5"
    >
      <div className="w-[200px]">
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
        <h2 className="text-2xl font-bold text-[#798090] capitalize line-clamp-2">
          {data?.name}{" "}
          {data?.servings_single ? (
            <span className="text-secondaryTextColor text-2xl font-bold">
              {data?.servings_single}
            </span>
          ) : (
            <span className="text-secondaryTextColor text-2xl font-bold">
              10-100 Servings
            </span>
          )}
        </h2>
        <p className="line-clamp-3 font-extralight">{data?.description}</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        {data?.servings_single === null ? (
          <p className="text-[40px] text-secondaryTextColor w-28 text-center">
            {selectedServing?.price ? (
              <p>${parseFloat(selectedServing.price)}</p>
            ) : (
              <p className="text-xs">Select servings to show price</p>
            )}
          </p>
        ) : (
          <p className="text-[40px] text-secondaryTextColor w-28 text-center">
            {data?.price ? (
              <p>
                ${parseFloat(data?.price) * parseFloat(data?.quantity || 1)}
              </p>
            ) : (
              <p className="text-xs">Select servings to show price</p>
            )}
          </p>
        )}
        <div>
          <div className="flex items-center justify-between gap-2 border border-gray-300 p-1 rounded-xl max-w-[120px]">
            <button
              className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
              onClick={handleDecrement}
            >
              <FiMinus className="text-sm text-black/80" />
            </button>
            <span className="w-5 flex items-center justify-center">
              {quantity < 10 && "0"}
              {quantity}
            </span>
            <button
              className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
              onClick={handleIncrement}
            >
              <FiPlus className="text-sm text-black/80" />
            </button>
          </div>
          {data?.price_multiple && (
            <div className="mt-3">
              <SelectItems
                data={data?.servings}
                value={selectedServing?.name}
                setServings={handleServingChange}
                triggerClass="border border-gray-300 text-gray-500 max-w-[100px] px-0 rounded-xl"
                valueClass="text-[10px]"
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={cn("", data?.price === null && " cursor-none")}
        onClick={handleAddToCart}
      >
        <Button
          className={cn(
            "capitalize px-14 shadow-black/20 shadow-md py-3 w-full"
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
