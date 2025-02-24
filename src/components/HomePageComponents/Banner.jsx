import { bannerbg, homebanner, orderPhoto } from "@/assets";
import Button from "../DynamicComponents/Button";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="relative z-20">
        <img
          src={bannerbg}
          alt=""
          className="h-[800px] md:h-[1000px] lg:h-[1150px] w-full "
        />
        <img
          src={homebanner}
          alt=""
          className="absolute top-0 left-0 aspect-video w-full h-[500px] md:h-[600px] lg:h-[825px]"
        />
        <div className="absolute top-[30%] lg:top-[40%] left-[40%] lg:left-[30%] -translate-x-1/2 -translate-y-1/2">
          <img src={orderPhoto} alt="" className=" " />
          <div className="absolute top-[15%] left-[12%] flex flex-col gap-1 sm:gap-3">
            <h2
              className="text-[16px] md:text-[32px] lg:text-[64px] font-bold text-white leading-none"
              style={{ stroke: "white", webkitTextStroke: "2px white" }}
            >
              OFFICE FRUIT <br /> DELIVERY
            </h2>
            <p className="text-white text-[12px] md:text-[16px] lg:text-[32px]">
              It’s good for you and staff <br /> love it too.
            </p>
            <Link to={"/fruit-box"}>
              <Button className="py-2 md:py-5 px-5 md:px-10 rounded-3xl shadow-black/20 shadow-md border-2 border-white text-xs md:text-base">
                Order a Fruit Box
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-[20%] md:bottom-[17%] left-1/2 -translate-x-1/2 w-full">
          <p
            className="text-[20px] md:text-[40px] text-center font-extrabold"
            style={{
              textStroke: "2px black",
              webkitTextStroke: "2px black",
            }}
          >
            <span
              className="text-green-700 stroke-2 stroke-primaryLightColor"
              style={{
                textStroke: "2px black",
                webkitTextStroke: "2px green",
              }}
            >
              Guaranteed fresh.
            </span>{" "}
            No contracts.{" "}
            <span
              className="text-green-700"
              style={{
                textStroke: "2px black",
                webkitTextStroke: "2px green",
              }}
            >
              ree delivery.
            </span>
          </p>
          <p className="text-center text-xs md:text-base">
            Try us for just 2 delivereies and discover we why we’re Calgary’s
            premier office fruit supplier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
