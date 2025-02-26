import { commonbanner, commonsection } from "@/assets";
import Title from "./Title";
import PropTypes from "prop-types";

const DynamicBanner = ({ title, semiTitle }) => {
  return (
    <div>
      <div className="relative">
        <img
          src={commonbanner}
          className="w-full h-[350px] sm:h-[480px] 2xl:h-full "
          alt=""
        />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] md:w-[40%]">
          <img src={commonsection} alt="" className="w-full h-[180px] sm:h-[250px] md:h-[200px] lg:h-full" />
          <div className="absolute bottom-[35%] sm:bottom-[40%] left-1/2 -translate-x-1/2 text-center w-full">
            <h1 className="text-primaryLightColor text-base xl:text-2xl font-bold uppercase">
              {title}
            </h1>
            <Title className="text-white font-extrabold capitalize text-[24px] sm:text-[28px] 2xl:text-[64px]">
              the fruit box
            </Title>
            <p className="text-center text-white text-xs sm:text-sm xl:text-base">
              {semiTitle}
            </p>
          </div>
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
