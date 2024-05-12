import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Heading = ({ title, link, des, btn }) => {
  return (
    <div className="flex flex-col items-center max-w-[650px] px-4 mx-auto mb-[40px] md:mb-[50px] lg:mb-[70px] text-center">
      <h1 className="text-[#383a4e] text-[24px] lg:text-[38px] font-bold leading-[40px] lg:leading-[50px]">
        {title}
      </h1>
      <p className="text-center mt-[20px] mb-[30px]">{des}</p>
      {btn && (
        <Link to={link} className="bg-[#ffffff] rounded-full  px-2 py-2 w-fit">
          <div className="bg-[#3B61DD] text-[15px] text-white tracking-[2px] px-[20px] sm:px-[30px] py-3 sm:py-4 z-20 hover:bg-[#4470FE] rounded-full">
            {btn}
          </div>
        </Link>
      )}
    </div>
  );
};
Heading.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  des: PropTypes.string,
  btn: PropTypes.string,
};
export default Heading;
