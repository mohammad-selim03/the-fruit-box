import { apple, fruitboxbg } from "@/assets";
import Title from "../DynamicComponents/Title";
import FruitBoxCard from "../DynamicComponents/FruitBoxCard";
import { useGetApi } from "@/hooks/API/useGetApi";
import Loader from "../ui/Shared/Loader";
import IsError from "../ui/Shared/IsError";
import Container from "../DynamicComponents/Container";

const FruitBoxSection = () => {
  const { data: fruitsData, isLoading, isError } = useGetApi("products", true);
  console.log("fruits data: ", fruitsData);
  const servingsData = fruitsData?.find((data) => data?.price === null);
  localStorage.setItem("servingsData", JSON.stringify(servingsData));
  return isLoading ? (
    <div className="flex items-center justify-center h-80">
      {" "}
      <Loader />
    </div>
  ) : isError ? (
    <IsError />
  ) : (
    <div className="relative z-10">
      <figure className="absolute -top-60  w-full z-[1px] left-0 h-[calc(100%+240px)]">
        <img
          src={fruitboxbg}
          alt=""
          className="w-full h-full object-cover object-right-bottom"
        />
      </figure>
      <Container className="max-w-[1379px] px-4 md:px-8">
        <div className="pt-[40px] md:pt-[70px] lg:pt-[90px] max-w-[1315px] mx-auto z-20">
          <div className="flex flex-col items-center justify-center">
            <div className="z-20 flex flex-col items-center justify-center">
              <Title
                className="text-black text-[28px] md:text-[36px] lg:text-[44px] xl:text-[64px]"
                style={{
                  textStroke: "2px black",
                  webkitTextStroke: "2px black",
                }}
              >
                OUR FRUIT BOXES
              </Title>
              <p className="text-center sm:text-lg md:text-xl lg:text-2xl text-secondaryTextColor">
                PACKED WITH FRESH FRUIT SUCH AS APPLES, ORANGES, BANANAS, AND
                SEASONALS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[20.67px] pt-6 md:pt-9 lg:pt-12 pb-[120px] md:pb-[250px] lg:pb-[350px] w-full">
              {fruitsData?.map((fruitBox, index) => (
                <FruitBoxCard key={index} data={fruitBox} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <img src={apple} className=" absolute -bottom-10 lg:-bottom-20 -left-20 w-0 md:w-[400px] lg:w-[500px]" alt="" />
    </div>
  );
};

export default FruitBoxSection;
