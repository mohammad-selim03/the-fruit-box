import { banana, howOrder, malta, howOrderText, howOrderText2 } from "@/assets";
import Button from "../DynamicComponents/Button";
import { Link } from "react-router";
import { CustomDate } from "./CustomDate";
import Container from "../DynamicComponents/Container";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const HowToOrder = () => {
  const imgRef = useRef(null);
  const [customScale, setCustomScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (imgRef.current) {
        const imgWidth = imgRef.current.clientWidth;
        const baseWidth = 848; // Base width of the image
        setCustomScale(imgWidth / baseWidth); // Scale factor based on image width
      }
    };

    updateScale(); // Initial scale set
    window.addEventListener("resize", updateScale); // Adjust on resize
    return () => window.removeEventListener("resize", updateScale);
  }, [customScale]);

  return (
    <div className="relative">
      <img
        src={howOrder}
        alt=""
        className="h-full w-full absolute top-0 left-0"
      />
      <div className="pt-[110px] sm:pt-[130px] md:pt-[160px] lg:pt-[200px] xl:pt-[250px] pb-[80px] md:pb-[140px] lg:pb-[180px] xl:pb-[220px]">
        <Container className="max-w-[1379px] px-4 md:px-8 relative">
          <h2
            className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[64px] font-bold text-white leading-[112%] w-fit  mx-auto"
            style={{ stroke: "white", webkitTextStroke: "2px white" }}
          >
            HOW TO ORDER
          </h2>
          <div className="w-fit mx-auto relative mt-[20px] md:mt-[40px] xl:mt-[70px]">
            <img
              ref={imgRef}
              src={howOrderText}
              alt=""
              className="relative w-full max-w-[848px] mx-auto"
            />
            <div
              className="absolute top-[33.35%] left-[5%] z-30 origin-top-left"
              style={{ transform: `scale(${customScale})` }}
            >
              <CustomDate />
            </div>
          </div>
          <Link to={"/fruit-box"} className="w-fit block pt-2 md:pt-4 mx-auto md:-translate-x-7">
            <Button className="px-6 md:px-10 rounded-3xl py-2 md:py-5 border-2 border-white shadow-black/20 shadow-md text-center block mx-auto">
              Order a Fruit Box
            </Button>
          </Link>
        </Container>
      </div>

      <div className="relative"></div>
      <img
        src={banana}
        alt=""
        className="absolute bottom-0 -left-5 w-0 md:w-[280px] lg:w-[380px] xl:w-[550px]"
      />

      <img src={malta} alt="" className="absolute top-0 right-0 w-0 md:w-[200px] lg:w-[250px] xl:w-[380px] " />
    </div>
  );
};

export default HowToOrder;
