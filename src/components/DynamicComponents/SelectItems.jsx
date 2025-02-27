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
import { useEffect, useState } from "react";

const SelectItems = ({
  data,
  placeholder,
  triggerClass,
  setServings,
  value,
  setSelectedItem,
  onChange,
  valueClass,
  singleValue,
}) => {
  const [availableItems, setAvailableItems] = useState(data || []);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    const updateAvailableItems = () => {
      const cartItems = JSON.parse(localStorage.getItem("fruits")) || [];

      if (!singleValue && Array.isArray(cartItems)) {
        const filteredItems = data?.filter((item) => {
          return !cartItems.some((cartItem) => cartItem?.id === item?.id);
        });

        setAvailableItems(filteredItems || []);
      } else {
        setAvailableItems([]);
      }
    };

    updateAvailableItems();

    window.addEventListener("storage", updateAvailableItems);

    const intervalId = setInterval(updateAvailableItems, 1000);

    return () => {
      window.removeEventListener("storage", updateAvailableItems);
      clearInterval(intervalId);
    };
  }, [data, selectedId]);

  const handleId = (id) => {
    setSelectedId(id);
  };
  const handleValueChange = (newValue) => {
    setSelectedId(newValue);
    if (onChange) {
      onChange(newValue);
    } else if (setServings) {
      setServings(newValue);
    } else if (setSelectedItem) {
      setSelectedItem(newValue);
    }
  };

  if (availableItems.length === 0) {
    return;
  }
  return (
    <div>
      <Select
        className="text-black"
        // defaultValue={value || data?.value || data?.name || ""}
        // value={value || data?.value || data?.name || ""}
        value={selectedId || ""}
        onValueChange={handleValueChange}
      >
        <SelectTrigger
          onClick={() => handleId(selectedId)}
          className={cn(
            "bg-white border border-primaryLightColor rounded-2xl text-xs text-nowrap placeholder:text-gray-400 text-gray-600 w-full z-40",
            triggerClass
          )}
        >
          <SelectValue
            placeholder={placeholder}
            className="text-xs"
          />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-2xl text-left">
          <SelectGroup>
            {singleValue ? (
              <SelectItem
                value={singleValue}
                className="text-xl border-b text-gray-400 cursor-pointer"
              >
                <p
                  onClick={() => {
                    handleId(singleValue);
                    setSelectedItem(singleValue);
                  }}
                  className={cn("gap-2 text-sm px-2 ", valueClass)}
                >
                  {singleValue}
                </p>
              </SelectItem>
            ) : (
              availableItems.map((item, idx) => {
                return (
                  <SelectItem
                    key={idx}
                    value={item?.value || item?.name || "undefined"}
                    className="text-xl border-b border-gray-200 text-gray-500 cursor-pointer"
                  >
                    <p
                      onClick={() => {
                        handleId(item);
                        setSelectedItem(item);
                      }}
                      className={cn("gap-2 text-sm px-2 ", valueClass)}
                    >
                      {item?.name && (
                        <img
                          src={item?.image?.props?.src || item?.image}
                          alt=""
                          className="w-[32px]"
                        />
                      )}
                      {item?.value || item?.name || value}
                    </p>
                  </SelectItem>
                );
              })
            )}
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
  valueClass: PropTypes.string,
  value: PropTypes.string,
  setServings: PropTypes.func,
  setSelectedItem: PropTypes.func,
  singleValue: PropTypes.func,
  onChange: PropTypes.func,
};
