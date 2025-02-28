import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import Button from "./Button";
import SelectItems from "./SelectItems";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const FruitBoxCard = ({ data }) => {
  // Initialize state with first serving's data if available
  // const initialServing = data?.servings[0] || [];
  const [selectedServing, setSelectedServing] = useState([]);

  const { setCartItems } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServingChange = (servingName) => {
    const selected = data?.servings?.find(
      (serving) => serving.name === servingName
    );
    if (selected) {
      setSelectedServing(selected);
    }
  };

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      const existingItems = Array.isArray(prevItems) ? prevItems : [];

      if (!existingItems.some((item) => item?.name === data?.name)) {
        toast.success("Product added to the cart");

        const sanitizedData = {
          id: data?.id,
          name: data?.name,
          description: data?.description || "",
          image: data?.image || "",
          price: selectedServing?.price
            ? parseFloat(selectedServing.price)
            : parseInt(data?.price),
          quantity: data?.quantity || 1,
          servings_multiple: data?.price_multiple ? selectedServing.name : null,
          servings: data?.price_multiple
            ? selectedServing
            : data?.servings_single,
        };

        const updatedCart = [...existingItems, sanitizedData];
        localStorage.setItem("fruits", JSON.stringify(updatedCart));
        // navigate("/cart");
        navigate("/cart", { state: { from: location.pathname } });
        return updatedCart;
      } else {
        toast.error("Product has already been added to the cart");
      }

      return existingItems;
    });
  };

  return (
    <div className="relative z-20 w-full">
      <div className="flex flex-col lg:flex-row relative group w-full lg:aspect-[650/325] rounded-l-[30px] border border-[#75AC46] hover:border-primaryBoldColor rounded-[30px] overflow-hidden">
        {/* Left Image Section */}
        <div
          className={cn(
            "flex-1 flex items-center justify-center bg-white min-h-[250px] lg:h-full"
          )}
        >
          <img
            src={data?.image}
            alt={data?.name || "Fruit"}
            className="w-[75%]"
          />
        </div>

        {/* Right Content Section */}
        <div className="relative z-20 flex-1">
          <div className="w-full h-full min-h-[220px] bg-[#75AC46]"></div>

          <div
            className={cn(
              "bg-primaryBoldColor absolute top-0 left-0 translate-y-96 group-hover:translate-y-0 transition-all duration-200 w-full h-full p-4"
            )}
          >
            <div>
              <p
                className={cn(
                  "text-white line-clamp-5",
                  data?.custom === 1 &&
                    "line-clamp-3 lg:line-clamp-4 xl:line-clamp-5"
                )}
              >
                {data?.description}
              </p>
            </div>
          </div>

          <div
            className={cn(
              "absolute top-14 lg:top-1/3 left-4 right-4 -translate-y-1/2",
              data?.custom === 1 &&
                "top-20 mt-0 lg:mt-0 lg:top-[80px] xl:top-40 "
            )}
          >
            <div className="flex flex-col gap-2">
              {data?.name && (
                <h2 className="md:text-lg lg:text-[18px] xl:text-[26px] text-white group-hover:hidden capitalize">
                  {data?.name}
                </h2>
              )}
              {data?.servings_single ? (
                <p className="group-hover:invisible capitalize text-sm">
                  {data?.servings_single}
                </p>
              ) : (
                <p className="group-hover:invisible text-sm">
                  10 - 85 Servings
                </p>
              )}
              {data?.price_multiple !== null && (
                <div
                  className={cn(
                    "mt-5",
                    data?.custom === 1 &&
                      "group-hover:mt-12 lg:group-hover:-mt-5 xl:group-hover:mt-20"
                  )}
                >
                  <SelectItems
                    data={data?.servings}
                    setServings={handleServingChange}
                    triggerClass="py-6 px-2 text-lg text-left"
                    placeholder="# of servings"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="absolute bottom-4 left-4  right-4">
            <div
              onClick={handleAddToCart}
              className={cn(
                "mx-auto z-20 group-hover:-bottom-[167px] flex flex-col gap-8",
                data?.price_multiple !== null &&
                  "-bottom-44 group-hover:-bottom-[215px]"
              )}
            >
              <Button
                disabled={data?.custom === 1 && selectedServing?.length === 0}
                className="border-2 lg:rounded-2xl border-white w-full shadow-black/20 shadow-lg py-3 text-sm md:text-base"
              >
                <div>
                  {" "}
                  {data?.price_multiple === null && "Order now $"}
                  {data?.price_multiple ? (
                    <div>
                      {selectedServing?.length !== 0 ? (
                        <div className="flex items-center justify-center gap-2">
                          <p>Order now $</p>
                          {parseFloat(selectedServing?.price).toFixed(2)}
                        </div>
                      ) : (
                        "Select serving to show price"
                      )}
                    </div>
                  ) : (
                    parseFloat(data?.price).toFixed(2)
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FruitBoxCard.propTypes = {
  data: PropTypes.object,
};

export default FruitBoxCard;
