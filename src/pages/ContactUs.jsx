import { contactfruits, contactpageimg, reminder } from "@/assets";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import Title from "@/components/DynamicComponents/Title";

import { aboutbg } from "@/assets";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";
import Contact from "@/components/HomePageComponents/Contact";
const ContactUs = () => {
  return (
    <div>
      <div>
        <DynamicBanner
          title="CONTACT US"
          semiTitle="We’re a super friendly company."
        />
        <div className="relative mt-20">
          <img
            src={reminder}
            alt=""
            className="absolute -top-28 left-16 max-w-[284px]"
          />
          <div className="absolute flex flex-col gap-3 text-[#38302F] w-[792px] mx-[280px] ml-96 z-20">
            <Title
              className="capitalize font-bold text-center md:text-[35px] text-[35px]"
              style={{ stroke: "#38302F", webkitTextStroke: "2px #38302F" }}
            >
              OFFICE FRUIT{" "}
              <span
                style={{ stroke: "black", webkitTextStroke: "2px #4C9811" }}
                className="text-secondaryTextColor"
              >
                ENQUIRY
              </span>
            </Title>
            <p className="pb-10 text-center font-bold">
              Become the office hero! Energize your workplace with fresh fruit
              deliveries.
            </p>
            <Contact />
          </div>

          <div className="absolute -top-20 z-10">
            <div>
              <img src={aboutbg} alt="" className="w-full h-full" />
              <img
                src={contactpageimg}
                alt=""
                className="absolute top-40 right-0"
              />

              <div className="absolute top-[60%] right-[10%]">
                <div className="text-white w-[772px] text-right">
                  <h2 className="text-[40px]">
                    Companies are making the{" "}
                    <span className="text-primaryLightColor">switch.</span>
                  </h2>
                  <p className="font-thin">
                    Corporate customers are switching to The Fruit Box. In 2014
                    alone, more than a third of our new customers have switched
                    to us from a competitive service. While the reasons vary
                    from poor quality to unreliable service to poor customer
                    support, at The Fruit Box, we know we have a small window of
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
                <p className="text-primaryBoldColor">
                  View our fruit boxes now
                </p>
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
    </div>
  );
};

export default ContactUs;
