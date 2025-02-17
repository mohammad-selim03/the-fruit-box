import Title from "../DynamicComponents/Title";
import Button from "../DynamicComponents/Button";
import { aboutFruits } from "@/assets";
import Container from "../DynamicComponents/Container";

const AboutSection = () => {
  return (
    <Container>
      <div className="mt-20 flex items-center justify-between">
        <div className="flex flex-col gap-4 max-w-[805px]">
          <Title
            className="text-[56px]"
            style={{ textStroke: "2px black", webkitTextStroke: "2px black" }}
          >
            ABOUT THE FRUIT BOX
          </Title>
          <p className="text-secondaryTextColor text-lg">
            Fresh fruit in the Office. Get energized.
          </p>
          <p className="text-sm text-red-500">
            Trusted by some of Calgary’s best companies.
          </p>
          <p className="text-sm font-thin">
            We’re a reliable fresh fruit company focused on providing
            exceptional quality and service to businesses in Calgary and
            surrounding areas. We deliver to offices of all sizes. Give us a try
            and discover why we’re Calgary’s favorite office fruit supplier.
          </p>
          <Button className="text-primaryLightColor border border-primaryLightColor bg-transparent px-10 py-3 hover:bg-primaryLightColor hover:text-white transition-all duration-300 mt-10">
            SEE MORE ABOUT THIS
          </Button>
        </div>
        <div>
          <img
            src={aboutFruits}
            alt="women image"
            className="w-[377px] h-[377px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
