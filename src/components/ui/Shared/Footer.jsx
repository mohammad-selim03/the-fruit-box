import { cloud, footerbg, footerlogo } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="relative mt-20">
      <img src={footerbg} alt="" className="w-full h-full" />

      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1300px]  ">
        <div className="flex items-start gap-[20px] text-white">
          <div className="w-full">
            <p className="text-xl uppercase pb-8">
              WHY HAVE FRUIT IN THE OFFICE?
            </p>
            <p className="text-sm text-primaryTextColor">
              Fresh fruit at work makes for happier employees, lowers
              absenteeism, and sends a positive message throughout your company.
              Choose your size, choose your delivery schedule, and then
              we&apos;ll deliver directly to your office. Start your office
              fruit delivery today!
            </p>
            <div className="mt-12">
              <Button className="py-5 px-10 rounded-2xl shadow-black/20 shadow-md border-2 border-white">
                Order a Fruit Box
              </Button>
            </div>
          </div>
          <div className="w-[828px]">
            <p className="text-xl uppercase pb-5">ABOUT COMPANY</p>

            <div className="flex flex-col gap-3 mt-3">
              <p className="text-sm text-primaryTextColor cursor-pointer hover:underline">
                How to order fruit for the office
              </p>
              <p className="text-sm text-primaryTextColor cursor-pointer hover:underline">
                View our fruit box products
              </p>
              <p className="text-sm text-primaryTextColor cursor-pointer hover:underline">
                About the fruit box
              </p>
              <p className="text-sm text-primaryTextColor cursor-pointer hover:underline">
                Send us an Email
              </p>
            </div>
          </div>
          <div className="w-[828px]">
            <p className="text-xl uppercase pb-5">CUSTOMER SERVICE </p>
            <div className="flex flex-col gap-3 mt-3">
              <Link
                to={"/contact-us"}
                className="text-sm text-primaryTextColor cursor-pointer hover:underline"
              >
                Contact us
              </Link>
              <Link
                to={"/faq"}
                className="text-sm text-primaryTextColor cursor-pointer hover:underline"
              >
                FAQ
              </Link>
              <Link
                to={"terms-and-conditions"}
                className="text-sm text-primaryTextColor cursor-pointer hover:underline"
              >
                Privacy policy
              </Link>
              <Link
                to={"terms-and-conditions"}
                className="text-sm text-primaryTextColor cursor-pointer hover:underline"
              >
                Terms of use
              </Link>
            </div>
          </div>
          <div className="w-full h-[220px] bg-[#E07B1A] py-6 px-5 rounded-xl -mt-6">
            <p className="text-xl uppercase pb-5">CONNECT WITH US</p>
            <div className="flex flex-col gap-3 mt-3">
              <p className="text-xs text-[#FFD600]">
                <span className="font-semibold text-sm text-white">
                  Office:
                </span>{" "}
                Unit 115 11929 - 40th Street S.E. Calgary, Alberta T2Z 4M8
              </p>
              <p className="text-xs text-primaryTextColor">
                <span className="font-semibold text-sm text-white">
                  Call us:
                </span>{" "}
                587.351.5720
              </p>
              <p className="text-xs text-primaryTextColor">
                <span className="font-semibold text-sm text-white">Email:</span>{" "}
                info@thefruitbox.com
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex items-start justify-center gap-1 py-5 text-white border-t border-white/30 ">
            <img src={footerlogo} alt="" className="w-8" />
            <p className="mt-3 text-sm">
              The Fruit Box Ltd. Copyright 2021. All Rights Reserved. Powered by
              the Awesomeness of Fresh Fruit.
            </p>
          </div>
        </div>
      </div>
      <img src={cloud} alt="" className="absolute bottom-0 right-0" />
    </div>
  );
};

export default Footer;
