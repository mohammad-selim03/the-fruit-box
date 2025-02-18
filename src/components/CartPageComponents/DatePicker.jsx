import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function DatePicker() {
  const [date, setDate] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    setOpenModal(false); // Close the popover when a date is selected
  };

  return (
    <Popover open={openModal} onOpenChange={setOpenModal}>
      <PopoverTrigger asChild className="h-[50px] -mt-0.5 w-full">
        <Button
          variant={"outline"}
          className={cn(
            "w-full py-4   flex items-center justify-between font-normal border border-gray-300 rounded-2xl",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP") : <span>Select Start Date</span>}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M21.5 5H24C24.663 5 25.2989 5.26339 25.7678 5.73223C26.2366 6.20107 26.5 6.83696 26.5 7.5V25C26.5 25.663 26.2366 26.2989 25.7678 26.7678C25.2989 27.2366 24.663 27.5 24 27.5H6.5C5.83696 27.5 5.20107 27.2366 4.73223 26.7678C4.26339 26.2989 4 25.663 4 25V7.5C4 6.125 5.125 5 6.5 5H9V3.75C9 3.41848 9.1317 3.10054 9.36612 2.86612C9.60054 2.6317 9.91848 2.5 10.25 2.5C10.5815 2.5 10.8995 2.6317 11.1339 2.86612C11.3683 3.10054 11.5 3.41848 11.5 3.75V5H19V3.75C19 3.41848 19.1317 3.10054 19.3661 2.86612C19.6005 2.6317 19.9185 2.5 20.25 2.5C20.5815 2.5 20.8995 2.6317 21.1339 2.86612C21.3683 3.10054 21.5 3.41848 21.5 3.75V5ZM19 7.5H11.5V8.75C11.5 9.08152 11.3683 9.39946 11.1339 9.63388C10.8995 9.8683 10.5815 10 10.25 10C9.91848 10 9.60054 9.8683 9.36612 9.63388C9.1317 9.39946 9 9.08152 9 8.75V7.5H6.5V12.5H24V7.5H21.5V8.75C21.5 9.08152 21.3683 9.39946 21.1339 9.63388C20.8995 9.8683 20.5815 10 20.25 10C19.9185 10 19.6005 9.8683 19.3661 9.63388C19.1317 9.39946 19 9.08152 19 8.75V7.5ZM24 15H6.5V25H24V15Z"
                fill="#FFB500"
              />
            </svg>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white rounded-xl" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
