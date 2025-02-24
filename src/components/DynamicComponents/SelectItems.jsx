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
}) => {
  const [availableItems, setAvailableItems] = useState(data || []);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const updateAvailableItems = () => {
      const cartItems = JSON.parse(localStorage.getItem("fruits")) || [];

      if (Array.isArray(data)) {
        if (Array.isArray(cartItems)) {
          const filteredItems = data?.filter((item) => {
            return !cartItems.some((cartItem) => cartItem?.id === item?.id);
          });

          setAvailableItems(filteredItems || []);
        } else {
          setAvailableItems([]);
        }
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
    const fruitss = data?.filter((d) => d?.id === id);
  };

  if (availableItems.length === 0) {
    return;
  }

  console.log(data[0?.title]);

  return (
    <div>
      <Select
        className="text-black"
        defaultValue={value || "none"}
        value={value || "none"}
        onValueChange={onChange || setServings || setSelectedId}
      >
        <SelectTrigger
          onClick={() => handleId(selectedId)}
          className={cn(
            "bg-white text-black border border-primaryLightColor rounded-2xl text-lg text-nowrap placeholder:text-gray-400  w-full z-40",
            triggerClass
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-2xl text-left">
          <SelectGroup>
            {availableItems.map((item, idx) => {
              return (
                <SelectItem
                  key={idx}
                  value={item?.value || item?.name || "undefined"}
                  className="text-xl border-b text-gray-600 cursor-pointer"
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
                    {item?.value || item?.name || value }
                  </p>
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
  valueClass: PropTypes.string,
  value: PropTypes.string,
  setServings: PropTypes.func,
  setSelectedItem: PropTypes.func,
  onChange: PropTypes.func,
};

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { cn } from "@/lib/utils";
// import PropTypes from "prop-types";

// const SelectItems = ({
//   data,
//   placeholder,
//   triggerClass,
//   setServings,
//   value,
// }) => {
//   console.log("data", data);

//   const handleid = (id) => {
//     console.log("idddd", id);
//   };

//   return (
//     <div>
//       <Select defaultValue={value ? value : ""} onValueChange={setServings}>
//         <SelectTrigger
//           onClick={() => handleid(item?.id)}
//           className={cn(
//             "bg-white border border-primaryLightColor rounded-2xl text-lg text-nowrap",
//             triggerClass
//           )}
//         >
//           <SelectValue placeholder={placeholder || ""} />
//         </SelectTrigger>
//         <SelectContent className="bg-white rounded-2xl">
//           <SelectGroup>
//             {data?.map((item, idx) => {
//               console.log("item", item);

//               return (
//                 <SelectItem
//                   key={idx}
//                   value={
//                     value || item?.value ? item?.value : item?.name || "value"
//                   }
//                   className="text-xl border-b text-gray-600 cursor-pointer"
//                 >
//                   <span
//                     className={cn(
//                       "flex items-center gap-2",
//                       value && "text-xs"
//                     )}
//                   >
//                     {item?.name && (
//                       <img src={item?.image} alt="" className="w-[32px]" />
//                     )}
//                     {item?.title || item?.name}
//                   </span>
//                 </SelectItem>
//               );
//             })}
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default SelectItems;

// SelectItems.propTypes = {
//   data: PropTypes.array,
//   placeholder: PropTypes.string,
//   triggerClass: PropTypes.string,
//   value: PropTypes.string,
//   setServings: PropTypes.func,
// };
