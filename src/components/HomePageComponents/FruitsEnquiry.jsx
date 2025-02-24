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
    <div className="mt-60 relative">
      <img src={enquirybg} alt="" className="z-10 h-[1222px]" />
      <img
        src={reminder}
        alt=""
        className="z-30 absolute top-[10%] left-[15%]"
      />
      <div className="absolute z-20 top-[53%] left-1/2 -translate-y-1/2 bg-secondaryTextColor p-5 rounded-[50px] -translate-x-1/2  ">
        <div className="bg-white rounded-[50px] p-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-[769px] w-[960px] bg-secondaryTextColor text-white rounded-[40px] p-10"
          >
            <div className="flex flex-col items-start gap-2 w-[90%] mx-auto">
              <Title
                className="text-[48px] md:text-[48px]"
                style={{
                  textStroke: "2px white",
                  webkitTextStroke: "2px white",
                }}
              >
                Office Fruit Enquiry
              </Title>
              <p className="text-xl text-yellow-500 font-thin">
                Energize your workplace with fresh fruit deliveries!
              </p>
              <div className="grid grid-cols-2 gap-[18px] mt-7 w-full">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="px-[28px] w-full bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
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
                    className="px-[28px] w-full bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
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
                    className="px-[28px]  w-full bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
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
                    className="px-[28px]  w-full bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
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
                    className="px-[28px] w-full bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
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
                    className="px-[28px] w-full h-40 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
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
              <div className="flex flex-col items-start">
                <ReCAPTCHA
                  sitekey="6Lcp9-AqAAAAAPdcMgPDI2mprlWS8Jbif5IkqAYi"
                  onChange={onChange}
                />
              </div>
              <div className="flex items-center justify-center w-full" disabled={isChecked === false}>
                <Button
                  disabled={isChecked === false || isLoading}
                  className="py-6 px-20 rounded-2xl"
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
      <img
        src={enquiryfruits}
        alt=""
        className="absolute -bottom-[10%] right-0 w-[425px]"
      />
    </div>
  );
};

export default FruitsEnquiry;
