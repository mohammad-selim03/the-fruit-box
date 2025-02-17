import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const SelectItems = ({ data, placeholder, triggerClass }) => {
  return (
    <div>
      <Select>
        <SelectTrigger
          className={cn(
            "bg-white border border-primaryLightColor rounded-2xl text-lg",
            triggerClass
          )}
        >
          <SelectValue placeholder={placeholder || ""} />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-2xl">
          <SelectGroup>
            {data?.map((item, idx) => (
              <SelectItem
                key={idx}
                value={item?.value}
                className="text-xl border-b text-gray-600 cursor-pointer"
              >
                {item?.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectItems;

SelectItems.propTypes = {
  data: PropTypes.array,
  placeholder: PropTypes.string,
  triggerClass: PropTypes.string,
};
