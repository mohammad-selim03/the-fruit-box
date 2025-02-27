import { addressData } from "@/assets/StaticData";
import { useState } from "react";

const AddressAutoSuggest = ({ setValue }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
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
  setValue("address", input);
  // console.log("suggesitons", suggestions);
  // console.log("input", input);

  const handleSelect = (selectedAddress) => {
    setInput(selectedAddress);
    setSuggestions([]);
    setValue("address", selectedAddress);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Start typing a street address, city, or territory..."
        value={input}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-xl"
      />

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
