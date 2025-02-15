import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const Button = ({ children, className }) => {
  return (
    <div>
      <button
        className={cn(
          "px-5 py-2 rounded-xl bg-gradient-to-t from-primaryBoldColor to-primaryLightColor text-white",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
