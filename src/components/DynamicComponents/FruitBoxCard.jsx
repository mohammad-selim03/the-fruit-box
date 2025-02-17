import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import Button from "./Button";
import SelectItems from "./SelectItems";
import { servingsData } from "@/assets/StaticData";

const FruitBoxCard = ({ data }) => {
  return (
    <div className={cn("relative z-20")}>
      <div className="flex items-center gap-0 relative">
        <div
          className={cn(
            "w-[325.678px] h-[315.548px] flex items-center justify-center bg-white border border-r-0 border-secondaryTextColor rounded-l-[30px]",
            data?.name === "" && "border-SecondaryBg"
          )}
        >
          <img src={data?.image?.props?.src} alt="" />
        </div>
        <div className="relative">
          <img src={data?.bg?.props?.src} alt="" className="h-[315.548px]" />
          <div className="absolute right-0 px-7 top-[34%] -translate-y-1/2 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-[26px] text-white">{data?.name}</h2>
              {data?.description === "" ? (
                <div className="">
                  <SelectItems
                    placeholder={"10 Servings"}
                    data={servingsData}
                    triggerClass="py-6"
                  />
                </div>
              ) : (
                <p className={cn("", data?.name === "" && "-mt-14 text-white")}>
                  {" "}
                  {data?.description}
                </p>
              )}
            </div>

            <div
              className={cn(
                "absolute -bottom-32 w-[80%]",
                data?.description === "" && "-bottom-[120px]"
              )}
            >
              <Button className="border-2 rounded-2xl border-white w-full shadow-black/20 shadow-lg py-3">
                {data?.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitBoxCard;

FruitBoxCard.propTypes = {
  data: PropTypes.object,
};
