import { useEffect, useContext } from "react";
import Container from "@/components/DynamicComponents/Container";
import { Context } from "@/context/Context";
import { logo2 } from "@/assets";
import { useGetApi } from "@/hooks/API/useGetApi";
import Loader from "@/components/ui/Shared/Loader";
import IsError from "@/components/ui/Shared/IsError";
import FruitCard from "@/components/HomePageComponents/FruitCard";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";

const FruitBox = () => {
  const { data, isLoading, isError } = useGetApi("products", true);
  const { setCartItems } = useContext(Context);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [setCartItems]);

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  ) : isError ? (
    <IsError />
  ) : (
    <div className="min-h-[900px] pt-20">
      <DynamicBanner
        title="ORDER"
        semiTitle="Fresh fruit delivered to your office."
      />
      <Container>
        <div className="pb-10 text-center">
          <h1 className="text-[64px] font-bold">Fruit Box Products</h1>
          <p className="uppercase text-secondaryTextColor font-bold">
            Just a few more details to deliciousness
          </p>
        </div>
        <div className="border-[8px] border-secondaryTextColor rounded-3xl p-4">
          <div className="bg-white px-5 rounded-3xl py-5 pt-10 w-full">
            {data.length > 0 ? (
              data.map((fruit, idx) => (
                <div key={`index - ${idx}`}>
                  <FruitCard data={fruit} />
                </div>
              ))
            ) : (
              <p className="flex items-center justify-center text-4xl font-extrabold h-60">
                No items in the cart.
              </p>
            )}
          </div>
        </div>
        <div className="py-5 w-[950px] mx-auto">
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
