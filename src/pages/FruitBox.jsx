import { useEffect, useState, useContext } from "react";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { servingsData } from "@/assets/StaticData";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { Context } from "@/context/Context";
import {
  customfruits,
  greenCardbg,
  largefruits,
  logo2,
  mediumfruits,
  orangeCardbg,
  smallfruits,
} from "@/assets";

export const fruitBoxesData = [
  {
    id: 1,
    name: "SMALL Fruit Box",
    description: "15 SERVINGS / 5 - 10 STAFF",
    buttonText: "Order now - $30.50",
    image: <img src={smallfruits} alt="" />,
    bg: <img src={greenCardbg} alt="" />,
    borderColor: "#75AC46",
    price: 30.5,
    quantity: 1,
  },
  {
    id: 2,
    name: "",
    title: "Medium Fruit Box",
    subDescription: "30+ servings.",
    description:
      "Perfect for offices with 11-20 people. he mix includes and bananas. lus we include a variety of seasonal fruit throughout the year.",
    buttonText: "Order now - $46",
    image: <img src={mediumfruits} alt="" />,
    bg: <img src={orangeCardbg} alt="" />,
    borderColor: "#75AC46",
    price: 50,
    quantity: 1,
  },
  {
    id: 3,
    name: "Large Fruit Box",
    description: "60 servings /  21-40 staff",
    buttonText: "Order now - $46",
    image: <img src={largefruits} alt="" />,
    bg: <img src={greenCardbg} alt="" />,
    borderColor: "#75AC46",
    price: 78,
    quantity: 1,
  },
  {
    id: 4,
    name: "Custom Fruit Box",
    description: "",
    buttonText: "Order now ",
    image: <img src={customfruits} alt="" />,
    bg: <img src={greenCardbg} alt="" />,
    borderColor: "#75AC46",
    price: 28,
    quantity: 1,
  },
];
const FruitBox = () => {
  const [fruits, setFruits] = useState([]);
  const [servings, setServings] = useState("10 Servings");
  const { setCartItems } = useContext(Context);

  // Load cart items from localStorage
  useEffect(() => {
    const storedFruits = localStorage.getItem("fruits");
    if (storedFruits) {
      const parsedFruits = JSON.parse(storedFruits);
      setFruits(parsedFruits);
    }
  }, []);

  // Increment quantity
  const handleIncrement = (id) => {
    console.log("id", id)
    setFruits((prevFruits) => {
      const updatedFruits = prevFruits.map((fruit) =>
        fruit.id === id ? { ...fruit, quantity: fruit.quantity + 1 } : fruit
      );
      localStorage.setItem("fruits", JSON.stringify(updatedFruits));
      return updatedFruits;
    });
  };

  // Decrement quantity
  const handleDecrement = (id) => {
    setFruits((prevFruits) => {
      const updatedFruits = prevFruits.map((fruit) =>
        fruit.id === id && fruit.quantity > 1
          ? { ...fruit, quantity: fruit.quantity - 1 }
          : fruit
      );
      localStorage.setItem("fruits", JSON.stringify(updatedFruits));
      return updatedFruits;
    });
  };

  const handleAddToCart = (fruit) => {
    setCartItems((prevItems) => {
      const existingItems = Array.isArray(prevItems) ? prevItems : [];

      const itemIndex = existingItems.findIndex((item) => item.id === fruit.id);

      if (itemIndex !== -1) {
        // If item already exists, update the quantity
        existingItems[itemIndex].quantity += fruit.quantity;
        toast.success("Quantity updated in the cart");
      } else {
        // If item is new, add it to the cart
        toast.success("Product added to the cart");

        const newItem = {
          id: fruit.id,
          name: fruit.name,
          title: fruit.title || "",
          description: fruit.description || "",
          subDescription: fruit.subDescription || "",
          buttonText: fruit.buttonText || "",
          image: fruit.image?.props?.src || fruit.image || "",
          bg: fruit.bg?.props?.src || fruit.bg || "",
          price: fruit.price,
          quantity: fruit.quantity || 1,
          servings: fruit.description === "" ? servings : undefined,
        };

        existingItems.push(newItem);
      }

      // Update localStorage
      localStorage.setItem("fruits", JSON.stringify(existingItems));

      return [...existingItems]; // Update state
    });
  };

  return (
    <div className="min-h-[900px] pt-20">
      <Container>
        <div className="pb-10 text-center">
          <h1 className="text-[64px] font-bold">Fruit Box Products</h1>
          <p className="uppercase text-secondaryTextColor font-bold">
            Just a few more details to deliciousness
          </p>
        </div>
        <div className="border-[8px] border-secondaryTextColor rounded-3xl p-4">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            {fruitBoxesData.length > 0 ? (
              fruitBoxesData.map((fruit) => {
                console.log(" dfd", fruit);
                return (
                  <div
                    key={fruit.id}
                    className="flex items-center gap-12 w-full border-b py-5"
                  >
                    <div className="w-[280px]">
                      <img
                        src={fruit?.image?.props?.src || fruit?.image}
                        alt={fruit?.name}
                        className={cn(
                          "w-[280px]",
                          fruit?.name === "SMALL Fruit Box" && "w-2/3"
                        )}
                      />
                    </div>
                    <div className="w-[382px] flex flex-col gap-5">
                      <h2 className="text-2xl font-bold">
                        {fruit.name || fruit?.title}{" "}
                        {fruit?.name !== "" && (
                          <span className="text-secondaryTextColor text-lg font-bold">
                            {fruit?.description}
                          </span>
                        )}
                      </h2>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                      <p className="text-[40px] text-secondaryTextColor w-28 text-center">
                        ${fruit.price}
                      </p>
                      <div>
                        <div className="flex items-center justify-between gap-2 border border-gray-300 p-1 rounded-xl w-28">
                          <button
                            className="rounded bg-primaryLightColor text-black text-xl px-2"
                            onClick={() => handleDecrement(fruit?.id)}
                          >
                            -
                          </button>
                          <span className="w-5 flex items-center justify-center">
                            {fruit?.quantity < 10
                              ? "0" + fruit?.quantity
                              : fruit?.quantity}
                          </span>
                          <button
                            className="rounded bg-primaryLightColor text-black text-xl px-2"
                            onClick={() => handleIncrement(fruit?.id)}
                          >
                            +
                          </button>
                        </div>
                        {fruit?.servings && (
                          <div className="mt-3">
                            <SelectItems
                              data={servingsData}
                              value={fruit?.servings}
                              triggerClass="border border-gray-300 text-red-400"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <Button
                        className="capitalize px-14 shadow-black/20 shadow-md py-3 w-full"
                        onClick={() => handleAddToCart(fruit)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="flex items-center justify-center text-4xl font-extrabold h-60">
                No items in the cart.
              </p>
            )}
          </div>
        </div>
        <div className="py-10 w-[950px] mx-auto pb-[350px]">
          <div className="flex flex-col items-center justify-center">
            <img src={logo2} alt="" />
            <div className="flex flex-col items-center justify-center gap-3">
              <h3 className="text-[40px] font-bold text-gray-600 text-center">
                <span className="text-secondaryTextColor">
                  Guaranteed fresh.
                </span>{" "}
                no contracts.{" "}
                <span className="text-secondaryTextColor">free delivery</span>
              </h3>
              <p className="font-thin text-lg text-center">
                The Fruit Box is an amazing wellness program your staff will
                really love. Energize your workplace with fresh fruit
                deliveries!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FruitBox;
