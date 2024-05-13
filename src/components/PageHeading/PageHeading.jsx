import PropTypes from "prop-types";

const PageHeading = ({ title, des, btn }) => {
  return (
    <div className="w-full bg-[#ECFAFB] py-[50px] sm:py-[100px]">
      <div className="max-w-[750px] mx-auto flex-col flex justify-center items-center px-4">
        <h1 className="text-[#383a4e] text-[26px] sm:text-[34px] font-bold md:text-[56px] lg:text-[64px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[70px]">
          {title}
        </h1>
        <p className="text-[14px] md:text-[15px] text-[#64688c] text-center mt-6 mb-4 sm:px-3">
          {des}
        </p>
        <div className="bg-[#ffffff] rounded-full  px-2 py-2 w-fit">
          <div className="bg-[#eba744] px-[20px] sm:px-[30px] py-2 sm:py-3 md:py-4 z-20 hover:bg-[#FFC04E] rounded-full flex items-center justify-around gap-3">
            <p className="text-[15px] text-white tracking-[2px]">{btn}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
PageHeading.propTypes = {
  title: PropTypes.string,
  des: PropTypes.string,
  btn: PropTypes.string,
};
export default PageHeading;
