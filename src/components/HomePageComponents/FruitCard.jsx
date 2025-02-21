import Button from "@/components/DynamicComponents/Button";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { servingsData } from "@/assets/StaticData";
import { cn } from "@/lib/utils";
import { useState, useContext } from "react";
import { Context } from "@/context/Context";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const FruitCard = ({ data }) => {
  const [servings, setServings] = useState("10 Servings");
  const [quantity, setQuantity] = useState(1);
  const { setCartItems } = useContext(Context);

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
      price: parseInt(data?.price),
      quantity,
      servings: data?.servings,
      servings_multiple: data?.servings_multiple && servings,
    };

    const updatedCart = [...storedCart, newItem];
    localStorage.setItem("fruits", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    toast.success("Product added to the cart");
  };

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
      <div className="w-[382px] flex flex-col gap-5">
        <h2 className="text-2xl font-bold">
          {data?.name}{" "}
          {data?.servings && (
            <span className="text-secondaryTextColor text-lg font-bold">
              {data?.servings}
            </span>
          )}
        </h2>
        <p className="line-clamp-3">{data?.description}</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-[40px] text-secondaryTextColor w-28 text-center">
          ${data?.price}
        </p>
        <div>
          <div className="flex items-center justify-between gap-2 border border-gray-300 p-1 rounded-xl w-28">
            <button
              className="rounded bg-primaryLightColor text-black text-xl px-2"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="w-5 flex items-center justify-center">
              {quantity}
            </span>
            <button
              className="rounded bg-primaryLightColor text-black text-xl px-2"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          {data?.servings_multiple && (
            <div className="mt-3">
              <SelectItems
                data={servingsData}
                value={servings}
                onChange={setServings}
                triggerClass="border border-gray-300 text-red-400"
              />
            </div>
          )}
        </div>
      </div>
      <div onClick={handleAddToCart}>
        <Button className="capitalize px-14 shadow-black/20 shadow-md py-3 w-full">
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
