import { enquirybg, enquiryfruits } from "@/assets";
import Title from "../DynamicComponents/Title";
import Button from "../DynamicComponents/Button";
import { UsePostApi } from "@/hooks/API/usePostApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const FruitsEnquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { postData, isLoading, isError, isSuccess } =
    UsePostApi("contact/store");

  const onSubmit = (data) => {
    postData(data);
  };

  if (isSuccess) {
    toast.success("Data submitted successfully");
  }
  if (isError) {
    toast.error("Data submitted failed");
  }

  return (
    <div className="mt-60 relative">
      <img src={enquirybg} alt="" className="z-10" />
      <div className="absolute z-20 top-1/2 left-1/2 -translate-y-1/2 bg-secondaryTextColor p-5 rounded-2xl -translate-x-1/2  ">
        <div className="bg-white rounded-2xl p-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-[769px] w-[960px] bg-secondaryTextColor text-white rounded-2xl p-10"
          >
            <div className="flex flex-col items-center gap-2 w-[90%] mx-auto">
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
              <div className="grid grid-cols-2 gap-[18px] mt-10 w-full">
                <div>
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
                <input
                  type="text"
                  placeholder="Company Name*"
                  className="px-[28px] bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                  {...register("company_name", {
                    required: "Company Name is required",
                  })}
                />
                {errors.company_name && (
                  <p className="text-red-500 text-xs -mt-5">
                    {errors.company_name.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Phone Number*"
                  className="px-[28px] bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                  {...register("number", {
                    required: "Number is required",
                  })}
                />
                {errors.number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.number.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Email*"
                  className="px-[28px] bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
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
              <div className="flex flex-col gap-5 w-full mt-3">
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
                <textarea
                  type="text"
                  placeholder="Comments*"
                  className="px-[28px] w-full h-40 bg-white/20 backdrop-blur-md py-[14px] rounded-2xl placeholder:text-white text-white outline-none border border-yellow-200/50"
                  {...register("comment", {
                    required: "Comment is required",
                  })}
                />
                {errors.comment && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.comment.message}
                  </p>
                )}
              </div>
              <div className="mt-20">
                <Button className="py-6 px-20 rounded-2xl" disabled={isLoading}>
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
      <img src={enquiryfruits} alt="" className="absolute -bottom-60 right-0" />
    </div>
  );
};

export default FruitsEnquiry;
