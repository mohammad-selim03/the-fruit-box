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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Helmet } from "react-helmet-async";

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
          fruit?.servings_id?.pivot?.serving_id ||
          fruit?.servings?.[0]?.pivot?.serving_id ||
          null;
        return acc;
      }, {});
      console.log("Final Fruits Object Payload:", fruitsObject);

      setFruitsObject(fruitsObject);
    }
  }, [fruits]);

  useEffect(() => {
    if (selectedItem && Object.keys(selectedItem).length > 0) {
      const existingFruit = fruits.find(
        (fruit) => fruit.id === selectedItem.id
      );

      let newFruit = { ...selectedItem, quantity: 1 };

      if (
        newFruit.servings &&
        Array.isArray(newFruit.servings) &&
        newFruit.servings.length > 0
      ) {
        const firstServing = newFruit.servings[0];
        newFruit.servings = [firstServing];

        if (!newFruit.price) {
          newFruit.price = firstServing.price;
        }
      }

      if (existingFruit) {
        const updatedFruits = fruits.map((fruit) =>
          fruit.id === selectedItem.id
            ? { ...fruit, quantity: fruit.quantity + 1 }
            : fruit
        );
        setFruits(updatedFruits);
        localStorage.setItem("fruits", JSON.stringify(updatedFruits));
      } else {
        const updatedFruits = [...fruits, newFruit];
        setFruits(updatedFruits);
        localStorage.setItem("fruits", JSON.stringify(updatedFruits));
      }
    }
  }, [selectedItem]);

  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(true);
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
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Container>
        <div className="pb-10 mt-10">
          <h1 className="text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px] font-bold text-center">
            Fruit box order form
          </h1>
          <p className="text-center text-xs sm:text-sm md:text-base uppercase text-secondaryTextColor font-bold">
            JUST A FEW MORE DETAILS TO DELICIOUSNESS
          </p>{" "}
        </div>

        <div className="border-4 border-primaryBoldColor rounded-3xl p-4">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            {fruits?.length > 0 && (
              <ScrollArea className="w-full overflow-x-auto">
                <div className="flex items-center justify-end px-10 sm:px-20 md:px-0 text-xl font-bold gap-20 lg:gap-14 lg:ml-10 min-w-max">
                  {Cartheader?.map((data) => (
                    <p
                      key={data}
                      className="text-sm md:text-base lg:text-2xl text-gray-600"
                    >
                      {data}
                    </p>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            )}

            {fruits.length > 0 ? (
              <ScrollArea className="w-full overflow-x-auto">
                {fruits.map((fruit) => (
                  <div
                    key={fruit.id}
                    className="flex items-center gap-5 xl:gap-12 w-full border-b border-gray-200 py-5 min-w-max"
                  >
                    <button
                      onClick={() => deleteProduct(fruit?.id)}
                      className="p-2 rounded-full bg-[#A5A5A5] text-white text-xs lg:text-xl"
                    >
                      <IoMdClose />
                    </button>
                    <div
                      className="w-[20%] flex items-center justify-center
                     md:w-[280px] "
                    >
                      <img
                        src={fruit?.image}
                        alt={fruit?.name}
                        className={cn(
                          "w-[50%] lg:w-[200px]",
                          fruit?.name === "SMALL Fruit Box" &&
                            "w-[40%] lg:w-2/3"
                        )}
                      />
                    </div>
                    <div className="w-[420px] flex flex-col gap-5">
                      <h2 className="text-base md:text-lg lg:text-2xl font-bold text-[#798090] capitalize">
                        {fruit.name} {"   "}
                        {fruit?.servings_multiple == null ? (
                          <span className="text-secondaryTextColor font-bold block">
                            {fruit?.servings || fruit?.servings_single}
                          </span>
                        ) : (
                          <span className="text-secondaryTextColor font-bold">
                            {fruit?.servings_multiple}
                          </span>
                        )}
                      </h2>
                      <AddFruits
                        placeholder="Add another size"
                        triggerClass="border border-gray-300 text-sm w-44 lg:w-60 placeholder:text-red-400 py-2 h-10 lg:py-3 lg:h-14"
                        data={fruitsData}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                      />
                    </div>
                    <div className="max-w-[350px]">
                      <div className="grid grid-cols-3 gap-3 items-center xl:gap-5 text-gray-600 w-full">
                        <p className="text-xl lg:text-[26px] max-w-28 text-center">
                          ${parseFloat(fruit.price)}
                        </p>
                        <div>
                          <div className="flex items-center justify-between gap-2 border border-gray-300 p-2 rounded-xl w-24 lg:w-32">
                            <button
                              className="rounded bg-primaryLightColor text-black text-sm md:text-base lg:text-xl px-2 py-2"
                              onClick={() => handleDecrement(fruit?.id)}
                            >
                              <FiMinus className="text-black/80 text-[8px] lg:text-sm" />
                            </button>
                            <span className="w-5 flex items-center justify-center text-sm lg:text-base">
                              {fruit?.quantity < 10 && "0"}
                              {fruit?.quantity ? fruit?.quantity : 1}
                            </span>
                            <button
                              className="rounded bg-primaryLightColor text-black text-sm md:text-base lg:text-xl px-2 py-2"
                              onClick={() => handleIncrement(fruit?.id)}
                            >
                              <FiPlus className="text-black/80 text-[8px] lg:text-sm" />
                            </button>
                          </div>
                        </div>
                        <p className="text-xl lg:text-[26px] text-secondaryTextColor text-center ml-6">
                          $
                          {parseFloat(fruit?.price) *
                            parseFloat(fruit.quantity ? fruit.quantity : 1)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
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
              <h3 className="text-[28px] sm:text-[28px] lg:text-[40px]text-[40px] font-bold text-gray-600 text-center">
                <span className="text-secondaryTextColor">
                  Guaranteed fresh.
                </span>{" "}
                no contracts.{" "}
                <span className="text-secondaryTextColor">free delivery</span>
              </h3>
              <p className="font-thin text-sm lg:text-lg text-center text-black/60">
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
