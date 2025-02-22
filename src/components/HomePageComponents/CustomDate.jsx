import PropTypes from "prop-types";
import { Calendar2 } from "../ui/calender2";

export function CustomDate() {
  //   const handleSelect = (selectedDate) => {
  //     setSelectedDate(selectedDate);
  //     setDate(selectedDate);
  //     setOpenModal(false); // Close the popover when a date is selected
  //   };

  return (
    <div className="bg-white rounded-3xl h-40 w-40 p-5 z-40">
      <Calendar2 mode="single" initialFocus />
    </div>
  );
}

CustomDate.propTypes = {
  setSelectedDate: PropTypes.func,
};
