import { allRoomsDes } from "../../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import RoomCard from "./RoomCard";
import Loader from "../../Loaders/Loader";

const RoomsDes = () => {
  const { data, isLoading, isPending } = useQuery({
    queryKey: ["allRoomsDes"],
    queryFn: allRoomsDes,
  });
  // console.log("des", data);
  return (
    <>
      <div className="mt-[16px]">
        <Swiper
          rewind={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
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
      </div>
    </>
  );
};

export default RoomsDes;
