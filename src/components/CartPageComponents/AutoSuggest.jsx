import { addressData } from "@/assets/StaticData";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AddressAutoSuggest = ({ register, errors, setValue, watch }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

 
  const addressValue = watch("address");

 
  useEffect(() => {
    if (addressValue !== undefined && addressValue !== input) {
      setInput(addressValue);
    }
  }, [addressValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    
    // Update form value in real-time as user types
    setValue("address", value, { shouldValidate: true });

    if (value.trim().length > 0) {
      const filteredSuggestions = addressData.filter(
        (item) =>
          item["Site street address"]
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          item["City Name"].toLowerCase().includes(value.toLowerCase()) ||
          item["Territory Name"].toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (selectedAddress) => {
    setInput(selectedAddress);
    setValue("address", selectedAddress, { shouldValidate: true }); // Set value and trigger validation
    setSuggestions([]);
  };

  // Modified blur handler to keep manually typed text
  const handleBlur = () => {
    // Don't clear the input when blurring, just close the suggestions
    setTimeout(() => {
      setSuggestions([]);
    }, 200); // Small timeout to allow click events on suggestions to fire first
  };

  return (
    <div className="relative w-full">
      <input
        value={input}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="Street Address"
        className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
        {...register("address", {
          required: "Street Address is required",
        })}
      />
      {errors.address && (
        <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
      )}
      {suggestions.length > 0 && (
        <div className="suggestions-box mt-1 border border-gray-300 rounded-xl absolute w-full z-10 bg-white max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion-item p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() =>
                handleSelect(
                  `${suggestion["Site street address"]}, ${suggestion["City Name"]}, ${suggestion["Territory Name"]}`
                )
              }
            >
              <div>{`${suggestion["Site street address"]}, ${suggestion["City Name"]}, ${suggestion["Territory Name"]}`}</div>
              <div className="text-sm text-gray-500">
                Postal Code: {suggestion["Postal Code"]}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressAutoSuggest;

AddressAutoSuggest.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};