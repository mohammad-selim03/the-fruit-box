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

const SelectItems = ({
  data,
  placeholder,
  triggerClass,
  setServings,
  value,
}) => {
  console.log("fsdfad", value);

  return (
    <div>
      <Select defaultValue={value ? value : ""} onValueChange={setServings}>
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
            {data?.map((item, idx) => {
              console.log("item", item);

              return (
                <SelectItem
                  key={idx}
                  value={
                    value || item?.value ? item?.value : item?.name || "value"
                  }
                  className="text-xl border-b text-gray-600 cursor-pointer"
                >
                  <span
                    className={cn(
                      "flex items-center gap-2",
                      value && "text-xs"
                    )}
                  >
                    {item?.name && (
                      <img src={item?.image} alt="" className="w-[32px]" />
                    )}
                    {item?.title || item?.name}
                  </span>
                </SelectItem>
              );
            })}
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
  value: PropTypes.string,
  setServings: PropTypes.func,
};
