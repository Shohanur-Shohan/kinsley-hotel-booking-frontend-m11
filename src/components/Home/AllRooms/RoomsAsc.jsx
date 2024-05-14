import { allRoomsAsc } from "../../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import RoomCard from "./RoomCard";
import Loader from "../../Loaders/Loader";

const RoomsAsc = () => {
  const { data, isLoading, isPending } = useQuery({
    queryKey: ["allRoomsAsc"],
    queryFn: allRoomsAsc,
  });
  // console.log("asc", data);

  return (
    <>
      {/* swiper */}
      <Swiper
        rewind={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1000: { slidesPerView: 3, spaceBetween: 10 },
        }}
        className="mySwiper"
      >
        {isLoading || isPending ? (
          <Loader />
        ) : (
          data?.map((room) => {
            return (
              <SwiperSlide key={room?._id}>
                <RoomCard roomdata={room} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
      {/* swiper */}
    </>
  );
};

export default RoomsAsc;
