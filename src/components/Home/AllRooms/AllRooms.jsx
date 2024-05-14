import Heading from "../../Heading";
import Count from "../Count/Count";
import RoomsAsc from "./RoomsAsc";
import RoomsDes from "./RoomsDes";

const AllRooms = () => {
  return (
    <div className="w-full bg-[#ECFAFB]  border-t-[20px] border-white py-[100px] px-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        <Count />
        {/* content */}
        <div className="mt-[50px] sm:mt-[100px]">
          <Heading
            title={"Our Best Rooms"}
            link={"/rooms"}
            des={
              "Explore all our rooms curated for comfort and style. Discover unique designs and luxurious amenities. Find the perfect space to elevate your stay."
            }
            btn={"All Rooms"}
          />
        </div>

        {/* content */}

        {/* swiper1 */}
        <RoomsAsc />
        {/* swiper1 */}
        {/* swiper2 */}
        <RoomsDes />
        {/* swiper2 */}
      </div>
    </div>
  );
};

export default AllRooms;
