import { addressData } from "@/assets/StaticData";
import PropTypes from "prop-types";
import { useState } from "react";

const AddressAutoSuggest = ({ register, errors, setValue }) => {
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

  console.log("input", input)

  const handleSelect = (selectedAddress) => {
    setInput(selectedAddress);
    
    setValue("address", setInput || selectedAddress);
    console.log("address", selectedAddress);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full">
      <input
        value={input || ""}
        onChange={handleInputChange}
        placeholder="Street Address"
        className="px-5 py-3 rounded-2xl border border-gray-300 w-full outline-none"
        // {...register("address", {
        //   required: "Street Address is required",
        // })}
      />
      {errors.address && (
        <p className="text-red-500 text-xs -mt-5">{errors.address.message}</p>
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
};

// import React, { useState, useEffect, useCallback } from "react";

// const AddressAutoSuggest = () => {
//   const [address, setAddress] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(true);

//   // Debounce function to limit API calls
//   const debounce = (func, delay) => {
//     let timeoutId;
//     return (...args) => {
//       if (timeoutId) clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => func(...args), delay);
//     };
//   };

//   // Fetch postal code for a given lat/lon
//   const getPostalCode = async (lat, lon) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
//         {
//           headers: {
//             "User-Agent": "AddressAutoSuggest/1.0",
//           },
//         }
//       );
//       const data = await response.json();
//       return data.address?.postcode || "";
//     } catch (error) {
//       console.error("Error fetching postal code:", error);
//       return "";
//     }
//   };

//   // Filter suggestions to only include those with postal codes starting with 'T'
//   const filterSuggestions = async (suggestions) => {
//     setLoading(true);
//     const filteredSuggestions = [];

//     // Process in batches to avoid too many concurrent requests
//     const batchSize = 5;
//     for (let i = 0; i < suggestions.length; i += batchSize) {
//       const batch = suggestions.slice(i, i + batchSize);
//       const batchResults = await Promise.all(
//         batch.map(async (suggestion) => {
//           const postalCode = await getPostalCode(
//             suggestion.lat,
//             suggestion.lon
//           );
//           if (postalCode.startsWith("T")) {
//             return { ...suggestion, postcode: postalCode };
//           }
//           return null;
//         })
//       );

//       filteredSuggestions.push(...batchResults.filter(Boolean));

//       // Update suggestions as we go to improve user experience
//       if (filteredSuggestions.length > 0) {
//         // Sort by importance for better results
//         const sortedSuggestions = [...filteredSuggestions].sort(
//           (a, b) => (b.importance || 0) - (a.importance || 0)
//         );
//         setSuggestions(sortedSuggestions);
//       }
//     }

//     setLoading(false);
//   };

//   // Fetch address suggestions based on user input
//   const fetchSuggestions = useCallback(
//     debounce(async (query) => {
//       if (query.length < 2) {
//         setSuggestions([]);
//         return;
//       }

//       try {
//         setLoading(true);
//         // Add viewbox parameter to prioritize Canadian addresses
//         // This viewbox roughly covers Canada
//         const viewbox = "-141.00,41.68,-52.64,83.11";
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${query}&viewbox=${viewbox}&bounded=0&limit=10&countrycodes=ca`,
//           {
//             headers: {
//               "User-Agent": "AddressAutoSuggest/1.0",
//             },
//           }
//         );
//         const data = await response.json();

//         // Filter suggestions to only include ones with postal codes starting with 'T'
//         await filterSuggestions(data);
//       } catch (error) {
//         console.error("Error fetching address suggestions:", error);
//         setLoading(false);
//       }
//     }, 300), // Quick response time
//     []
//   );

//   const handleSelect = (selectedAddress) => {
//     setAddress(selectedAddress);
//     setSuggestions([]); // Hide suggestions after selecting
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     if (address) {
//       fetchSuggestions(address);
//     } else {
//       setSuggestions([]);
//     }
//   }, [address, fetchSuggestions]);

//   // Show suggestion examples when the input is focused and empty
//   const handleFocus = () => {
//     if (!address) {
//       // Pre-populated suggestion examples for Alberta cities (T postal codes)
//       const exampleSuggestions = [
//         {
//           place_id: "example1",
//           display_name: "Calgary, Alberta, Canada",
//           postcode: "T2P 2G8",
//           lat: "51.0447",
//           lon: "-114.0719",
//         },
//         {
//           place_id: "example2",
//           display_name: "Edmonton, Alberta, Canada",
//           postcode: "T5J 1N7",
//           lat: "53.5461",
//           lon: "-113.4938",
//         },
//         {
//           place_id: "example3",
//           display_name: "Red Deer, Alberta, Canada",
//           postcode: "T4N 3X3",
//           lat: "52.2681",
//           lon: "-113.8112",
//         },
//       ];
//       setSuggestions(exampleSuggestions);
//     }
//   };

//   return (
//     <div className="relative w-full">
//       <input
//         type="text"
//         placeholder="Start typing a Canadian address..."
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         onFocus={handleFocus}
//         className="w-full p-2 border border-gray-300 rounded-xl"
//       />

//       {loading && (
//         <div className="mt-1 p-2 border border-gray-300 rounded-xl bg-gray-50 text-center">
//           Loading suggestions...
//         </div>
//       )}

//       {!loading && suggestions.length > 0 && isOpen && (
//         <div className="suggestions-box mt-1 border border-gray-300 rounded-xl absolute w-full z-10 bg-white max-h-60 overflow-y-auto">
//           {suggestions.map((suggestion) => (
//             <div
//               key={suggestion.place_id}
//               className="suggestion-item p-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleSelect(suggestion.display_name)}
//             >
//               <div>{suggestion.display_name}</div>
//               <div className="text-sm text-gray-500">
//                 Postal Code: {suggestion.postcode}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {!loading && address.length >= 2 && suggestions.length === 0 && (
//         <div className="mt-1 p-2 border rounded-md bg-gray-50">
//           No addresses found with postal codes starting with 'T'
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddressAutoSuggest;
