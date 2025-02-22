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
import { Link } from "react-router";
const Faq = () => {
  const { data, isLoading, isError } = useGetApi("faqs", true);
  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  ) : isError ? (
    <IsError />
  ) : (
    <div>
      <DynamicBanner
        title="FAQ"
        semiTitle="Fresh fruit delivered to your office."
      />
      <Container className="max-w-[1120px]">
        <div className="border-4 w-[961.084px] h-full mx-auto border-secondaryTextColor rounded-[50px] p-3">
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
                    <AccordionTrigger className="hover:no-underline text-[#474747] ">
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
        <div className="py-20 pt-40 grid grid-cols-3 items-start gap-10">
          <div className="col-span-2">
            <p className="text-primaryBoldColor">View our fruit boxes now</p>
            <Title className="capitalize  leading-noe">
              Assorted fresh fruit boxes{" "}
              <span className="text-secondaryTextColor">Delivered</span> to your
              office
            </Title>
            <Link to={"/fruit-box"} className="py-5">
              <Button className="py-6 px-20 ">View Fruit Boxes</Button>
            </Link>
          </div>
          <div>
            <img src={contactfruits} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
