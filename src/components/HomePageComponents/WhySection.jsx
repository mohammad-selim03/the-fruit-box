import { women } from "@/assets";
import Button from "../DynamicComponents/Button";
import Container from "../DynamicComponents/Container";
import Title from "../DynamicComponents/Title";
import { Link } from "react-router";

const WhySection = () => {
  return (
    // <Container>
    //   <div className="  flex items-center justify-between">
    //     <div className="flex flex-col gap-4 max-w-[805px]">
    //       <Title
    //         className="text-[56px]"
    //         style={{ textStroke: "2px black", webkitTextStroke: "2px black" }}
    //       >
    //         Why office fruit
    //       </Title>
    //       <p className="text-secondaryTextColor text-lg">
    //         Fresh fruit in the Office. Get energized.
    //       </p>
    //       <p className="text-sm text-red-500">
    //         Send a proactive health message to your employees.
    //       </p>
    //       <p className="text-sm font-thin">
    //         In recent years, there&apos;s been an increased movement by
    //         employers to provide even healthier enviroments for employees. Many
    //         companies have a Health Benefit Plan where employees can join a
    //         sports team, a gym, buy a treadmill and the company will pay all or
    //         a portion of the fee. No doubt this benefits is a great step forward
    //         demonstrating that companies care about their employees health.
    //       </p>
    //       <Button className="text-primaryLightColor border border-primaryLightColor bg-transparent px-10 py-3 hover:bg-primaryLightColor hover:text-white transition-all duration-300 mt-10">
    //         See More About This
    //       </Button>
    //     </div>
    //     <div>
    //       <img src={women} alt="women image" className="w-[377px] h-[377px]" />
    //     </div>
    //   </div>
    // </Container>
    <Container className="max-w-[1379px] px-4 md:px-8 py-10 md:py-24 xl:py-36">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-x-24">
        <div className="flex flex-col gap-2 lg:gap-3 max-w-[805px]">
          <Title
            className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[64px] text-center md:text-left"
            style={{ textStroke: "2px black", webkitTextStroke: "2px black" }}
          >
            Why office fruit
          </Title>
          <p className="sm:text-lg md:text-xl lg:text-2xl text-secondaryTextColor text-center md:text-left">
            Fresh fruit in the Office. Get energized.
          </p>
          <p className="text-[13px] md:text-sm text-[#F16A0B] text-center md:text-left">
            Send a proactive health message to your employees.
          </p>
          <p className="text-[13px] md:text-sm font-thin text-center md:text-left">
            In recent years, there&apos;s been an increased movement by employers to
            provide even healthier enviroments for employees. Many companies
            have a Health Benefit Plan where employees can join a sports team, a
            gym, buy a treadmill and the company will pay all or a portion of
            the fee. No doubt this benefits is a great step forward
            demonstrating that companies care about their employees health.
          </p>
          <Link to={"/about-us"} className="w-fit mx-auto md:mx-0">
            <Button className="text-primaryLightColor border border-primaryLightColor bg-transparent px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-5 hover:bg-primaryLightColor hover:text-white transition-all duration-300 mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg  shadow-md rounded-3xl">
              See More About This
            </Button>
          </Link>
        </div>
        <div className="flex-shrink-0">
          <img
            src={women}
            alt="women image"
            className="w-[230px] md:w-[250px] lg:w-[320px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default WhySection;
