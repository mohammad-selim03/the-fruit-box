import Title from "../DynamicComponents/Title";
import Button from "../DynamicComponents/Button";
import { aboutFruits } from "@/assets";
import Container from "../DynamicComponents/Container";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <Container className="max-w-[1379px] px-4 md:px-8 py-10 md:py-24 xl:py-36">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-x-24">
        <div className="flex flex-col gap-2 lg:gap-3 max-w-[805px]">
          <Title
            className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[64px] text-center md:text-left"
            style={{ textStroke: "2px black", webkitTextStroke: "2px black" }}
          >
            ABOUT THE <br className="hidden md:block lg:hidden" /> FRUIT BOX
          </Title>
          <p className="sm:text-lg md:text-xl lg:text-2xl text-secondaryTextColor text-center md:text-left">
            WE’RE A PROUD CALGARY COMPANY.
          </p>
          <p className="text-[13px] md:text-sm text-[#F16A0B] text-center md:text-left">
            Trusted by some of Calgary’s best companies.
          </p>
          <p className="text-[13px] md:text-sm font-thin text-center md:text-left">
            We’re a reliable fresh fruit company focused on providing
            exceptional quality and service to businesses in Calgary and
            surrounding areas. We deliver to offices of all sizes. Give us a try
            and discover why we’re Calgary’s favorite office fruit supplier.
          </p>
          <Link to={"/about-us"} className="w-fit mx-auto md:mx-0">
            <Button className="text-primaryLightColor border border-primaryLightColor bg-transparent px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-5 hover:bg-primaryLightColor hover:text-white transition-all duration-300 mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg  shadow-md rounded-3xl">
              See More About This
            </Button>
          </Link>
        </div>
        <div className="flex-shrink-0">
          <img
            src={aboutFruits}
            alt="About Fruits"
            className="w-[230px] md:w-[250px] lg:w-[320px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
