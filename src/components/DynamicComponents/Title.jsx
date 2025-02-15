import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const Title = ({ className, children }) => {
  return (
    <h1 className={cn("text-[64px] font-semibold z-20", className)}>{children}</h1>
  );
};

export default Title;

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
