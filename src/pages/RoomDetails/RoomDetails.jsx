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
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import Loader from "../../components/Loaders/Loader";
const RoomDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { loading } = useContext(AuthContext);

  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleBook = (date) => {
    console.log(date, "clicked");
  };

  if (loading) {
    return <Loader />;
  }

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
                loop={true}
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
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
                    className=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3.jpg"
                    className=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2.jpg"
                    className=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4.jpg"
                    className=""
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
                    className="rounded-[4px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3.jpg"
                    className="rounded-[4px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2.jpg"
                    className="rounded-[4px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4.jpg"
                    className="rounded-[4px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* content */}
            <div className="my-[50px]">
              <h1 className="mb-[30px] text-[#383a4e] text-[24px] font-semibold">
                Kinsley is waiting for you!
              </h1>
              <p className="text-[14px] sm:text-[15px] text-[#64688c]">
                Image for cattle earth. May one Which life divide sea. Optio
                veniam quibusdam fugit aspernatur ratione rerum necessitatibus
                ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore
                veritatis repellat natus illo, veniam quibusdam fugit aspernatur
                cumque harum quos esse libero nesciunt, molestiae saepe,
                possimus a suscipit! Minima aspernatur quod maxime quis facere
                facilis magnam, animi, quia id nihil reiciendis laboriosam,
                suscipit explicabo amet quasi recusandae at
              </p>
            </div>
            {/* content */}
            {/* Form */}
            <div>
              <h1 className="mb-[30px] text-[#383a4e] text-[24px] font-semibold">
                Write a review
              </h1>
              <form>
                <div className="grid gap-y-4">
                  {/* price and rating */}
                  <div className="mb-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="col-span-1">
                        <label
                          htmlFor="userName"
                          className="block mb-2 font-medium text-gray-900 text-md"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          name="userName"
                          id="userName"
                          className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Enter your username.."
                          required
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="email"
                          className="block mb-2 font-medium text-gray-900 text-md"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Enter your email.."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* price and rating */}
                  <div className="mb-3">
                    <div className="grid grid-cols-1">
                      <div className="col-span-1">
                        <label
                          htmlFor="rating"
                          className="block mb-2 font-medium text-gray-900 text-md"
                        >
                          Room Rating
                        </label>

                        <select
                          name="rating"
                          id="rating"
                          className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        >
                          <option>1 Star</option>
                          <option>2 Stars</option>
                          <option>3 Stars</option>
                          <option>4 Stars</option>
                          <option defaultChecked>5 Stars</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Form Group */}
                  <div className="mb-3">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="col-span-1">
                        <textarea
                          name="message"
                          id="message"
                          className=" h-[150px] bg-[#fff] border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Enter youe review.."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-fit items-center tracking-[1px] justify-center px-[40px] py-3 text-sm font-semibold text-white transition-colors bg-[#3B61DD] hover:bg-[#4470FE] rounded-full gap-x-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
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
                <p className="text-[14px]">Adults: 4</p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <img
                  src="/assets/square.svg"
                  className="w-[16px] h-[16px]"
                  alt="icon"
                />
                <p className="text-[14px]">Size: 100sft</p>
              </div>
            </div>
            <div className="bg-[#FEFEFE] my-shadow px-[15px] sm:px-[25px] py-5 rounded-[8px] my-[20px]">
              <p className="text-[#383a4e] font-medium">Price srarts at</p>
              <h1 className="text-[#383a4e]">
                <span className="text-[#64BC5F] text-[36px] font-semibold">
                  $49
                </span>{" "}
                per night
              </h1>
            </div>
            <div className="bg-[#64bc5f] px-[20px] w-full text-center sm:px-[30px] py-3 sm:py-3 rounded-[8px]">
              <p className="text-[15px] text-white tracking-[2px]">Avaliable</p>
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
                <p className="text-[15px] text-white tracking-[2px]">
                  Book Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </main>
  );
};

export default RoomDetails;
