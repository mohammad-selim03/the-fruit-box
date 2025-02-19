import { commonbanner, commonsection } from "@/assets";
import Title from "./Title";
import PropTypes from "prop-types"; 

const DynamicBanner = ({ title, semiTitle }) => {
  return (
    <div>
      <div className="relative">
        <img src={commonbanner} className="w-full h-full" alt="" />
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
          <img src={commonsection} alt="" />
        </div>
        <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-primaryLightColor text-2xl font-bold uppercase">
            {title}
          </h1>
          <Title className="text-white font-extrabold capitalize">
            the fruit box
          </Title>
          <p className="text-center text-white">{semiTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;

DynamicBanner.propTypes = {
  title: PropTypes.string,
  semiTitle: PropTypes.string,
};
