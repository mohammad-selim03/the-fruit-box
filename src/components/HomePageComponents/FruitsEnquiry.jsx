import { enquirybg, enquiryfruits } from "@/assets";
import Title from "../DynamicComponents/Title";
import Button from "../DynamicComponents/Button";

const FruitsEnquiry = () => {
  return (
    <div className="mt-60 relative">
      <img src={enquirybg} alt="" className="z-10" />
      <div className="absolute z-20 top-1/2 left-1/2 -translate-y-1/2 bg-secondaryTextColor p-5 rounded-2xl -translate-x-1/2  ">
        <div className="bg-white rounded-2xl p-2">
          <div className="h-[769px] w-[960px] bg-secondaryTextColor text-white rounded-2xl p-10">
            <div className="flex flex-col items-center gap-2 w-[90%] mx-auto">
              <Title
                className="text-[56px]"
                style={{
                  textStroke: "2px white",
                  webkitTextStroke: "2px white",
                }}
              >
                Office Fruit Enquiry
              </Title>
              <p className="text-xl text-yellow-500 font-thin">
                Energize your workplace with fresh fruit deliveries!
              </p>
              <div className="grid grid-cols-2 gap-[18px] mt-10 w-full">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="px-[28px] bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                />
                <input
                  type="text"
                  placeholder="Company Name*"
                  className="px-[28px] bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                />
                <input
                  type="text"
                  placeholder="Phone Number*"
                  className="px-[28px] bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="px-[28px] bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                />
              </div>
              <div className="flex flex-col gap-5 w-full mt-3">
                <input
                  type="text"
                  placeholder="How many employees?*"
                  className="px-[28px] w-full bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                />

                <textarea
                  type="text"
                  placeholder="Comments*"
                  className="px-[28px] w-full h-40 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                />
              </div>
              <div className="mt-20">
                <Button className="py-6 px-20 rounded-2xl">Send Enquiry</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={enquiryfruits} alt="" className="absolute -bottom-60 right-0" />
    </div>
  );
};

export default FruitsEnquiry;
