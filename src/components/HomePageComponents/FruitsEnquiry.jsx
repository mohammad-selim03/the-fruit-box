import { enquirybg, enquiryfruits, reminder } from "@/assets";
import Title from "../DynamicComponents/Title";
import Button from "../DynamicComponents/Button";
import { UsePostApi } from "@/hooks/API/usePostApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../ui/Shared/Loader";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const FruitsEnquiry = () => {
  const [isChecked, setisChecked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { postData, isLoading, isError, isSuccess } =
    UsePostApi("contact/store");

  const onSubmit = (data) => {
    postData(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Data submitted successfully");
      reset(); // This will run once when isSuccess becomes true
    }
  }, [isSuccess, reset]);
  if (isError) {
    toast.error("Data submitted failed");
  }

  function onChange(value) {
    setisChecked(true);
  }

  return (
    <div className=" relative">
      <div className="relative overflow-hidden">
        <figure className="w-full h-full absolute">
          <img
            src={enquirybg}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </figure>
        <div className="pt-[130px] md:pt-[200px] lg:pt-[270px] pb-[70px] md:pb-[100px] lg:pb-[150px]">
          <div className="relative w-fit mx-auto">
            <div className="z-20 absolute top-0 -right-5 lg:-left-8 xl:left-0 -translate-y-1/2 translate-x-10 xl:-translate-x-1/2 w-0 sm:w-[250px] lg:w-[280px]">
              <img src={reminder} alt="" className="w-[60%] md:w-[75%] xl:w-full" />
            </div>
            <div className="px-4 md:px-8">
              <div className="bg-secondaryTextColor p-2 sm:p-3 lg:p-5 rounded-[50px] relative w-fit mx-auto">
                <div className="bg-white rounded-[50px] p-2 lg:p-3">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="lg:w-[900px] bg-secondaryTextColor text-white rounded-[40px] py-10 md:py-14 lg:py-16 px-3 md:px-6 lg:px-10"
                  >
                    <div className="flex flex-col items-start gap-2 lg:w-[90%] mx-auto">
                      <Title
                        className="text-2xl md:text-[32px] lg:text-[48px] relative tracking-[2px] !text-center sm:text-left w-fit mx-auto sm:mx-0"
                        style={{
                          textStroke: "2px white",
                          webkitTextStroke: "2px white",
                        }}
                      >
                        Office Fruit Enquiry
                      </Title>
                      <p className="text-base md:text-lg xl:text-xl text-yellow-500 font-thin text-center sm:text-left md:text-left max-w-[90%] mx-auto   sm:mx-0">
                        Energize your workplace with fresh fruit deliveries!
                      </p>
                      <div className="grid md:grid-cols-2 gap-[18px] mt-7 w-full">
                        <div className="flex flex-col gap-1">
                          <input
                            type="text"
                            placeholder="Your Name*"
                            className="px-4 md:px-[28px] w-full min-w-0 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50 text-sm md:text-base"
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-start">
                          <input
                            type="text"
                            placeholder="Company Name*"
                            className="px-4 md:px-[28px] w-full min-w-0 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50 text-sm md:text-base"
                            {...register("company_name", {
                              required: "Company Name is required",
                            })}
                          />
                          {errors.company_name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.company_name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Phone Number*"
                            className="px-4 md:px-[28px]  w-full min-w-0 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50 text-sm md:text-base"
                            {...register("number", {
                              required: "Number is required",
                            })}
                          />
                          {errors.number && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.number.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Email*"
                            className="px-4 md:px-[28px]  w-full min-w-0 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50 text-sm md:text-base"
                            {...register("email", {
                              required: "Email is required",
                            })}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 w-full mt-3">
                        <div>
                          <input
                            type="number"
                            placeholder="How many employees?*"
                            className="px-4 md:px-[28px] w-full min-w-0 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50 text-sm md:text-base"
                            {...register("total_employees", {
                              required: "Total Employees is required",
                            })}
                          />
                          {errors.total_employees && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.total_employees.message}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <textarea
                            type="text"
                            placeholder="Comments*"
                            className="px-4 md:px-[28px] w-full min-w-0 h-40 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50 text-sm md:text-base"
                            {...register("comment", {
                              required: "Comment is required",
                            })}
                          />
                          {errors.comment && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-3">
                              {errors.comment.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-start scale-[70%] sm:scale-100 origin-left">
                        <ReCAPTCHA
                          sitekey="6Lcp9-AqAAAAAPdcMgPDI2mprlWS8Jbif5IkqAYi"
                          onChange={onChange}
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div
                        className="flex items-center justify-center w-full mt-3"
                        disabled={isChecked === false}
                      >
                        <Button
                          disabled={isChecked === false || isLoading}
                          className="py-4 md:py-6 px-10 md:px-20 rounded-2xl  text-nowrap"
                        >
                          {isLoading ? (
                            <p className="flex items-center justify-center gap-2">
                              Submitting... <Loader size={20} />
                            </p>
                          ) : (
                            "Send Enquiry"
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={enquiryfruits}
        alt=""
        className=" absolute -bottom-[10%] right-0 w-0 md:w-[260px] xl:w-[380px]"
      />
    </div>
  );
};

export default FruitsEnquiry;
