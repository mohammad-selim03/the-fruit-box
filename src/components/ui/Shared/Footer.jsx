import { cloud, footerbg, footerbg1, footerlogo } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import { Link } from "react-router";

const Footer = () => {
  const data = JSON.parse(localStorage.getItem("system-setting"));
  return (
    <div className="relative">
      {/* bg-[#F68F2A] */}
      <figure className="absolute top-0 left-0 w-full h-full">
        <img
          src={footerbg1}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </figure>
      {/* <img src={footerbg1} alt="" className="w-full h-full" /> */}

      <Container className="max-w-[1379px] px-4 md:px-8 relative pt-[300px] xl:pt-[340px]">
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-start gap-y-10 gap-4 xl:gap-[28px] text-white">
          <div className="w-[401px]">
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
              <Link to={"/fruit-box"}>
                <Button className="py-5 px-10 rounded-[24px] shadow-black/20 shadow-md border-2 border-white">
                  Order a Fruit Box
                </Button>
              </Link>
            </div>
          </div>
          <div className=" ">
            <p className="text-xl uppercase pb-2 md:pb-4">ABOUT COMPANY</p>
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
          <div className=" ">
            <p className="text-xl uppercase pb-2 md:pb-4">CUSTOMER SERVICE </p>
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
          <div className="w-[370px] h-fit bg-[#E07B1A] py-6 px-5 rounded-xl lg:-translate-y-6">
            <p className="text-xl uppercase pb-2 md:pb-4">CONNECT WITH US</p>
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
                {data?.number}
              </p>
              <p className="text-xs text-primaryTextColor">
                <span className="font-semibold text-sm text-white">Email:</span>{" "}
                {data?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex items-center xl:justify-center gap-2 py-5 text-white border-t border-white/30 ">
            <img src={footerlogo} alt="" className="w-8" />
            <p className="mt-3 text-sm xl:text-center w-2/3 lg:w-fit">
              {data?.system_name} {data?.copyright_text }
            </p>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 right-0 w-[120px] md:w-[170px] xl:w-[200px]">
        <img src={cloud} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
