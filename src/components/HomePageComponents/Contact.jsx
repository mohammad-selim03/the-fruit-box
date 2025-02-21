import { useForm } from "react-hook-form";
import Button from "../DynamicComponents/Button";
import { UsePostApi } from "@/hooks/API/usePostApi";
import Loader from "../ui/Shared/Loader";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { postData, isLoading, isError, isSuccess } = UsePostApi(
    "fruit-enquiry/store"
  );

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      postData(data);
    }
  };
  if (isSuccess) {
    toast.success("Data submitted successfully");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[20px]"
    >
      <div className="grid grid-cols-2 gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full px-[28px] py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-secondaryTextColor"
            {...register("name", {
              required: "First Name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full px-[28px] py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-secondaryTextColor"
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
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full px-[28px] py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-secondaryTextColor"
            {...register("number", {
              required: "Number is required",
            })}
          />
          {errors.number && (
            <p className="text-red-500 text-xs mt-1">{errors.number.message}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Email*"
            className="w-full px-[28px] py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-secondaryTextColor"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <input
        type="number"
        placeholder="How many employees?*"
        className="w-full px-[28px] py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-secondaryTextColor"
        {...register("total_employees", {
          required: "Total Employees is required",
        })}
      />
      {errors.total_employees && (
        <p className="text-red-500 text-xs mt-1">
          {errors.total_employees.message}
        </p>
      )}
      <div className="flex flex-col gap-5 w-full">
        <textarea
          type="text"
          placeholder="Comments*"
          className="w-full px-[28px] h-40  py-[18px] rounded-2xl bg-white text-secondaryTextColor placeholder:text-secondaryTextColor outline-none border border-secondaryTextColor"
          {...register("comment", {
            required: "Comment is required",
          })}
        />
        {errors.comment && (
          <p className="text-red-500 text-xs mt-1">{errors.comment.message}</p>
        )}
      </div>
      <div className="mt-2.5 w-[70%] mx-auto">
        <Button className="py-6 px-20 rounded-2xl w-full border-2 border-white shadow-black/20 shadow-md">
          {isLoading ? (
            <p className="flex items-center justify-center gap-2">
              Sumitting... <Loader size={20} />
            </p>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
      {isError && (
        <p className="text-red-500 text-xs mt-5">
          There was an error submitting the form. Please try again later.
        </p>
      )}
    </form>
  );
};

export default Contact;
