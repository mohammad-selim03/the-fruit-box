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

const fruitBoxesData = [
  { id: 1, name: "SMALL Fruit Box", description: "15 SERVINGS / 5 - 10 STAFF", price: 30.5, image: smallfruits, bg: greenCardbg, borderColor: "#75AC46" },
  { id: 2, name: "Medium Fruit Box", description: "30+ servings.", price: 50, image: mediumfruits, bg: orangeCardbg, borderColor: "#75AC46" },
  { id: 3, name: "Large Fruit Box", description: "60 servings /  21-40 staff", price: 78, image: largefruits, bg: greenCardbg, borderColor: "#75AC46" },
  { id: 4, name: "Custom Fruit Box", description: "", price: 28, image: customfruits, bg: greenCardbg, borderColor: "#75AC46" },
];

const FruitBox = () => {
  const { setCartItems } = useContext(Context);
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const storedFruits = JSON.parse(localStorage.getItem("fruits")) || [];
    setFruits(storedFruits.length ? storedFruits : fruitBoxesData.map(fruit => ({ ...fruit, quantity: 1 })));
  }, []);

  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(fruits));
  }, [fruits]);

  const handleQuantityChange = (id, change) => {
    setFruits(fruits.map(fruit => fruit.id === id ? { ...fruit, quantity: Math.max(1, fruit.quantity + change) } : fruit));
  };

  const handleAddToCart = (fruit) => {
    setCartItems(prevItems => {
      const existingItems = Array.isArray(prevItems) ? prevItems : [];
      const itemIndex = existingItems.findIndex(item => item.id === fruit.id);
      if (itemIndex !== -1) {
        existingItems[itemIndex].quantity += fruit.quantity;
        toast.success("Quantity updated in the cart");
      } else {
        toast.success("Product added to the cart");
        existingItems.push({ ...fruit });
      }
      localStorage.setItem("cart", JSON.stringify(existingItems));
      return [...existingItems];
    });
  };

  return (
    <div className="min-h-[900px] pt-20">
      <Container>
        <div className="pb-10 text-center">
          <h1 className="text-[64px] font-bold">Fruit Box Products</h1>
          <p className="uppercase text-secondaryTextColor font-bold">Just a few more details to deliciousness</p>
        </div>
        <div className="border-[8px] border-secondaryTextColor rounded-3xl p-4">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            {fruits.map(fruit => (
              <div key={fruit.id} className="flex items-center gap-12 w-full border-b py-5">
                <div className="w-[280px]">
                  <img src={fruit.image} alt={fruit.name} className={cn("w-[280px]", fruit.name === "SMALL Fruit Box" && "w-2/3")} />
                </div>
                <div className="w-[382px] flex flex-col gap-5">
                  <h2 className="text-2xl font-bold">{fruit.name}</h2>
                  <p className="text-secondaryTextColor text-lg font-bold">{fruit.description}</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                  <p className="text-[40px] text-secondaryTextColor w-28 text-center">${fruit.price}</p>
                  <div className="flex items-center gap-2 border border-gray-300 p-1 rounded-xl w-28">
                    <button className="rounded bg-primaryLightColor text-black text-xl px-2" onClick={() => handleQuantityChange(fruit.id, -1)}>-</button>
                    <span className="w-5 flex items-center justify-center">{fruit.quantity < 10 ? "0" + fruit.quantity : fruit.quantity}</span>
                    <button className="rounded bg-primaryLightColor text-black text-xl px-2" onClick={() => handleQuantityChange(fruit.id, 1)}>+</button>
                  </div>
                </div>
                <div>
                  <Button className="capitalize px-14 shadow-black/20 shadow-md py-3 w-full" onClick={() => handleAddToCart(fruit)}>Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FruitBox;
