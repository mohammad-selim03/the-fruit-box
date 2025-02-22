import {
  apple, 
  fruitboxbg,  
} from "@/assets";
import Title from "../DynamicComponents/Title";
import FruitBoxCard from "../DynamicComponents/FruitBoxCard";
import { useGetApi } from "@/hooks/API/useGetApi";
import Loader from "../ui/Shared/Loader";
import IsError from "../ui/Shared/IsError";

const FruitBoxSection = () => {
  const { data: fruitsData, isLoading, isError } = useGetApi("products", true);
 

  return isLoading ? (
    <div className="flex items-center justify-center h-80">
      {" "}
      <Loader />
    </div>
  ) : isError ? (
    <IsError />
  ) : (
    <div className="relative z-10 h-[1500px]">
      <img
        src={fruitboxbg}
        alt=""
        className="absolute -top-60 w-full z-[1px] left-0 h-[1700px]"
      />
      <div className="pt-[40px] md:pt-[135px] pb-9 max-w-[1315px] mx-auto z-20">
        <div className="flex flex-col items-center justify-center">
          <div className="pb-5 lg:pb-20 z-20 flex flex-col items-center justify-center">
            <Title
              className="text-black"
              style={{
                textStroke: "2px black",
                webkitTextStroke: "2px black",
              }}
            >
              OUR FRUIT BOXES
            </Title>
            <p className="text-secondaryTextColor text-xs md:text-base text-center">
              PACKED WITH FRESH FRUIT SUCH AS APPLES, ORANGES, BANANAS, AND
              SEASONALS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[20.67px] px-5 2xl:px-0">
            {fruitsData?.map((fruitBox, index) => (
              <FruitBoxCard key={index} data={fruitBox} />
            ))}
          </div>
        </div>
      </div>
      {/* <img src={boxStyle} alt="" className="absolute bottom-3 left-0" /> */}
      <img src={apple} className=" absolute -bottom-10 left-0" alt="" />
    </div>
  );
};

export default FruitBoxSection;
