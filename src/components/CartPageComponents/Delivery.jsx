import Button from "../DynamicComponents/Button";
import Title from "../DynamicComponents/Title";
import { DatePicker } from "./DatePicker";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { formatDate } from "@/lib/DateFormate";
import Loader from "../ui/Shared/Loader";
import FrequencyDaySelector from "./FreequencyDaySelector";

const Delivery = ({
  register,
  handleSubmit,
  errors,
  control,
  placeOrder,
  isPosting,
  watch,
  setValue,
}) => {
  return (
    <form onSubmit={handleSubmit(placeOrder)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 lg:px-[40px]">
        <div>
          <Title className="text-xl md:text-[40px] capitalize text-secondaryTextColor">
            Delivery options
          </Title>
          <p className="text-[#798090] text-xs md:text-base mt-1 md:mt-5">
            Tell us when you would like fruit delivered and how often. Feel free
            to add a comment.
          </p>
          <div className="mt-5 flex flex-col gap-[26px]">
            <div className="w-full outline-none">
              <Controller
                name="date"
                control={control}
                defaultValue={""}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    className="border border-gray-300 w-full outline-none"
                    {...field}
                    selectedDate={field.value}
                    setSelectedDate={(date) => {
                      const dateValue = formatDate(date);
                      field.onChange(dateValue);
                    }}
                  />
                )}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            <FrequencyDaySelector
              control={control}
              watch={watch}
              setValue={setValue}
            />
            {/* <textarea
              className="h-32 w-full border border-gray-300 outline-none p-3 rounded-2xl"
              placeholder="Type comments"
              {...register("comment", { required: "Comments is required" })}
            ></textarea>
            {errors.comments && (
              <p className="text-red-500 text-xs -mt-5">
                {errors.comments.message}
              </p>
            )} */}
          </div>
        </div>
        <div>
          <Title className=" text-xl md:text-[40px] capitalize text-nowrap text-secondaryTextColor">
            Delivery Location
          </Title>
          <p className="text-[#798090] text-sm md:text-base mt-1 md:mt-5">
            Tell us who you are and where you want us to deliver.
          </p>
          <div className="mt-3 md:mt-[40px] flex flex-col gap-3 md:gap-[26px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
                  {...register("first_name", {
                    required: "First Name is required",
                  })}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
                  {...register("last_name", {
                    required: "Last Name is required",
                  })}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
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
              placeholder="Street Address"
              className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
              {...register("address", {
                required: "Street Address is required",
              })}
            />
            {errors.address && (
              <p className="text-red-500 text-xs -mt-5">
                {errors.address.message}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
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
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
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
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex items-center justify-center">
        <Button
          type="submit"
          className="text-primaryLightColor py-4 md:py-2 bg-transparent border border-primaryLightColor hover:bg-primaryLightColor hover:text-white transition-all duration-300 uppercase px-16 shadow-black/10 shadow-xl"
        >
          {isPosting ? (
            <p className="flex items-center justify-center gap-2">
              Submitting <Loader size={30} />
            </p>
          ) : (
            "PLACE ORDER"
          )}
        </Button>
      </div>
    </form>
  );
};

export default Delivery;

Delivery.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  watch: PropTypes.func,
  setValue: PropTypes.func,
  errors: PropTypes.object,
  control: PropTypes.object,
  placeOrder: PropTypes.func,
  isPosting: PropTypes.bool,
  isPostingError: PropTypes.bool,
};
