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

const AddFruits = ({
  data,
  placeholder,
  triggerClass,
  selectedItem,
  setSelectedItem,
}) => {
  const [availableItems, setAvailableItems] = useState(data || []);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    if (!setSelectedItem || typeof setSelectedItem !== "function") return;

    if (!selectedId) {
      setSelectedItem(null);
      return;
    }

    const selectedItem = data?.find(
      (item) => item?.id === selectedId || item?.name === selectedId
    );

    setSelectedItem(selectedItem || null);
  }, [selectedId, data, setSelectedItem]);

  useEffect(() => {
    const updateAvailableItems = () => {
      const cartItems = JSON.parse(localStorage.getItem("fruits")) || [];
      if (cartItems) {
        const filteredItems = data?.filter(
          (item) => !cartItems.some((cartItem) => cartItem?.id === item?.id)
        );
        setAvailableItems(filteredItems || []);
      }
    };

    updateAvailableItems();
    window.addEventListener("storage", updateAvailableItems);
    const intervalId = setInterval(updateAvailableItems, 1000);

    return () => {
      window.removeEventListener("storage", updateAvailableItems);
      clearInterval(intervalId);
    };
  }, [data]);

  const handleSelection = (id) => {
    setSelectedId(id);
  };

  if (availableItems.length === 0) {
    return ;
  }

  return (
    <div>
      <Select
      className="text-black"
        value={selectedItem || selectedId || ""}
        onValueChange={handleSelection}
      >
        <SelectTrigger
          className={cn(
            "bg-white border border-primaryLightColor rounded-2xl text-lg text-nowrap text-gray-400",
            triggerClass
          )}
        >
          <SelectValue placeholder={placeholder || "Select an item"} />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-2xl">
          <SelectGroup>
            {availableItems.map((item) => (
              <SelectItem
                key={item?.id}
                value={item?.id}
                className="text-xl border-b text-gray-600 cursor-pointer"
              >
                <p className="flex items-center gap-2">
                  {item?.image && (
                    <img src={item?.image} alt="" className="w-[32px]" />
                  )}
                  {item?.name}
                </p>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AddFruits;

AddFruits.propTypes = {
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  selectedItem: PropTypes.string,
  triggerClass: PropTypes.string,
  value: PropTypes.string,
  setServings: PropTypes.func,
  setSelectedItem: PropTypes.func.isRequired,
};
