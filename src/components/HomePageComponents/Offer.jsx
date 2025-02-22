import {
  freedelivery,
  frequency,
  fresh,
  fruitboxes,
  ourfruit,
  servingsizes,
  size,
} from "@/assets";
import Container from "../DynamicComponents/Container";
import Title from "../DynamicComponents/Title";

const Offer = () => {
  const offerData = [
    {
      title: "Guaranteed Fresh",
      image: <img src={fresh} alt="" />,
      description:
        "Simple and honest. Fresh or we’ll give you your money back.",
    },
    {
      title: "No Contracts",
      image: <img src={fresh} alt="" />,
      description: "No contracts to sign. Cancel, suspend, or change anytime.",
    },
    {
      title: "Free Delivery",
      image: <img src={freedelivery} alt="" />,
      description:
        "Delivered to your office and even placed in your staff area(s).",
    },
    {
      title: "Custom Sizes",
      image: <img src={size} alt="" />,
      description:
        "Perfectly matched to your office needs – in addition to 3 standard sizes.",
    },
    {
      title: "Our Fruit Boxes",
      image: <img src={fruitboxes} alt="" />,
      description:
        "Packed with fresh fruit goodness. All in a handcrafted box.",
    },
    {
      title: "Serving Sizes",
      image: <img src={servingsizes} alt="" />,
      description:
        "2 to 3 smaller fruits = 1 serving. We deliver by serving not pieces.",
    },
    {
      title: "Delivery Frequency",
      image: <img src={frequency} alt="" />,
      description:
        "Any frequency you desire – daily, weekly, monthly, one-time.",
    },
    {
      title: "Our Fruit",
      image: <img src={ourfruit} alt="" />,
      description: "Delicious and fresh. Ready to grab and go.",
    },
  ];

  return (
    <Container>
      <div className="mt-32 flex flex-col items-center">
        <Title
          style={{ textStroke: "2px black", webkitTextStroke: "2px black" }}
        >
          WHAT WE OFFER
        </Title>
        <p className="text-center text-2xl text-secondaryTextColor">
          AWESOMENESS IN EVERYTHING WE DO.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-5">
        {offerData.map((data) => (
          <div
            key={data.title}
            className="flex flex-col items-center w-[317px] h-[306px] gap-2 border border-[#A2A2A2] rounded-2xl p-4 cursor-pointer hover:bg-secondaryTextColor/80 group transition-all duration-300 hover:border-secondaryTextColor hover:text-white"
          >
            <div>{data.image}</div>
            <div className="flex flex-col gap-3">
              <h3 className="text-center text-primaryBoldColor group-hover:text-white text-2xl">
                {data.title}
              </h3>
              <p className="font-thin text-center text-lg">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Offer;
