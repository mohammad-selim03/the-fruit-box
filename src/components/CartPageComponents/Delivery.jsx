import { daysData, frequencyData } from "@/assets/StaticData";
import Button from "../DynamicComponents/Button";
import SelectItems from "../DynamicComponents/SelectItems";
import Title from "../DynamicComponents/Title";
import { DatePicker } from "./DatePicker";

const Delivery = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 px-[40px]">
        <div>
          <Title className="text-[40px] capitalize text-secondaryTextColor">
            Delivery options
          </Title>
          <p>
            Tell us when you would like fruit delivered and how often. Feel free
            to add a comment.
          </p>
          <div className="mt-5 flex flex-col gap-[26px]">
            <div className="w-full outline-none">
              <DatePicker />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <SelectItems
                triggerClass="border border-gray-300 h-12"
                DeliveryProps={"DeliveryProps"}
                data={frequencyData}
                 placeholder="Select Frequency"
              />
              <SelectItems
                triggerClass="border border-gray-300 h-12"
                DeliveryProps={"DeliveryProps"}
                data={daysData}
                placeholder="Select Day Of Week"
              />
            </div>

            <textarea
              className="h-32 w-full border border-gray-300 outline-none p-3 rounded-2xl"
              placeholder="Type comments"
            ></textarea>
          </div>
        </div>
        <div>
          <Title className="text-[40px] capitalize text-secondaryTextColor">
            Delivery Location
          </Title>
          <p>Tell us who you are and where you want us to deliver.</p>
          <div className="mt-[40px] flex flex-col gap-[26px]">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
              />
              <input
                type="text"
                placeholder="First Name"
                className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
            />
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Email"
                className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex items-center justify-center">
        <Button className="text-primaryLightColor bg-transparent border border-primaryLightColor uppercase px-16 shadow-black/10 shadow-xl">
          PLACE ORDER
        </Button>
      </div>
    </div>
  );
};

export default Delivery;
