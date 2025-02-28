import Container from "@/components/DynamicComponents/Container";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { Cartheader } from "@/assets/StaticData";
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
import SelectItems from "@/components/DynamicComponents/SelectItems";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const Cart = () => {
  const { data: fruitsData, isLoading } = useGetApi("products", true);

  // const servingsData = fruitsData?.find((data) => data?.price === null);
  // localStorage.setItem("servingsData", JSON.stringify(servingsData));

  const [fruits, setFruits] = useState([]);
  const [fruitsObject, setFruitsObject] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempservingsData, setTempservingsData] = useState({});
  const initialServing = tempservingsData?.servings?.[0] || [];
  const [selectedServing, setSelectedServing] = useState(initialServing);

  // console.log("selecteed servings", selectedServing);
  // console.log("id", selectedServing?.pivot?.serving_id);

  const location = useLocation();
  const navigate = useNavigate();

  const handleServingChange = (servingName) => {
    const selected = tempservingsData?.servings?.find(
      (serving) => serving.name === servingName
    );
    if (selected) {
      setSelectedServing(selected);
      window.location.reload();
    }
  };

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

  let previousPage = location.state?.from || "Direct Access";
  console.log("User navigated from:", previousPage);

  const deleteProduct = (id) => {
    const updatedFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(updatedFruits);
    localStorage.setItem("fruits", JSON.stringify(updatedFruits));
    toast.success("Fruit deleted successfully");
    console.log("update product", updatedFruits);
    const prod = fruits?.find(
      (pr) =>
        // pr.servings_multiple !== undefined ||
        // pr.price_multiple !== "" ||
        pr?.custom == 1
    );
    console.log("update prod", prod);
    if (prod) {
      navigate(location.pathname, { replace: true, state: null });
    }

    // Reset previous page state
  };
  // const {
  //   postData,
  //   isLoading: isPosting,
  //   isError: isPostingError,
  //   isSuccess,
  // } = UsePostApi("order/store", (data) => console.log("error data", data));
  const {
    postData,
    isLoading: isPosting,
    isError: isPostingError,
    isSuccess,
    error, // Capture error if needed
  } = UsePostApi(
    "order/store",
    (data) => console.log("✅ Success Response:", data), // Success callback
    (err) => console.error("❌ Error Response:", err) // Error callback
  );

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
      // console.log("parsed data", parsedFruits);
      setTempservingsData(parsedFruits);
    }
  }, []);

  useEffect(() => {
    const parsedFruits = JSON.parse(localStorage.getItem("fruits")) || [];

    const modifiedFruits = parsedFruits.map((fruit) => ({
      ...fruit,
      price_multiple: fruit?.price_multiple,
      servings: fruit?.servings ? fruit?.servings : selectedServing,
    }));

    localStorage.setItem("fruits", JSON.stringify(modifiedFruits));
  }, []);

  useEffect(() => {
    const parsedFruits = JSON.parse(localStorage.getItem("fruits")) || [];

    const modifiedFruits = parsedFruits.map((fruit) => ({
      ...fruit,
      price_multiple: fruit?.price_multiple,
      servings:
        previousPage === "/" || previousPage === "/fruit-box"
          ? fruit?.servings
          : selectedServing, // Only update if `servings` is empty
    }));

    localStorage.setItem("fruits", JSON.stringify(modifiedFruits));
  }, [selectedServing]);

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
          fruit?.price_multiple === null
            ? null
            : selectedServing?.pivot?.serving_id ||
              fruit?.servings?.pivot?.serving_id;
        return acc;
      }, {});
      // console.log("Final Fruits Object Payload:", fruitsObject);

      setFruitsObject(fruitsObject);
    }
  }, [fruits]);

  console.log("selected servngs", selectedServing);

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
      // toast.error("Failed to submit order", error?.response?.data?.message);
      toast.error(
        error?.response?.data?.message
          ? "Failed to submit order, Please select serving of custom fruit"
          : "Somehting went wrong, please try again"
      );
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

        <div className="border-4 border-primaryBoldColor rounded-3xl p-2 sm:p-4">
          <div className="bg-white px-2 sm:px-5 rounded-3xl py-5 pt-10 w-full">
            {fruits?.length > 0 && (
              <ScrollArea className="w-full overflow-x-auto">
                <div className="flex items-center justify-end px-0 sm:px-0 md:px-0 text-xl font-bold gap-2 min-[550px]:gap-5 min-[440px]:gap-6 sm:gap-14 md:gap-14 lg:gap-14 lg:ml-10 min-w-max">
                  {Cartheader?.map((data) => (
                    <p
                      key={data}
                      className="text-xs min-[666px]:text-sm md:text-base lg:text-2xl text-gray-600"
                    >
                      {data}
                    </p>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            )}

            {fruits.length > 0 ? (
              // <ScrollArea className="w-full overflow-x-auto">
              <div>
                {fruits?.map((fruit) => (
                  <div
                    key={fruit.id}
                    className="flex items-center gap-3 sm:gap-5 xl:gap-12 w-full border-b border-gray-200 py-5  "
                  >
                    <button
                      onClick={() => deleteProduct(fruit?.id)}
                      className="p-1 sm:p-2 rounded-full bg-[#A5A5A5] text-white text-xs lg:text-xl"
                    >
                      <IoMdClose />
                    </button>
                    <div
                      className="w-[30%] flex items-center justify-center
                     md:w-[280px] "
                    >
                      <img
                        src={fruit?.image}
                        alt={fruit?.name}
                        className={cn(
                          "w-[100%] lg:w-[200px]",
                          fruit?.name === "SMALL Fruit Box" &&
                            "w-[60%] sm:w-[60%] lg:w-2/3"
                        )}
                      />
                    </div>
                    <div className="flex items-center justify-between w-full  ">
                      <div className="flex flex-col gap-5  w-40 md:w-60 lg:w-80 xl:w-[60%]">
                        <h2 className="text-xs flex flex-wrap items-start gap-0 md:gap-2 sm:text-base md:text-lg lg:text-2xl font-bold text-[#798090] capitalize">
                          {fruit.name} {"   "}
                          {fruit?.servings_multiple === null ||
                          fruit?.price_multiple === null ? (
                            <span className="text-secondaryTextColor font-bold block">
                              {fruit?.servings_single || fruit?.servings_single}
                            </span>
                          ) : (
                            <span className="text-secondaryTextColor font-bold">
                              {selectedServing?.name ||
                                fruit?.servings_multiple}
                            </span>
                          )}
                        </h2>
                        <AddFruits
                          placeholder="Add another size"
                          triggerClass="border border-gray-300 text-sm w-32 text-[10px] sm:text-base sm:w-44 lg:w-60 placeholder:text-red-400 py-2 h-10 lg:py-3 lg:h-14"
                          data={fruitsData}
                          selectedItem={selectedItem}
                          setSelectedItem={setSelectedItem}
                        />
                      </div>
                      <div className="max-w-[350px] ml-5 ">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center justify-end  xl:gap-5 text-gray-600 w-full">
                          {/* <p className="text-xl lg:text-[26px] max-w-28 text-center">
                          ${parseFloat(fruit.price)}
                        </p> */}
                          <div className="">
                            {fruit?.price_multiple !== null ? (
                              <p className="sm:text-lg md:text-[22px] lg:text-[26px] w-28 text-left sm:text-center ml-5 sm:ml-1">
                                $
                                {parseFloat(
                                  selectedServing.price || fruit?.price
                                )}
                              </p>
                            ) : (
                              <p className="sm:text-lg md:text-[22px] lg:text-[26px] w-28 text-left sm:text-center ml-5 sm:ml-1">
                                ${parseFloat(fruit?.price)}
                              </p>
                            )}
                          </div>
                          <div>
                            <div className="flex items-center justify-between gap-2 border border-gray-300 p-2 rounded-xl w-20 sm:w-28 md:w-32">
                              <button
                                className="rounded bg-primaryLightColor text-black text-sm md:text-base lg:text-xl px-1.5 sm:px-2 py-1.5 sm:py-2"
                                onClick={() => handleDecrement(fruit?.id)}
                              >
                                <FiMinus className="text-black/80 text-[8px] lg:text-sm" />
                              </button>
                              <span className="w-5 flex items-center justify-center text-base  lg:text-base">
                                {fruit?.quantity ? fruit?.quantity : 1}
                              </span>
                              <button
                                className="rounded bg-primaryLightColor text-black text-sm md:text-base lg:text-xl px-1.5 sm:px-2 py-1.5 sm:py-2"
                                onClick={() => handleIncrement(fruit?.id)}
                              >
                                <FiPlus className="text-black/80 text-[8px] lg:text-sm" />
                              </button>
                            </div>
                            {previousPage === "/" ||
                            previousPage === "/fruit-box"
                              ? null
                              : (fruit?.servings_multiple ||
                                  fruit?.price_multiple ||
                                  fruit?.servings_single === null) && (
                                  <div className="mt-3 w-20 sm:w-32">
                                    <SelectItems
                                      data={tempservingsData?.servings}
                                      value={
                                        fruit?.servings?.name ||
                                        selectedServing?.name
                                      }
                                      setServings={
                                        handleServingChange ||
                                        fruit?.servings_multiple
                                      }
                                      triggerClass="border border-gray-300 text-gray-500 py-2"
                                      valueClass={"text-xs px-0"}
                                      placeholder="# of serving"
                                    />
                                  </div>
                                )}
                          </div>

                          {/* <p className="text-xl lg:text-[26px] text-secondaryTextColor text-center ml-6">
                          $
                          {parseFloat(fruit?.price) *
                            parseFloat(fruit.quantity ? fruit.quantity : 1)}
                        </p> */}
                          <div className=" sm:ml-10 ">
                            {fruit?.servings_multiple ||
                            fruit?.servings_single === null ? (
                              <p className="sm:text-lg md:text-[22px] lg:text-[26px]  w-28 text-left sm:text-center text-secondaryTextColor  ml-5 sm:-ml-5 md:-ml-8 ">
                                $
                                {parseFloat(
                                  selectedServing.price || fruit?.price
                                ) *
                                  parseFloat(
                                    fruit.quantity ? fruit.quantity : 1
                                  )}
                              </p>
                            ) : (
                              <p className="sm:text-lg md:text-[22px] lg:text-[26px] w-28 text-left sm:text-center text-secondaryTextColor  ml-5 sm:-ml-5 md:-ml-8">
                                $
                                {parseFloat(fruit.price) *
                                  parseFloat(
                                    fruit.quantity ? fruit.quantity : 1
                                  )}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // <ScrollBar orientation="horizontal" />
              // </ScrollArea>
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
