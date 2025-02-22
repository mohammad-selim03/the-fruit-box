import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar2({ className, classNames, showOutsideDays = true, ...props }) {
 
 

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("-ml-3 -mt-2", className)}
      classNames={{
        months: "flex flex-col sm:flex-row",
        month: " ",
        caption: "flex items-start relative items-center",
        caption_label: "text-sm font-medium ",
        table: "w-full border-collapse ",
        head_row: "flex gap-[1px] text-white uppercase",
        head_cell: "text-muted-foreground rounded-md w-5 h-4 text-[10px] flex items-center justify-center font-normal text-[0.8rem] [&:nth-child(3)]:bg-orange-500 bg-[#4C9811]/80",
        row: "flex w-full",
        cell: "h-3 w-[21px] bg-none flex items-center justify-start text-center text-sm text-left py-2 relative border",
        day: cn(
          "h-5 w-8 flex items-center justify-center -mt-1 bg-none font-normal aria-selected:opacity-100 text-left text-[8px] rounded-xl"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-gray-300 text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "text-white font-bold rounded-md",
        head_cell_today: "bg-yellow-500 text-white font-bold",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4 hidden", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn("h-4 w-4 hidden border-none", className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

Calendar2.displayName = "Calendar";

export { Calendar2 };