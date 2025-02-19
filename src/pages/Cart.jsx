import Container from "@/components/DynamicComponents/Container";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { Cartheader, servingsData } from "@/assets/StaticData";
import toast from "react-hot-toast";
import Delivery from "@/components/CartPageComponents/Delivery";
import {
  customfruits,
  greenCardbg,
  largefruits,
  mediumfruits,
  orangeCardbg,
  smallfruits,
  logo2,
} from "@/assets";
import AddFruits from "@/components/DynamicComponents/AddFruits";
import { useForm } from "react-hook-form";
import { SuccessModal } from "@/components/CartPageComponents/SuccessModal";
import { cn } from "@/lib/utils";

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
const Cart = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");

  const {
    register,
    handleSubmit,
    control,
    onChange,
    formState: { errors },
  } = useForm();

  const handleIncrement = (id) => {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === id) {
        fruit.quantity += 1;
      }
      return fruit;
    });
    setFruits(updatedFruits);
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

  const placeOrder = (data) => {
    console.log("order data", data);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const storedFruits = localStorage.getItem("fruits");
    if (storedFruits) {
      const parsedFruits = JSON.parse(storedFruits);
      setFruits(parsedFruits);

      const total = parsedFruits.reduce(
        (sum, fruit) => sum + (fruit?.quantity * fruit?.price || fruit?.price),
        0
      );
      setTotalAmount(total);
    }
  }, []);

  console.log("amount data", totalAmount);
  useEffect(() => {
    if (selectedItem && Object.keys(selectedItem).length > 0) {
      const updatedFruits = [...fruits, selectedItem];

      localStorage.setItem("fruits", JSON.stringify(updatedFruits));
      setFruits(updatedFruits);
    }
  }, [selectedItem]);

  return (
    <div className="min-h-[900px] pt-20">
      <Container>
        <div className="border-4 border-primaryBoldColor rounded-3xl p-4 ">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            <div className="flex items-center justify-end text-xl font-bold gap-14 ml-6 max-w-6xl">
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
                  <div className="w-[280px] ">
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
                    <AddFruits
                      placeholder="Add another size"
                      triggerClass="border border-gray-300 w-60 placeholder:text-red-400"
                      data={fruitBoxesData}
                      setSelectedItem={setSelectedItem}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <p className="text-[26px] w-28 text-center ml-3">
                      ${fruit.price}
                    </p>
                    <div>
                      <div className="flex items-center justify-between gap-2 border border-gray-300 p-1 rounded-xl w-32">
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
                            triggerClass="border border-gray-300"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-[26px] w-10 text-secondaryTextColor ml-5">
                      ${fruit.price * fruit.quantity}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="flex items-center justify-center text-4xl font-extrabold h-60">
                No items in the cart.
              </p>
            )}
            <div className="pt-16 pb-5">
              <Delivery
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                control={control}
                placeOrder={placeOrder}
                onChange={onChange}
              />
              <SuccessModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
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

export default Cart;
