import { banana, howOrder, malta } from "@/assets";
import Button from "../DynamicComponents/Button";
import { Link } from "react-router"; 
import { CustomDate } from "./CustomDate";

const HowToOrder = () => {
  return (
    <div className="py-8 relative mt-20">
      <div className="relative">
        <img src={howOrder} alt="" className="z-10" />
        <div className="absolute top-[47%] left-[600px] z-30">
          <CustomDate />
        </div>
        <Link
          to={"/fruit-box"}
          className="absolute bottom-[220px] left-[920px] -translate-x-1/2"
        >
          <Button className="px-10 rounded-3xl py-5 border-2 border-white shadow-black/20 shadow-md">
            Order a Fruit Box
          </Button>
        </Link>
      </div>
      <img
        src={banana}
        alt=""
        className="absolute bottom-10 -left-5 w-[550px] h-[332px]"
      />
      <img src={malta} alt="" className="absolute top-0 right-0  " />
    </div>
  );
};

export default HowToOrder;
