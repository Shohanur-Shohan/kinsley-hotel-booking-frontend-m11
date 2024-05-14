import PropTypes from "prop-types";
const FeaturedCard = ({ image, subTitle, title, des }) => {
  return (
    <div className="col-span-1 border-[10px] rounded-[10px] border-white relative group">
      <img src={image} className="w-full" alt="img" />
      <div className="bg-[#EBA843] px-2 py-1 rounded-sm absolute top-2 right-2 ">
        <p className="text-white text-[14px] line-clamp-1">{subTitle}</p>
      </div>
      <div className="bg-[#ffffffc4] rounded-md w-[95%] absolute left-3 bottom-2 py-3 px-3 invisible group-hover:visible transition-all translate-y-[200px] group-hover:translate-y-0">
        <p className="text-[15px] text-[#383a4e] tracking-[2px] text-xl font-medium">
          {title}
        </p>
        <p className="text-[15px] text-[#383a4e] line-clamp-2 ">{des}</p>
        <p className="mt-2 font-semibold text-[#EBA943] underline cursor-pointer">
          Book Now
        </p>
      </div>
    </div>
  );
};
FeaturedCard.propTypes = {
  image: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  des: PropTypes.string,
};
export default FeaturedCard;
