import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RoomCard2 = ({ roomdata }) => {
  const { title, des, image, price, limit, size, review, id } = roomdata;
  return (
    <div className="border-[10px] border-white rounded-[10px]">
      <div className="w-full overflow-hidden rounded-[8px] relative">
        <img
          src={image}
          className="w-full rounded-[8px] hover:scale-[1.05] transition-all duration-300"
          alt="img"
        />
        {review && (
          <div className="bg-[#ffffff33] px-4 py-1 absolute top-2 right-2 flex items-center gap-1 rounded-md">
            <p className="text-white text-[14px] line-clamp-1">{review}</p>
            <img
              src="/assets/stars.svg"
              className="w-[14px] h-[14px]"
              alt="img"
            />
          </div>
        )}
      </div>
      <div className="px-[10px] md:px-[20px] py-[10px] md:py-[20px] bg-white">
        <div className="bg-[#ecfafb] px-[15px] sm:px-[25px] py-3 rounded-full flex items-center justify-start gap-6">
          <div className="flex items-center justify-start gap-3">
            <img
              src="/assets/room.svg"
              className="w-[16px] h-[16px]"
              alt="icon"
            />
            <p className="text-[14px]">Adults: {limit}</p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <img
              src="/assets/square.svg"
              className="w-[16px] h-[16px]"
              alt="icon"
            />
            <p className="text-[14px]">Size: {size}</p>
          </div>
        </div>
        <h1 className="text-[#383a4e] font-semibold text-[24px] line-clamp-1 mt-[24px] mb-[16px]">
          {title}
        </h1>
        <p className="text-[#64688c] text-[14px] sm:text-[15px] line-clamp-3">
          {des}
        </p>
        <div className="flex items-center justify-between mt-[22px]">
          <div className="flex items-center gap-2">
            <div className="text-[22px] text-[#64bc5f] font-semibold tracking-[1px]">
              $<span className="">{price}</span>
            </div>
            <p>Per Night</p>
          </div>
          {id ? (
            <Link
              to={`/room-details/${id}`}
              className="bg-[#3B61DD] text-[15px] text-white tracking-[2px] px-[25px] sm:px-[35px] py-2 sm:py-3 z-20 hover:bg-[#4470FE] rounded-full cursor-pointer"
            >
              Room Details
            </Link>
          ) : (
            <div className="bg-[#3B61DD] text-[15px] text-white tracking-[2px] px-[25px] sm:px-[35px] py-2 sm:py-3 z-20 hover:bg-[#4470FE] rounded-full cursor-pointer">
              Book Now
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
RoomCard2.propTypes = {
  roomdata: PropTypes.object,
};
export default RoomCard2;
