import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Autoplay } from "swiper/modules";
import "./RoomReviews.css";
import RoomReviewsCard from "./RoomReviewsCard";
import Heading from "../../components/Heading";
import PropTypes from "prop-types";

const RoomReviews = ({ roomReviews }) => {
  return (
    <div
      id="roomReviews"
      className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-[60px] md:py-[100px]"
    >
      <Heading
        title={"User Reviews"}
        des={"Explore all user reviews and ratings of this room"}
      />

      {roomReviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        <>
          <section className="pt-8">
            <Swiper
              loop={true}
              freeMode={true}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 10 },
                1000: { slidesPerView: 3, spaceBetween: 10 },
              }}
              // modules={[Autoplay]}
              className="mySwiper"
            >
              {roomReviews
                ?.slice()
                .reverse()
                ?.map((review, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <RoomReviewsCard review={review?.review} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </section>
        </>
      )}
    </div>
  );
};
RoomReviews.propTypes = {
  roomReviews: PropTypes.array,
};
export default RoomReviews;
