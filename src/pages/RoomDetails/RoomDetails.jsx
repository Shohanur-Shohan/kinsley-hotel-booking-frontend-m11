import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { DateRange } from "react-date-range";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import Loader from "../../components/Loaders/Loader";
import { useQuery } from "@tanstack/react-query";
import { bookARoom, singleRoomDetails } from "../../utils/api";
import { useParams } from "react-router-dom";
import RoomReviews from "./RoomReviews";
import { Bounce, toast } from "react-toastify";
import { fixDate } from "../../utils/GetDate";
import ReviewForm from "./ReviewForm";
import Swal from "sweetalert2";
const RoomDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { loading, user } = useContext(AuthContext);
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const { id } = useParams();
  // const email = user?.email;

  const { data, isLoading, isPending } = useQuery({
    queryKey: ["singleRoomDetails"],
    queryFn: () => singleRoomDetails(id),
  });
  // console.log(data);

  const handleBook = async (date) => {
    const startDate = fixDate(date[0]?.startDate);
    const endDate = fixDate(date[0]?.endDate);

    if (!user) {
      toast.warn("Login To Book a Room", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (data?.status !== "available") {
      toast.warn("Room is not available!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    const roomID = data?._id;
    const bookData = {
      booking_id: roomID,
      date_info: {
        start_date: startDate,
        end_date: endDate,
      },
      room_information: {
        room_id: roomID,
        room_image: data?.image,
        room_name: data?.room_name,
        room_status: data?.status,
      },
      user_info: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
    };

    //swal
    Swal.fire({
      title: "Are you sure you want to book this room?",
      showCancelButton: true,
      confirmButtonText: "Book Now",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await bookARoom({ roomID, bookData });
        if (res) {
          Swal.fire("Room Booked Successfully!", "", "success");
        }
        return res;
      }
    });
    //swal
  };

  if (loading) {
    return <Loader />;
  }

  if (isLoading || isPending) {
    return <Loader />;
  }
  // console.log(data);

  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | Details Page</title>
      </Helmet>
      {/*  */}
      <div className="w-full bg-[#F2FFFF]">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-[60px] md:py-[100px] grid-cols-1 md:grid-cols-5 lg:grid-cols-3 grid items-start gap-[20px] justify-between">
          <div className="grid-cols-1 md:col-span-3 lg:col-span-2">
            {/* Main Swiper */}
            <div className="border-[10px] border-white bg-white rounded-[8px] w-full my-shadow">
              <Swiper
                // loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
              >
                {data?.images.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={img} className="w-full" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                // loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
              >
                {data?.images.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={img} className="rounded-[4px]" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            {/* content */}
            <div className="my-[50px]">
              <h1 className="mb-[30px] text-[#383a4e] text-[24px] font-semibold">
                {data?.room_name}
              </h1>
              <p className="text-[14px] sm:text-[15px] text-[#64688c]">
                {data?.description}
              </p>
            </div>
            {/* content */}
            {/* Form */}
            <div>
              <h1 className="mb-[30px] text-[#383a4e] text-[24px] font-semibold">
                Write a review
              </h1>
              <ReviewForm roomdata={data} />
            </div>

            {/* End Form */}
          </div>
          <div className="grid-cols-1 md:col-span-2 lg:col-span-1">
            <div className="bg-[#FEFEFE] my-shadow px-[15px] sm:px-[25px] py-5 rounded-[8px] flex items-center justify-start gap-6">
              <div className="flex items-center justify-start gap-3">
                <img
                  src="/assets/room.svg"
                  className="w-[16px] h-[16px]"
                  alt="icon"
                />
                <p className="text-[14px]">Adults: {data?.room_info?.adults}</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img
                  src="/assets/square.svg"
                  className="w-[16px] h-[16px]"
                  alt="icon"
                />
                <p className="text-[14px]">Size: {data?.room_info?.size}</p>
              </div>
            </div>
            <div className="bg-[#FEFEFE] my-shadow px-[15px] sm:px-[25px] py-5 rounded-[8px] my-[20px]">
              <p className="text-[#383a4e] font-medium">Price srarts at</p>
              <h1 className="text-[#383a4e]">
                <span className="text-[#64BC5F] text-[36px] font-semibold">
                  ${data?.price}
                </span>{" "}
                per night
              </h1>
            </div>
            <div
              className={`${
                data?.status == "available" ? "bg-[#64BC5F]" : "bg-[#c63a3a]"
              } px-[20px] w-full text-center sm:px-[30px] py-3 sm:py-3 rounded-[8px]`}
            >
              <p className="text-[15px] text-white tracking-[2px] capitalize">
                {data?.status}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full my-4">
              <a
                href={"#roomReviews"}
                className="w-full px-6 py-4 text-lg font-semibold text-center text-indigo-600 transition-all duration-500 bg-indigo-100 rounded-full shadow-sm whitespace-nowrap shadow-transparent hover:shadow-indigo-200"
              >
                See All Reviews
              </a>
            </div>
            <div className="bg-[#FEFEFE] my-shadow px-[15px] sm:px-[25px] py-5 rounded-[8px] my-[20px]">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateState([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={addDays(new Date(), 0)}
                maxDate={addDays(new Date(), 60)}
                ranges={dateState}
              />
              <div
                onClick={() => handleBook(dateState)}
                className="bg-[#3B61DD] px-[20px] w-full text-center sm:px-[30px] py-3 sm:py-3 hover:bg-[#4470FE] rounded-full"
              >
                <p className="text-[15px] text-white tracking-[2px] cursor-pointer">
                  Book Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading || isPending ? (
        <p>No review available</p>
      ) : (
        <RoomReviews roomReviews={data?.reviews} />
      )}
    </main>
  );
};

export default RoomDetails;
