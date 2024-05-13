import Heading from "../../Heading";
import Count from "../Count/Count";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import RoomCard from "./RoomCard";

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
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
              }}
            />
          </SwiperSlide>
        </Swiper>
        {/* swiper */}
        {/* swiper */}
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
            <SwiperSlide>
              <RoomCard
                data={{
                  title: "Deluxe room",
                  image: "/assets/room-1.jpg",
                  des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                  price: "49",
                  limit: "4",
                  size: "100 sft",
                  id: 1,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RoomCard
                data={{
                  title: "Deluxe room",
                  image: "/assets/room-1.jpg",
                  des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                  price: "49",
                  limit: "4",
                  size: "100 sft",
                  id: 1,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RoomCard
                data={{
                  title: "Deluxe room",
                  image: "/assets/room-1.jpg",
                  des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                  price: "49",
                  limit: "4",
                  size: "100 sft",
                  id: 1,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RoomCard
                data={{
                  title: "Deluxe room",
                  image: "/assets/room-1.jpg",
                  des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                  price: "49",
                  limit: "4",
                  size: "100 sft",
                  id: 1,
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <RoomCard
                data={{
                  title: "Deluxe room",
                  image: "/assets/room-1.jpg",
                  des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                  price: "49",
                  limit: "4",
                  size: "100 sft",
                  id: 1,
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* swiper */}
      </div>
    </div>
  );
};

export default AllRooms;
