import { bannerbg, homebanner, orderPhoto } from "@/assets";
import Button from "../DynamicComponents/Button";

const Banner = () => {
  return (
    <div>
      <div className="relative z-20">
        <img src={bannerbg} alt="" className="h-[1150px] w-full " />
        <img
          src={homebanner}
          alt=""
          className="absolute top-0 left-0 h-[825px]"
        />
        <div>
          <img
            src={orderPhoto}
            alt=""
            className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2"
          />
          <div className="absolute top-[17%] left-[17%] flex flex-col gap-3">
            <h2 className="text-[64px] leading-none font-bold text-white ">
              OFFICE FRUIT <br /> DELIVERY
            </h2>
            <p className="text-white text-[32px]">
              It’s good for you and staff <br /> love it too.
            </p>
            <Button className="py-5 rounded-3xl shadow-black/20 shadow-md border-2 border-white">
              Order a Fruit Box
            </Button>
          </div>
        </div>
        <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2">
          <p className="text-[40px] text-center font-extrabold">
            <span className="text-secondaryTextColor">Guaranteed fresh.</span>{" "}
            No contracts.{" "}
            <span className="text-secondaryTextColor">ree delivery.</span>
          </p>
          <p className="text-center">
            Try us for just 2 delivereies and discover we why we’re Calgary’s
            premier office fruit supplier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
