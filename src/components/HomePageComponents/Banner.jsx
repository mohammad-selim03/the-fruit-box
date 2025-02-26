import { bannerbg, homebanner, orderPhoto } from "@/assets";
import Button from "../DynamicComponents/Button";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative z-20">
      <div className="relative">
        <figure className="w-full h-[700px] md:h-[850px] lg:h-[1150px]">
          <img
            src={bannerbg}
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </figure>
        <div className="w-full overflow-hidden absolute top-20 left-0">
          <figure className="h-full w-full absolute top-0 left-0">
            <img
              src={homebanner}
              alt=""
              className="w-full h-full object-cover object-right"
            />
          </figure>

          <div className="relative max-w-[1347px] px-4 md:px-8 mx-auto pt-20 md:pt-32 pb-14 md:pb-20 lg:pt-[180px] lg:pb-[120px]">
            <div className="relative w-fit mx-auto md:mx-0">
              <img
                src={orderPhoto}
                alt=""
                className="absolute aspect-[550/418] md:aspect-[650/418] lg:aspect-[700/418] h-full top-0 left-0"
              />
              <div className="flex flex-col gap-1 sm:gap-3 relative z-10 p-8 lg:p-[54px] w-fit">
                <h2
                  className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[64px] font-bold text-white leading-[112%] text-center md:text-left"
                  style={{ stroke: "white", webkitTextStroke: "2px white" }}
                >
                  OFFICE FRUIT <br /> DELIVERY
                </h2>
                <p className="text-white text-sm md:text-[16px] lg:text-2xl text-center md:text-left">
                  It’s good for you and <br className="md:hidden" /> staff love
                  it too.
                </p>
                <Link to={"/fruit-box"} className="w-fit mx-auto md:mx-0">
                  <Button className="py-2 md:py-3.5 lg:py-5 px-5 md:px-8  lg:px-10 rounded-3xl shadow-black/20 shadow-md border-2 border-white text-xs md:text-base">
                    Order a Fruit Box
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1347px] px-4 md:px-8 mx-auto ">
          <div className="absolute top-[460px] xs:top-[470px] sm:top-[480px] md:top-[580px] lg:top-[820px] left-1/2 -translate-x-1/2 w-[90%]">
            <p
              className="text-[24px] md:text-[32px] lg:text-[40px] text-center font-extrabold mx-auto mb-1 md:mb-2"
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
            <p className="text-center text-sm md:text-base lg:text-lg mx-auto font-bold">
              Try us for just 2 deliveries and discover why we’re Calgary’s
              premier office fruit supplier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
