import Container from "@/components/DynamicComponents/Container";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { Cartheader } from "@/assets/StaticData";

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
                  className="flex items-center gap-12 w-full border-b py-3"
                >
                  <button className="p-2 rounded-full bg-gray-400 text-white text-xl">
                    <IoMdClose />
                  </button>
                  <img src={fruit?.image} alt={fruit?.name} />
                  <div className="w-[382px] flex flex-col gap-5">
                    <h2 className="text-2xl font-bold">
                      {fruit.name}{" "}
                      <span className="text-secondaryTextColor text-lg font-bold">
                        {fruit?.description}
                      </span>
                    </h2>
                    <SelectItems
                      placeholder="Add another size"
                      triggerClass="border border-secondaryTextColor w-60"
                    />
                  </div>
                  <p className="text-[26px]">${fruit.price}</p>
                  <div className="flex items-center justify-between gap-2 border border-gray-300 p-1 rounded-xl">
                    <button
                      className="rounded bg-primaryLightColor text-black text-xl px-2"
                      onClick={() => handleDecrement(fruit?.id)}
                    >
                      -
                    </button>
                    <span className="w-5 flex items-center justify-center">{fruit?.quantity}</span>
                    <button
                      className="rounded bg-primaryLightColor text-black text-xl px-2"
                      onClick={() => handleIncrement(fruit?.id)}
                    >
                      +
                    </button>
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
