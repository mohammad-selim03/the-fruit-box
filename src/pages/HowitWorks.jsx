import { aboutbg, aboutpagefruits, contactfruits, van } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";
import Title from "@/components/DynamicComponents/Title";

const HowitWorks = () => {
  return (
    <div className=" ">
      <DynamicBanner
        title="HOW IT WORKS"
        semiTitle="What a great idea!

"
      />
      <div className="relative">
        <div className="flex flex-col gap-3 text-[#38302F] w-[948px] mx-[300px]">
          <Title className="capitalize">
            Fresh fruit in the office is awesome.
          </Title>
          <p>
            3 standard sizes + custom sizes to perfectly match your office! A
            good start is to order enough fruit based on the usual office
            consumption of 2 servings per employee per week. So, if you have a
            staff of about 15 order a medium box (30 servings) to start. Part of
            our ongoing service is to monitor consumption to ensure the quantity
            and mix is perfect for your office. We’ll help you get it just
            right! Unlike other companies we don’t have contracts so you can
            change, suspend, or even cancel anytime.
          </p>
          <p>
            During a dinner party, a friend mentioned he was bringing a piece of
            fresh fruit to the office as his way to snack healthy at work. That
            simple idea struck a chord. We thought about how a business could be
            set up to deliver fresh fruit boxes to office lunch rooms where
            employees were free to pick a fresh piece of fruit. About a year
            later, The Fruit Box was born. Today, it’s a huge hit with Calgary
            companies!
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[#38302F] w-[948px] mx-[300px]">
          <Title className="capitalize text-nowrap">We’re growing… and focused!</Title>
          <p>
            Our business continues to grow – thanks to our amazing customers!
            Our customers range from 5 to 500+ staff. The secret? Exceptional
            quality, service, and dedication to Corporate customers.
          </p>
          <p>
            Our sole focus is Corporate customers. While other companies try to
            be home delivery grocery stores, we believe Corporate customers
            deserve to be treated better than an afterthought. Everything we do
            provides office customers the best fresh fruit service available.
          </p>
        </div>
        <div className="absolute top-20">
          <div>
            <img src={aboutbg} alt="" className="w-full h-full" />
            <img
              src={aboutpagefruits}
              alt=""
              className="absolute top-10 right-0"
            />
            <div className="absolute top-[60%] left-[20%]">
              <img src={van} alt="" />
              <div className="text-white mt-5">
                <h2 className="text-[40px] ">
                  Are you looking to{" "}
                  <span className="text-primaryLightColor">switch?</span>
                </h2>
                <p className="font-thin">
                  Try us for just 2 deliveries and discover why we’re Calgary’s
                  premier office fruit supplier!
                </p>
              </div>
            </div>
            <div className="absolute top-[60%] right-[10%]">
              <div className="text-white w-[772px] text-right">
                <h2 className="text-[40px]">
                  Companies are making the{" "}
                  <span className="text-primaryLightColor">switch.</span>
                </h2>
                <p className="font-thin">
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
          <div className="py-20 pt-[1200px] grid grid-cols-3 items-start gap-10">
            <div className="col-span-2">
              <p className="text-primaryBoldColor">View our fruit boxes now</p>
              <Title className="capitalize  leading-noe">
                Assorted fresh fruit boxes{" "}
                <span className="text-secondaryTextColor">Delivered</span> to
                your office
              </Title>
              <div className="py-5">
                <Button className="py-6 px-20 ">View Fruit Boxes</Button>
              </div>
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
