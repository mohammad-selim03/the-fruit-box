import {
  apple,
  customfruits,
  fruitboxbg,
  greenCardbg,
  largefruits,
  mediumfruits,
  orangeCardbg,
  smallfruits,
} from "@/assets";
import Title from "../DynamicComponents/Title";
import FruitBoxCard from "../DynamicComponents/FruitBoxCard";

const FruitBoxSection = () => {
  const fruitBoxesData = [
    {
      name: "SMALL Fruit Box",
      description: "15 SERVINGS / 5 - 10 STAFF",
      buttonText: "Order now - $46",
      image: <img src={smallfruits} alt="" />,
      bg: <img src={greenCardbg} alt="" />,
      borderColor: "#75AC46",
    },
    {
      name: "",
      description:
        "Perfect for offices with 11-20 people. he mix includes and bananas. lus we include a variety of seasonal fruit throughout the year.",
      buttonText: "Order now - $46",
      image: <img src={mediumfruits} alt="" />,
      bg: <img src={orangeCardbg} alt="" />,
      borderColor: "#75AC46",
    },
    {
      name: "Large Fruit Box",
      description: "60 servings /  21-40 staff",
      buttonText: "Order now - $46",
      image: <img src={largefruits} alt="" />,
      bg: <img src={greenCardbg} alt="" />,
      borderColor: "#75AC46",
    },
    {
      name: "Custom Fruit Box",
      description: "10 - 100 servings",
      buttonText: "Order now ",
      image: <img src={customfruits} alt="" />,
      bg: <img src={greenCardbg} alt="" />,
      borderColor: "#75AC46",
    },
  ];

  return (
    <div className="relative z-10 h-[1400px]">
      <img
        src={fruitboxbg}
        alt=""
        className="absolute -top-60 w-full z-[1px] left-0 h-[1700px]"
      />
      <div className="pt-[135px] pb-9 max-w-[1315px] mx-auto z-20">
        <div className="flex flex-col items-center justify-center">
          <div className="pb-20 z-20 flex flex-col items-center justify-center">
            <Title className="text-black">OUR FRUIT BOXES</Title>
            <p className="text-secondaryTextColor">
              PACKED WITH FRESH FRUIT SUCH AS APPLES, ORANGES, BANANAS, AND
              SEASONALS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[20.67px]">
            {fruitBoxesData?.map((fruitBox, index) => (
              <FruitBoxCard key={index} data={fruitBox} />
            ))}
          </div>
        </div>
      </div>
      {/* <img src={boxStyle} alt="" className="absolute bottom-3 left-0" /> */}
      <img src={apple} className=" absolute -bottom-32 left-0" alt="" />
    </div>
  );
};

export default FruitBoxSection;
