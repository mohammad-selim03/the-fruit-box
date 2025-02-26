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
import Loader from "@/components/ui/Shared/Loader";

const Cart = () => {
  const { data: fruitsData, isLoading } = useGetApi("products", true);

  const servingsData = fruitsData?.find((data) => data?.price === null);
  localStorage.setItem("servingsData", JSON.stringify(servingsData));

  const [fruits, setFruits] = useState([]);
  const [fruitsObject, setFruitsObject] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
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
    const data = localStorage.getItem("servingsData");
    if (data) {
      const parsedFruits = JSON.parse(data);
      console.log("parsed data", parsedFruits);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      <h1 className="flex items-center justify-center h-96">
        <Loader />
      </h1>;
    }
  }, []);

  useEffect(() => {
    if (fruits.length > 0) {
      const fruitsObject = fruits.reduce((acc, fruit, index) => {
        acc[`items[${index}][product_id]`] = fruit.id;
        acc[`items[${index}][quantity]`] = fruit.quantity || 1;
        acc[`items[${index}][service_id]`] =
          fruit?.servings_id?.pivot?.serving_id || fruit?.servings[0]?.pivot?.serving_id;
        null;
        return acc;
      }, {});
      console.log("Final Fruits Object Payload:", fruitsObject);

      setFruitsObject(fruitsObject);
    }
  }, [fruits]); // Add selectedServing to dependencies

  useEffect(() => {
    if (selectedItem && Object.keys(selectedItem).length > 0) {
      const existingFruit = fruits.find(
        (fruit) => fruit.id === selectedItem.id
      );

      // Create a modified fruit object with only the first serving
      let newFruit = { ...selectedItem, quantity: 1 };

      // If the fruit has servings, only keep the first serving (index 0)
      if (
        newFruit.servings &&
        Array.isArray(newFruit.servings) &&
        newFruit.servings.length > 0
      ) {
        // Extract only the first serving
        const firstServing = newFruit.servings[0];

        // Replace the entire servings array with just the first serving
        newFruit.servings = [firstServing];

        // Update the price based on the selected serving if needed
        if (!newFruit.price) {
          newFruit.price = firstServing.price;
        }
      }

      if (existingFruit) {
        // If fruit already exists, just increase the quantity
        const updatedFruits = fruits.map((fruit) =>
          fruit.id === selectedItem.id
            ? { ...fruit, quantity: fruit.quantity + 1 }
            : fruit
        );
        setFruits(updatedFruits);
        localStorage.setItem("fruits", JSON.stringify(updatedFruits));
      } else {
        // If fruit is new, add the modified fruit with only the first serving
        const updatedFruits = [...fruits, newFruit];
        setFruits(updatedFruits);
        localStorage.setItem("fruits", JSON.stringify(updatedFruits));
      }
    }
  }, [selectedItem]);

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
        <div className="pb-10 mt-10">
          <h1 className="text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px] font-bold text-center">
            Fruit box order form
          </h1>
          <p className="text-center text-xs sm:text-sm md:text-base uppercase text-secondaryTextColor font-bold">
            JUST A FEW MORE DETAILS TO DELICIOUSNESS
          </p>{" "}
        </div>
        <div className="border-4 border-primaryBoldColor rounded-3xl p-4 ">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            {fruits?.length > 0 && (
              <div className="flex items-center justify-end text-xl font-bold gap-8 ml-10 max-w-6xl ">
                {Cartheader?.map((data) => (
                  <p key={data} className="text-sm md:text-2xl text-gray-600">
                    {data}
                  </p>
                ))}
              </div>
            )}
            {fruits.length > 0 ? (
              fruits.map((fruit) => {
                console.log(fruit?.servings_multiple);
                return (
                  <div
                    key={fruit.id}
                    className="flex items-center gap-5 xl:gap-12 w-full border-b py-5"
                  >
                    <button
                      onClick={() => deleteProduct(fruit?.id)}
                      className="p-2 rounded-full bg-[#A5A5A5] text-white text-xl"
                    >
                      <IoMdClose />
                    </button>
                    <div className="w-[350px] md:w-[280px] ">
                      <img
                        src={fruit?.image}
                        alt={fruit?.name}
                        className={cn(
                          "w-[200px]",
                          fruit?.name === "SMALL Fruit Box" && "w-2/3"
                        )}
                      />
                    </div>
                    <div className="w-[420px] flex flex-col gap-5">
                      <h2 className="text-2xl font-bold text-[#798090] capitalize">
                        {fruit.name} {"   "}
                        {fruit?.price_multiple !== null ? (
                          <span className="text-secondaryTextColor font-bold block">
                            10-60+ servings.
                          </span>
                        ) : (
                          <span className="text-secondaryTextColor font-bold">
                            {fruit?.servings_single}
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
                    <div className="max-w-[350px]">
                      <div className="grid grid-cols-3 gap-3 xl:gap-5  text-gray-600  w-full">
                        {fruit?.price_multiple !== null ? (
                          <p className="text-[26px] max-w-28 text-center">
                            ${parseFloat(fruit.price || fruit?.price)}
                          </p>
                        ) : (
                          <p className="text-[26px] max-w-28 text-center">
                            ${parseFloat(fruit?.price)}
                          </p>
                        )}
                        <div className="">
                          <div className="flex items-center justify-between gap-2 border border-gray-300 p-2 rounded-xl w-32 ">
                            <button
                              className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
                              onClick={() => handleDecrement(fruit?.id)}
                            >
                              <FiMinus className="text-black/80 text-sm" />
                            </button>
                            <span className="w-5 flex items-center justify-center ">
                              {fruit?.quantity < 10 && "0"}
                              {fruit?.quantity ? fruit?.quantity : 1}
                            </span>
                            <button
                              className="rounded bg-primaryLightColor text-black text-xl px-2 py-2"
                              onClick={() => handleIncrement(fruit?.id)}
                            >
                              <FiPlus className="text-black/80 text-sm" />
                            </button>
                          </div>
                          {/* {(fruit?.servings_multiple ||
                            fruit?.servingg === "" ||
                            fruit?.servings_single === null) && (
                            <div className="mt-3 w-32">
                              <SelectItems
                                data={tempservingsData?.servings}
                                value={
                                  selectedServing?.name ||
                                  fruit?.servings_multiple
                                }
                                setServings={
                                  handleServingChange ||
                                  fruit?.servings_multiple
                                }
                                triggerClass="border border-gray-300 text-gray-500 py-2"
                                valueClass={"text-xs px-0"}
                                placeholder="# of selected serving"
                              />
                            </div>
                          )} */}
                        </div>
                        {fruit?.servings_multiple ||
                        fruit?.servings_single === null ? (
                          <p className="text-[26px] text-secondaryTextColor text-center ml-6">
                            $
                            {parseFloat(fruit?.price || fruit?.price) *
                              parseFloat(fruit.quantity ? fruit.quantity : 1)}
                          </p>
                        ) : (
                          <p className="text-[26px] text-secondaryTextColor text-center ml-6">
                            $
                            {parseFloat(fruit.price) *
                              parseFloat(fruit.quantity ? fruit.quantity : 1)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <p className="flex items-center justify-center text-4xl font-extrabold h-60">
                  No items in the cart.
                </p>
                <div className="flex items-center justify-center">
                  <AddFruits
                    placeholder="Choose a Box size."
                    triggerClass="border border-gray-300 w-60 placeholder:text-red-400 py-3 h-14"
                    data={fruitsData}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                </div>
              </>
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
                  watch={watch}
                  setValue={setValue}
                />
                <SuccessModal
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            )}
          </div>
        </div>
        <div className="py-10 max-w-[950px] mx-auto">
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
