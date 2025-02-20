import PropTypes from "prop-types";
import PuffLoader from "react-spinners/ClipLoader";
const Loader = ({ color, size }) => {
  return (
    <div>
      <PuffLoader
        color={color || "#4C9811"}
        size={size || 100}
        aria-label="Loading"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
