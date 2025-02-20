import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const Title = ({ className, children, style }) => {
  return (
    <h1
      className={cn("text-[36px] md:text-[64px] font-extrabold z-20 uppercase", className)}
      style={style}
    >
      {children}
    </h1>
  );
};

export default Title;

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};
