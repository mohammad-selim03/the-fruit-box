import { women } from "@/assets";
import Button from "../DynamicComponents/Button";
import Container from "../DynamicComponents/Container";
import Title from "../DynamicComponents/Title";

const WhySection = () => {
  return (
    <Container className="asdf">
      <div className="mt-40 flex items-center justify-between">
        <div className="flex flex-col gap-4 max-w-[805px]">
          <Title
            className="text-[56px]"
            style={{ textStroke: "2px black", webkitTextStroke: "2px black" }}
          >
            Why office fruit
          </Title>
          <p className="text-secondaryTextColor text-lg">
            Fresh fruit in the Office. Get energized.
          </p>
          <p className="text-sm text-red-500">
            Send a proactive health message to your employees.
          </p>
          <p className="text-sm font-thin">
            In recent years, there&apos;s been an increased movement by
            employers to provide even healthier enviroments for employees. Many
            companies have a Health Benefit Plan where employees can join a
            sports team, a gym, buy a treadmill and the company will pay all or
            a portion of the fee. No doubt this benefits is a great step forward
            demonstrating that companies care about their employees health.
          </p>
          <Button className="text-primaryLightColor border border-primaryLightColor bg-transparent px-10 py-3 hover:bg-primaryLightColor hover:text-white transition-all duration-300 mt-10">
            See More About This
          </Button>
        </div>
        <div>
          <img src={women} alt="women image" className="w-[377px] h-[377px]" />
        </div>
      </div>
    </Container>
  );
};

export default WhySection;
