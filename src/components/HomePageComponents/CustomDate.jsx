import PropTypes from "prop-types";
import { Calendar2 } from "../ui/calender2";

export function CustomDate() {
  //   const handleSelect = (selectedDate) => {
  //     setSelectedDate(selectedDate);
  //     setDate(selectedDate);
  //     setOpenModal(false); // Close the popover when a date is selected
  //   };

  return (
    <div className="bg-white rounded-3xl min-w-fit p-4  h-full scale-[90%]">
      <div className="mt-1.5 ml-2.5">
        <Calendar2 mode="single" initialFocus />
      </div>
    </div>
  );
}

CustomDate.propTypes = {
  setSelectedDate: PropTypes.func,
};
