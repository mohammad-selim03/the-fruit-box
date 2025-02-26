import { aboutbg, aboutpagefruits, contactfruits, van } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";
import Title from "@/components/DynamicComponents/Title";
import { Link } from "react-router";

const HowitWorks = () => {
  return (
    <div className=" ">
      <DynamicBanner
        title="HOW IT WORKS"
        semiTitle="What a great idea!

"
      />
      <div className="relative mt-10 md:mt-20">
        <div className="px-5 lg:px-0 max-w-[948px]  mx-auto lg:ml-20 2xl:ml-60 text-wrap z-30 relative ">
          <div className="flex flex-col gap-3 text-[#38302F] w-full ">
            <Title className="capitalize text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px]">
              Fresh fruit in the office is awesome.
            </Title>
            <p>
              3 standard sizes + custom sizes to perfectly match your office! A
              good start is to order enough fruit based on the usual office
              consumption of 2 servings per employee per week. So, if you have a
              staff of about 15 order a medium box (30 servings) to start. Part
              of our ongoing service is to monitor consumption to ensure the
              quantity and mix is perfect for your office. We’ll help you get it
              just right! Unlike other companies we don’t have contracts so you
              can change, suspend, or even cancel anytime.
            </p>
            <p>
              During a dinner party, a friend mentioned he was bringing a piece
              of fresh fruit to the office as his way to snack healthy at work.
              That simple idea struck a chord. We thought about how a business
              could be set up to deliver fresh fruit boxes to office lunch rooms
              where employees were free to pick a fresh piece of fruit. About a
              year later, The Fruit Box was born. Today, it’s a huge hit with
              Calgary companies!
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[#38302F] ">
            <Title className="capitalize  text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px]">
              We’re growing… and focused!
            </Title>
            <p>
              Our business continues to grow – thanks to our amazing customers!
              Our customers range from 5 to 500+ staff. The secret? Exceptional
              quality, service, and dedication to Corporate customers.
            </p>
            <p>
              Our sole focus is Corporate customers. While other companies try
              to be home delivery grocery stores, we believe Corporate customers
              deserve to be treated better than an afterthought. Everything we
              do provides office customers the best fresh fruit service
              available.
            </p>
          </div>
        </div>
        <div className="absolute top-[600px] sm:top-[260px] xl:top-52 z-30">
          <div>
            <img src={aboutbg} alt="" className="w-full h-full" />
            <img
              src={aboutpagefruits}
              alt=""
              className="absolute top-[30%] md:top-[10%] -mt-0 lg:mt-40  xl:top-10 min-[1590px]:top-[20%] max-[1450px]:top-[20%] right-0 w-20 md:w-60 xl:w-[450px] 4xl:w-[600px]"
            />
            <div className="absolute top-[55%] left-5 lg:top-[60%] lg:left-[15%] max-w-[550px]">
              <img src={van} alt="" className="w-20 md:w-40 lg:w-52 xl:w-80" />
              <div className="text-white mt-0 md:mt-5 max-w-[150px] sm:max-w-[350px]  xl:max-w-[100%]">
                <h2 className="text-[10px] sm:text-lg xl:text-[40px] w-full">
                  Are you looking to{" "}
                  <span className="text-primaryLightColor">switch?</span>
                </h2>
                <p className="font-thin text-[7px] sm:text-sm lg:text-base xl:mt-5">
                  Try us for just 2 deliveries and discover why we’re Calgary’s
                  premier office fruit supplier!
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 md:top-[60%] right-5  lg:right-20 overflow-hidden max-w-[150px] sm:max-w-[350px] xl:max-w-[50%] ">
              <div className="text-white max-w-[150px] sm:max-w-[350px]  xl:max-w-[100%] text-right mt-5 ">
                <h2 className="text-[10px]  sm:text-xl xl:text-[40px] ">
                  Companies are making the{" "}
                  <span className="text-primaryLightColor">switch.</span>
                </h2>
                <p className="font-thin text-[7px] sm:text-sm lg:text-base line-clamp-3  flex xl:hidden items-center justify-end  2xl:w-[800px] xl:mt-5">
                  Corporate customers are switching to The Fruit Box. In 2014
                  alone, more than a third of our new customers have switched to
                  us from a competitive service. While the reasons vary from
                  poor quality to unreliable service to poor customer support.
                </p>
                <p className="font-thin text-[7px] sm:text-sm lg:text-base line-clamp-3 hidden xl:flex items-center justify-end 2xl:w-[800px] xl:mt-5  ">
                  Corporate customers are switching to The Fruit Box. In 2014
                  alone, more than a third of our new customers have switched to
                  us from a competitive service. While the reasons vary from
                  poor quality to unreliable service to poor customer support,
                  at The Fruit Box, we know we have a small window of
                  opportunity to make our customer experience enjoyable and
                  effortless. That’s why we’re so focused on providing office
                  customers (and only office customers) with a reliable and
                  hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <div className="py-0 pt-[450px] min-[450px]:pt-[550px] min-[530px]:pt-[650px] min-[590px]:pt-[750px] sm:pt-[650px] md:pt-[800px] lg:pt-[1000px] min-[1400px]:pt-[1200px] min-[1680px]:pt-[1500px] grid grid-cols-1 lg:grid-cols-3 items-start gap-10 px-5 xl:px-0">
            <div className="col-span-2 ">
              <p className="text-primaryBoldColor">View our fruit boxes now</p>
              <Title className="capitalize text-[28px] md:text-[44px] lg:text-[64px]">
                Assorted fresh fruit boxes{" "}
                <span className="text-secondaryTextColor">Delivered</span> to
                your office
              </Title>
              <Link to={"/fruit-box"} className="py-5 ">
                <Button className="py-3 lg:py-6 px-8 lg:px-20 ">
                  View Fruit Boxes
                </Button>
              </Link>
            </div>
            <div>
              <img src={contactfruits} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HowitWorks;
