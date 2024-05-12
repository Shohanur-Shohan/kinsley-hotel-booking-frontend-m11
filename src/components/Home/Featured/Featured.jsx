import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <div className="w-full bg-[#ECFAFB]  border-white py-[100px] px-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        {/* content */}
        <div className="flex flex-col items-center max-w-[650px] px-4 mx-auto">
          <h1 className="text-[#383a4e] text-[24px] lg:text-[38px] font-bold leading-[40px] lg:leading-[50px]">
            Kinsley is Waiting for You!
          </h1>
          <p className="text-center mt-[20px] mb-4">
            Explore our featured rooms curated for comfort and style. Discover
            unique designs and luxurious amenities. Find the perfect space to
            elevate your stay.
          </p>
          <div className="bg-[#ffffff] rounded-full  px-2 py-2 w-fit">
            <div className="bg-[#3B61DD] text-[15px] text-white tracking-[2px] px-[20px] sm:px-[30px] py-3 sm:py-4 z-20 hover:bg-[#4470FE] rounded-full">
              Featured Rooms
            </div>
          </div>
        </div>
        {/* content */}
      </div>

      {/* swiper */}
      <Swiper
        freeMode={true}
        modules={[FreeMode, Autoplay]}
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
        <SwiperSlide>
          <FeaturedCard
            image={"/assets/featured5.jpg"}
            subTitle={"View from the sea"}
            title={"Deluxe room"}
            des={
              "Indulge in luxury with our deluxe room offering premium comfort and exquisite amenities.Experience unparalleled relaxation and sophistication in our deluxe accommodations"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard
            image={"/assets/featured5.jpg"}
            subTitle={"View from the sea"}
            title={"Deluxe room"}
            des={
              "Indulge in luxury with our deluxe room offering premium comfort and exquisite amenities.Experience unparalleled relaxation and sophistication in our deluxe accommodations"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard
            image={"/assets/featured5.jpg"}
            subTitle={"View from the sea"}
            title={"Deluxe room"}
            des={
              "Indulge in luxury with our deluxe room offering premium comfort and exquisite amenities.Experience unparalleled relaxation and sophistication in our deluxe accommodations"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard
            image={"/assets/featured5.jpg"}
            subTitle={"View from the sea"}
            title={"Deluxe room"}
            des={
              "Indulge in luxury with our deluxe room offering premium comfort and exquisite amenities.Experience unparalleled relaxation and sophistication in our deluxe accommodations"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard
            image={"/assets/featured5.jpg"}
            subTitle={"View from the sea"}
            title={"Deluxe room"}
            des={
              "Indulge in luxury with our deluxe room offering premium comfort and exquisite amenities.Experience unparalleled relaxation and sophistication in our deluxe accommodations"
            }
          />
        </SwiperSlide>
      </Swiper>
      {/* swiper */}
    </div>
  );
};

export default Featured;
