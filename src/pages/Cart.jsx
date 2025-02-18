import Container from "@/components/DynamicComponents/Container";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { Cartheader, servingsData } from "@/assets/StaticData";
import toast from "react-hot-toast";

const Cart = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fruitsData = localStorage.getItem("fruits");
    if (fruitsData) {
      setFruits(JSON.parse(fruitsData));
    }
  }, []);

  const handleIncrement = (id) => {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === id) {
        fruit.quantity += 1;
      }
      return fruit;
    });
    setFruits(updatedFruits); // Update state
    localStorage.setItem("fruits", JSON.stringify(updatedFruits));
  };

  const handleDecrement = (id) => {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === id && fruit.quantity > 1) {
        fruit.quantity -= 1;
      }
      return fruit;
    });
    setFruits(updatedFruits);
    localStorage.setItem("fruits", JSON.stringify(updatedFruits));
  };

  const deleteProduct = (id) => {
    const updatedFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(updatedFruits);
    localStorage.setItem("fruits", JSON.stringify(updatedFruits));
    toast.success("Fruit deleted successfully");
  };

  return (
    <div className="bg-[#F0EEE8] min-h-[900px] pt-20">
      <Container>
        <div className="border-4 border-primaryBoldColor rounded-3xl p-4 ">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            <div className="flex items-center justify-end text-xl font-bold gap-12 -ml-8 max-w-6xl">
              {Cartheader?.map((data) => (
                <p key={data}>{data}</p>
              ))}
            </div>
            {fruits.length > 0 ? (
              fruits.map((fruit) => (
                <div
                  key={fruit.id}
                  className="flex items-center gap-12 w-full border-b py-5"
                >
                  <button
                    onClick={() => deleteProduct(fruit?.id)}
                    className="p-2 rounded-full bg-[#A5A5A5] text-white text-xl"
                  >
                    <IoMdClose />
                  </button>
                  <div className="w-[280px] h-fullu">
                    <img
                      src={fruit?.image}
                      alt={fruit?.name}
                      className="w-[280px]"
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
                    <SelectItems
                      placeholder="Add another size"
                      triggerClass="border border-gray-300 w-60 placeholder:text-red-400"
                      data={fruits}
                    />
                  </div>
                  <p className="text-[26px]">${fruit.price}</p>
                  <div>
                    <div className="flex items-center justify-between gap-2 border border-gray-300 p-1 rounded-xl">
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
                    <div className="mt-3">
                      <SelectItems
                        data={servingsData}
                        value={fruit?.servings}
                      />
                    </div>
                  </div>
                  <p className="text-[26px] w-10 text-secondaryTextColor">
                    ${fruit.price * fruit.quantity}
                  </p>
                </div>
              ))
            ) : (
              <p className="flex items-center justify-center text-4xl font-extrabold h-60">
                No items in the cart.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
