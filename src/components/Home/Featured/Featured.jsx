import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import FeaturedCard from "./FeaturedCard";
import Heading from "../../Heading";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const Featured = () => {
  // const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <div className="w-full bg-[#ECFAFB]  border-white pt-[80] sm:pt-[100px] pb-[200px] px-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        {/* content */}
        <Heading
          title={"Kinsley is Waiting for You!"}
          link={"/rooms"}
          des={
            "Explore our featured rooms curated for comfort and style. Discover unique designs and luxurious amenities. Find the perfect space to elevate your stay."
          }
          btn={"Featured Rooms"}
        />
        {/* content */}
      </div>

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
