import PropTypes from "prop-types";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FrequencyDaySelector = ({
  control,
  watch,
  setValue,
  errors,
  className,
}) => {
  const frequencyOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly (most popular)" },
    { value: "twice_weekly", label: "Twice Weekly" },
    { value: "biweekly", label: "Every 2 Weeks" },
    { value: "one_time", label: "One-time Only" },
    { value: "other", label: "Other" },
  ];

  const dayOptions = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
  ];

  const frequency = watch("frequency");
  const daysOfWeek = watch("day_of_week") || "";

  useEffect(() => {
    if (frequency === "daily") {
      setValue("day_of_week", "Monday to Friday");
    } else if (frequency === "one_time") {
      setValue("day_of_week", "");
    } else {
      setValue("day_of_week", "");
    }
  }, [frequency, setValue]);

  const handleDayChange = (day) => {
    setValue("day_of_week", day);
  };

  const getDayLabel = (value) => {
    const day = dayOptions.find((d) => d.value === value);
    return day ? day.label : "";
  };

  const handleTwiceWeeklySelection = (day) => {
    let selectedDays = daysOfWeek ? daysOfWeek.split(", ") : [];

    if (selectedDays.includes(day)) {
      selectedDays = selectedDays.filter((d) => d !== day);
    } else {
      if (selectedDays.length < 2) {
        selectedDays.push(day);
      } else {
        selectedDays = [selectedDays[1], day];
      }
    }

    setValue("day_of_week", selectedDays.join(", "));
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${className}`}>
      <div>
        <Controller
          name="frequency"
          control={control}
          rules={{ required: "Frequency is required" }}
          render={({ field }) => (
            <div className="flex flex-col space-y-2">
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <SelectTrigger className="h-12 text-sm rounded-xl border border-gray-300">
                  <SelectValue placeholder="Select Frequency" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl ps-3">
                  {frequencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors?.frequency && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.frequency.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      {frequency && frequency !== "one_time" && (
        <div>
          {frequency === "daily" ? (
            <div className="flex flex-col space-y-2">
              <div className="border border-gray-300 h-12 rounded-xl px-3 flex items-center text-sm bg-gray-100 cursor-not-allowed">
                Monday to Friday
              </div>
            </div>
          ) : frequency === "twice_weekly" ? (
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">Select 2 Days of Week</label>
              <div className="border border-gray-300 rounded-xl p-3">
                <div className="text-sm text-gray-500 mb-2">
                  Selected: {daysOfWeek || "None"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {dayOptions.map((day) => (
                    <button
                      key={day.value}
                      type="button"
                      onClick={() => handleTwiceWeeklySelection(day.value)}
                      className={`px-3 py-2 rounded-xl text-sm ${
                        daysOfWeek.includes(day.value)
                          ? "bg-primaryBoldColor text-white border border-primaryBoldColor"
                          : "bg-primaryLightColor/0.2 text-gray-700 hover:bg-gray-200 border border-primaryBoldColor/50"
                      }`}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>
              {errors?.day_of_week && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.day_of_week.message}
                </p>
              )}
            </div>
          ) : (
            <Controller
              name="day_of_week"
              control={control}
              rules={{ required: "Day of Week is required" }}
              render={({ field }) => (
                <Select
                  onValueChange={handleDayChange}
                  value={field.value}
                >
                  <SelectTrigger className="h-12 text-sm rounded-xl border border-gray-300">
                    <SelectValue placeholder="Select a Day" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded-xl ps-3">
                    {dayOptions.map((day) => (
                      <SelectItem key={day.value} value={day.value}>
                        {day.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

FrequencyDaySelector.propTypes = {
  control: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default FrequencyDaySelector;














// import PropTypes from "prop-types";
// import { useEffect } from "react";
// import { Controller } from "react-hook-form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const FrequencyDaySelector = ({
//   control,
//   watch,
//   setValue,
//   errors,
//   className,
// }) => {
//   const frequencyOptions = [
//     { value: "daily", label: "Daily" },
//     { value: "weekly", label: "Weekly (most popular)" },
//     { value: "twice_weekly", label: "Twice Weekly" },
//     { value: "biweekly", label: "Every 2 Weeks" },
//     { value: "one_time", label: "One-time Only" },
//     { value: "other", label: "Other" },
//   ];

//   const dayOptions = [
//     { value: "monday", label: "Monday" },
//     { value: "tuesday", label: "Tuesday" },
//     { value: "wednesday", label: "Wednesday" },
//     { value: "thursday", label: "Thursday" },
//     { value: "friday", label: "Friday" },
//   ];

//   const frequency = watch("frequency");
//   const daysOfWeek = watch("day_of_week") || [];

//   // Reset days when frequency changes
//   useEffect(() => {
//     if (frequency === "daily") {
//       setValue("day_of_week", "Monday to Friday");
//     } else if (frequency === "one_time") {
//       setValue("day_of_week", []);
//     } else {
//       setValue("day_of_week", []);
//     }
//   }, [frequency, setValue]);

//   // Handle single day selection - Fix: Ensure we set an array for day_of_week
//   const handleSingleDayChange = (day) => {
//     setValue("day_of_week", [day]);
//   };

//   // Helper function to get day label
//   const getDayLabel = (value) => {
//     const day = dayOptions.find((d) => d.value === value);
//     return day ? day.label : "";
//   };

//   // Create a formatted string for multiple selections
//   const getMultiDayLabel = () => {
//     if (!daysOfWeek || daysOfWeek.length === 0) return "Select days";
//     if (frequency === "daily") return "Monday to Friday";

//     return daysOfWeek.map((day) => getDayLabel(day)).join(", ");
//   };

//   // Handle day selection for twice weekly
//   const handleDayToggle = (day) => {
//     let newSelection;

//     if (daysOfWeek.includes(day)) {
//       // Remove day if already selected
//       newSelection = daysOfWeek.filter((d) => d !== day);
//     } else {
//       // For twice weekly, limit to 2 selections
//       if (daysOfWeek.length < 2) {
//         newSelection = [...daysOfWeek, day];
//       } else {
//         // Replace the first day if already at 2
//         newSelection = [...daysOfWeek.slice(1), day];
//       }
//     }

//     setValue("day_of_week", newSelection);
//   };

//   // Day selection UI for twice weekly (special case)
//   const TwiceWeeklySelector = () => (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm font-medium">Select 2 Days of Week</label>
//       <div className="border border-gray-300 rounded-xl p-3">
//         <div className="text-sm text-gray-500 mb-2">
//           Selected: {getMultiDayLabel() || "None"}
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {dayOptions.map((day) => (
//             <button
//               key={day.value}
//               type="button"
//               onClick={() => handleDayToggle(day.value)}
//               className={`px-3 py-2 rounded-xl text-sm ${
//                 daysOfWeek.includes(day.value)
//                   ? "bg-primaryBoldColor text-white border border-primaryBoldColor"
//                   : "bg-primaryLightColor/0.2 text-gray-700 hover:bg-gray-200 border border-primaryBoldColor/50"
//               }`}
//             >
//               {day.label}
//             </button>
//           ))}
//         </div>
//       </div>
//       {errors?.day_of_week && (
//         <p className="text-red-500 text-xs mt-1">
//           {errors.day_of_week.message}
//         </p>
//       )}
//     </div>
//   );

//   return (
//     <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${className}`}>
//       <div>
//         <Controller
//           name="frequency"
//           control={control}
//           rules={{ required: "Frequency is required" }}
//           render={({ field }) => (
//             <div className="flex flex-col space-y-2">
//               {/* <label className="text-sm font-medium">Select Frequency</label> */}
//               <Select
//                 onValueChange={field.onChange}
//                 defaultValue={field.value}
//                 value={field.value}
//               >
//                 <SelectTrigger className="h-12 text-sm rounded-xl border border-gray-300">
//                   <SelectValue placeholder="Select Frequency" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-white rounded-xl ps-3">
//                   {frequencyOptions.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {errors?.frequency && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.frequency.message}
//                 </p>
//               )}
//             </div>
//           )}
//         />
//       </div>

//       {frequency && frequency !== "one_time" && (
//         <div>
//           {frequency === "daily" ? (
//             <div className="flex flex-col space-y-2">
//               {/* <label className="text-sm font-medium">
//                 Select Day(s) of Week
//               </label> */}
//               <div className="border border-gray-300 h-12 rounded-xl px-3 flex items-center text-sm bg-gray-100 cursor-not-allowed">
//                 Monday to Friday
//               </div>
//             </div>
//           ) : frequency === "twice_weekly" ? (
//             <Controller
//               name="day_of_week"
//               control={control}
//               rules={{
//                 required: "Days of Week is required",
//                 validate: (value) => {
//                   if (value.length !== 2) {
//                     return "Please select exactly 2 days";
//                   }
//                   return true;
//                 },
//               }}
//               render={() => <TwiceWeeklySelector />}
//             />
//           ) : (
//             <Controller
//               name="day_of_week"
//               control={control}
//               rules={{
//                 required: "Day of Week is required",
//                 validate: (value) => {
//                   if (!value || value.length !== 1) {
//                     return `Please select exactly 1 day`;
//                   }
//                   return true;
//                 },
//               }}
//               render={({ field }) => (
//                 <div className="flex flex-col space-y-2">
//                   {/* <label className="text-sm font-medium">
//                     Select Day of Week
//                   </label> */}
//                   <Select
//                     onValueChange={handleSingleDayChange}
//                     value={Array.isArray(field.value) ? field.value[0] || "" : ""}
//                   >
//                     <SelectTrigger className="h-12 text-sm rounded-xl border border-gray-300">
//                       <SelectValue placeholder="Select a Day" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-white rounded-xl ps-3">
//                       {dayOptions.map((day) => (
//                         <SelectItem key={day.value} value={day.value}>
//                           {day.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   {errors?.day_of_week && (
//                     <p className="text-red-500 text-xs mt-1">
//                       {errors.day_of_week.message}
//                     </p>
//                   )}
//                 </div>
//               )}
//             />
//           )}
//         </div>
//       )}

//       {frequency === "other" && (
//         <div className="col-span-1 md:col-span-2">
//           <Controller
//             name="custom_frequency"
//             control={control}
//             rules={{
//               required: frequency === "other" ? "Please provide details" : false,
//             }}
//             render={({ field }) => (
//               <div className="flex flex-col space-y-2">
//                 <label htmlFor="custom_frequency" className="text-sm font-medium">
//                   Custom Frequency Details
//                 </label>
//                 <textarea
//                   {...field}
//                   id="custom_frequency"
//                   className="border border-gray-300 h-24 text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Please add details about your preferred frequency"
//                 />
//                 {errors?.custom_frequency && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.custom_frequency.message}
//                   </p>
//                 )}
//               </div>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// FrequencyDaySelector.propTypes = {
//   control: PropTypes.object.isRequired,
//   watch: PropTypes.func.isRequired,
//   setValue: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   className: PropTypes.string,
// };

// export default FrequencyDaySelector;