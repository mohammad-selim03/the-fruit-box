import { aboutbg, aboutpagefruits, contactfruits, van } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";
import Title from "@/components/DynamicComponents/Title";
import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <DynamicBanner title="ABOUT" semiTitle="We’re a proud Calgary company." />
      <div className="relative mt-10 md:mt-20">
        <div className="px-5 lg:px-0 max-w-[948px] overflow-hidden  mx-auto lg:ml-20 2xl:ml-60 text-wrap z-30 relative ">
          <div className="flex flex-col gap-3 text-[#38302F] w-full ">
            <Title className="capitalize text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px]">
              Passionate about fresh fr
            </Title>
            <p className="text-sm lg:text-base">
              At The Fruit Box, we’re dedicated to providing a fresh healthy
              choice for employees in Calgary and surrounding areas. We saw a
              growing need for healthier snack choices for office workers. Many
              employees snack at work- sometimes healthy but often not.
            </p>
            <p className="text-sm lg:text-base">
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
            <Title className="capitalize text-nowrap text-[24px] sm:text-[32px] lg:text-[50px] xl:text-[64px]">
              We’re growing… and focused!
            </Title>
            <p className="text-sm lg:text-base">
              Our business continues to grow – thanks to our amazing customers!
              Our customers range from 5 to 500+ staff. The secret? Exceptional
              quality, service, and dedication to Corporate customers.
            </p>
            <p className="text-sm lg:text-base">
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
              className="absolute top-[30%] -mt-16 lg:mt-40  xl:top-10 min-[1590px]:top-[20%] max-[1450px]:top-[20%] right-0 w-20  md:w-60 xl:w-[450px] 4xl:w-[600px]"
            />
            <div className="absolute top-[55%] left-5 sm:top-[60%] lg:left-[15%] max-w-[500px]">
              <img src={van} alt="" className="w-20" />
              <div className="text-white mt-0 md:mt-5 max-w-[150px] sm:max-w-[350px]  xl:max-w-[80%]">
                <h2 className="text-[10px] sm:text-lg xl:text-[40px] ">
                  Are you looking to{" "}
                  <span className="text-primaryLightColor">switch?</span>
                </h2>
                <p className="font-thin text-[7px] sm:text-sm lg:text-base">
                  Try us for just 2 deliveries and discover why we’re Calgary’s
                  premier office fruit supplier!
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 md:top-[60%] right-5  lg:-right-[80%]">
              <div className="text-white max-w-[150px] sm:max-w-[350px] xl:max-w-[50%] text-right ">
                <h2 className="text-[10px]  sm:text-lg xl:text-[40px]">
                  Companies are making the{" "}
                  <span className="text-primaryLightColor">switch.</span>
                </h2>
                <p className="font-thin text-[7px] sm:text-sm lg:text-base line-clamp-2 md:line-clamp-none flex items-center justify-end border-4 2xl:w-[400px]">
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
          <div className="py-20 pt-[600px] md:pt-[800px] lg:pt-[1200px] grid grid-cols-1 lg:grid-cols-3 items-start gap-10 px-5 lg:px-0">
            <div className="col-span-2 ">
              <p className="text-primaryBoldColor">View our fruit boxes now</p>
              <Title className="capitalize  leading-noe">
                Assorted fresh fruit boxes{" "}
                <span className="text-secondaryTextColor">Delivered</span> to
                your office
              </Title>
              <Link to={"/fruit-box"} className="py-5 ">
                <Button className="py-3 lg:py-6 px-8 lg:px-20 ">View Fruit Boxes</Button>
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

export default About;
