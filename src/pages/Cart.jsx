import Container from "@/components/DynamicComponents/Container";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { Cartheader, servingsData } from "@/assets/StaticData";
import toast from "react-hot-toast";
import Delivery from "@/components/CartPageComponents/Delivery";
import { logo2 } from "@/assets";
import AddFruits from "@/components/DynamicComponents/AddFruits";
import { useForm } from "react-hook-form";
import { SuccessModal } from "@/components/CartPageComponents/SuccessModal";
import { cn } from "@/lib/utils";
import { useGetApi } from "@/hooks/API/useGetApi";
import { UsePostApi } from "@/hooks/API/usePostApi";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cart = () => {
  const [fruits, setFruits] = useState([]);
  const [fruitsObject, setFruitsObject] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");
  const [servings, setServings] = useState("");

  const { data: fruitsData } = useGetApi("products", true);

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
    const updatedFruits = fruits?.map((fruit) => {
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
  const {
    postData,
    isLoading: isPosting,
    isError: isPostingError,
    isSuccess,
  } = UsePostApi("order/store");

  const placeOrder = (data) => { 
    const combineData = { ...data, ...fruitsObject };
    postData(combineData);
  };

  useEffect(() => {
    const storedFruits = localStorage.getItem("fruits");
    if (storedFruits) {
      const parsedFruits = JSON.parse(storedFruits);
      setFruits(parsedFruits);
    }
  }, []);

  useEffect(() => {
    if (fruits.length > 0) {
      // Transform array into a single object
      const fruitsObject = fruits.reduce((acc, fruit, index) => {
        acc[`items[${index}][product_id]`] = fruit.id;
        acc[`items[${index}][quantity]`] = fruit.quantity || 1;
        acc[`items[${index}][service_id]`] =
          fruit?.servings_id?.pivot?.serving_id || null;
        return acc;
      }, {});

      console.log("Updated Fruits Object:", fruitsObject);
      setFruitsObject(fruitsObject);

      const total = fruits.reduce(
        (sum, fruit) => sum + (fruit?.quantity * fruit?.price || fruit?.price),
        0
      );
      setTotalAmount(total);
    }
  }, [fruits]);

  useEffect(() => {
    if (selectedItem && Object.keys(selectedItem).length > 0) {
      const updatedFruits = [...fruits, selectedItem];
      setFruits(updatedFruits);
      localStorage.setItem("fruits", JSON.stringify(updatedFruits));
    }

    if (servings) {
      const updatedFruits = fruits.map((fruit) =>
        fruit.servings_multiple !== null
          ? { ...fruit, servings_multiple: servings }
          : fruit
      );

      setFruits(updatedFruits);
      localStorage.setItem("fruits", JSON.stringify(updatedFruits));
    }
  }, [selectedItem, servings]);

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(true);
      // toast.success("Order submitted successfully");
      localStorage.removeItem("fruits");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isPostingError) {
      toast.error("Failed to submit order");
    }
  }, [isPostingError]);

  return (
    <div className="min-h-[900px] pt-20">
      <Container>
        <div className="pb-10">
          <h1 className="text-[64px] font-bold text-center">
            Fruit box order form
          </h1>
          <p className="text-center uppercase text-secondaryTextColor font-bold">
            JUST A FEW MORE DETAILS TO DELICIOUSNESS
          </p>{" "}
        </div>
        <div className="border-4 border-primaryBoldColor rounded-3xl p-4 ">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            {fruits?.length > 0 && (
              <div className="flex items-center justify-end text-xl font-bold gap-16 ml-10 max-w-6xl">
                {Cartheader?.map((data) => (
                  <p key={data}>{data}</p>
                ))}
              </div>
            )}
            {fruits.length > 0 ? (
              fruits.map((fruit) => {
                console.log(fruit?.servings_multiple);
                return (
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
                        src={fruit?.image}
                        alt={fruit?.name}
                        className={cn(
                          "w-[200px]",
                          fruit?.name === "SMALL Fruit Box" && "w-2/3"
                        )}
                      />
                    </div>
                    <div className="w-[382px] flex flex-col gap-5">
                      <h2 className="text-2xl font-bold text-[#798090] capitalize">
                        {fruit.name} {"   "}
                        {fruit?.price_multiple !== null && (
                          <span className="text-secondaryTextColor text-lg font-bold">
                            {fruit?.servings}
                          </span>
                        )}
                        {fruit?.servings_single !== null && (
                          <span className="text-secondaryTextColor text-lg font-bold">
                            {fruit?.servings}
                          </span>
                        )}
                      </h2>
                      <AddFruits
                        placeholder="Add another size"
                        triggerClass="border border-gray-300 w-60 placeholder:text-red-400 py-3 h-14"
                        data={fruitsData}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-5 max-w-[400px]">
                      <p className="text-[26px] w-28 text-center ml-1">
                        ${parseInt(fruit.price)}
                      </p>
                      <div>
                        <div className="flex items-center justify-between gap-2 border border-gray-300 p-2  rounded-xl w-32">
                          <button
                            className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
                            onClick={() => handleDecrement(fruit?.id)}
                          >
                            <FiMinus className="text-black/80 text-sm" />
                          </button>
                          <span className="w-5 flex items-center justify-center ">
                            {fruit?.quantity ? fruit?.quantity : 1}
                          </span>
                          <button
                            className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
                            onClick={() => handleIncrement(fruit?.id)}
                          >
                            <FiPlus className="text-black/80 text-sm" />
                          </button>
                        </div>
                        {fruit?.servings_multiple && (
                          <div className="mt-3 w-32">
                            <SelectItems
                              data={fruit?.servings}
                              value={fruit?.servings_multiple}
                              setServings={setServings}
                              triggerClass="border border-gray-300 text-red-400"
                              valueClass={"text-xs px-0"}
                            />
                          </div>
                        )}
                      </div>
                      <p className="text-[26px]  text-secondaryTextColor text-center">
                        $
                        {parseInt(fruit.price) *
                          parseInt(fruit.quantity ? fruit.quantity : 1)}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="flex items-center justify-center text-4xl font-extrabold h-60">
                No items in the cart.
              </p>
            )}
            {fruits.length > 0 && (
              <div className="pt-16 pb-5">
                <Delivery
                  register={register}
                  handleSubmit={handleSubmit}
                  errors={errors}
                  control={control}
                  isPosting={isPosting}
                  isPostingError={isPostingError}
                  placeOrder={placeOrder}
                  onChange={onChange}
                />
                <SuccessModal
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            )}
          </div>
        </div>
        <div className="py-10 w-[950px] mx-auto">
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
