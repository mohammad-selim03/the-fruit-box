import { banana, howOrder } from "@/assets";
import Button from "../DynamicComponents/Button";

const HowToOrder = () => {
  return (
    <div className="py-8 relative">
      <div className="relative">
        <img src={howOrder} alt="" />
        <div className="absolute bottom-[220px] left-[920px] -translate-x-1/2">
          <Button className="px-10 rounded-3xl py-5 border-2 border-white shadow-black/20 shadow-md">
            Order a Fruit Box
          </Button>
        </div>
      </div>
      <img
        src={banana}
        alt=""
        className="absolute bottom-10 -left-28 w-[550px] h-[332px]"
      />
    </div>
  );
};

export default HowToOrder;
