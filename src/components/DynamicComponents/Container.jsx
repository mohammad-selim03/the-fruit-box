import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const Container = ({ className, children }) => {
  return (
    <div className={cn("max-w-[1315px] mx-auto", className)}>{children}</div>
  );
};

export default Container;

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
