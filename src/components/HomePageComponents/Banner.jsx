import { bannerbg, homebanner, orderPhoto } from "@/assets";
import Button from "../DynamicComponents/Button";

const Banner = () => {
  return (
    <div>
      <div className="relative z-20">
        <img src={bannerbg} alt="" className="h-[1250px] w-full " />
        <img
          src={homebanner}
          alt=""
          className="absolute top-0 left-0 h-[825px]"
        />
        <img
          src={orderPhoto}
          alt=""
          className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute top-[39.5%] left-[17%]">
          <Button className="w-[289px] py-4 text-white text-xl">
            Order a Fruit Box
          </Button>
        </div>
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2">
          <p className="text-[40px] text-center">
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
