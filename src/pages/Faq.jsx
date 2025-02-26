import { contactfruits } from "@/assets";
import { faqData } from "@/assets/StaticData";
import Button from "@/components/DynamicComponents/Button";
import Container from "@/components/DynamicComponents/Container";
import DynamicBanner from "@/components/DynamicComponents/DynamicBanner";
import Title from "@/components/DynamicComponents/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import IsError from "@/components/ui/Shared/IsError";
import Loader from "@/components/ui/Shared/Loader";
import { useGetApi } from "@/hooks/API/useGetApi";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
const Faq = () => {
  const { data, isLoading, isError } = useGetApi("faqs", true);
  console.log("data", data);
  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  ) : isError ? (
    <IsError />
  ) : (
    <div>
      <Helmet>
        <title>FAQ</title> 
      </Helmet>
      <DynamicBanner
        title="FAQ"
        semiTitle="Fresh fruit delivered to your office."
      />
      <Container className="max-w-[1120px]">
        {data?.length < 1 ? (
          <p className="font-bold text-center mt-20 text-3xl">
            No Data Found.!
          </p>
        ) : (
          <>
            {" "}
            <div className="border-4 max-w-[961.084px] h-full mx-auto border-secondaryTextColor rounded-[50px] p-3 mt-5 sm:mt-10">
              <div className="w-[full] h-[full] bg-white mx-auto rounded-[34px] px-5 py-10">
                <Accordion type="single" collapsible className="w-full ">
                  {data?.map((data, idx) => {
                    return (
                      <AccordionItem
                        key={`index ${idx}`}
                        value={data?.question}
                        className={cn(
                          "rounded-md transition-all duration-300  data-[state=open]:-mt-2 data-[state=open]:bg-white data-[state=open]:shadow-[-10px_10px_60px_-15px_rgba(0,0,0,0.5)]  data-[state=open]:p-4 data-[state=open]:rounded-xl",
                          idx == faqData?.length - 1 && "border-none"
                        )}
                      >
                        <AccordionTrigger className="hover:no-underline text-[#474747] text-left">
                          {data?.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#474747]">
                          {data?.answer}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
            <div className="py-5 md:py-20 pt-20 md:pt-40 grid grid-cols-1 sm:grid-cols-3 items-center md:items-start gap-10 px-5 xl:px-0">
              <div className="col-span-2">
                <p className="text-primaryBoldColor">
                  View our fruit boxes now
                </p>
                <Title className="capitalize  leading-noe">
                  Assorted fresh fruit boxes{" "}
                  <span className="text-secondaryTextColor">Delivered</span> to
                  your office
                </Title>
                <Link to={"/fruit-box"} className="py-5">
                  <Button className="py-6 px-20 ">View Fruit Boxes</Button>
                </Link>
              </div>
              <div>
                <img src={contactfruits} alt="" />
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Faq;
