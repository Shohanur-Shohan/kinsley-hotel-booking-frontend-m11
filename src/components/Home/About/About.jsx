import HotelFeatures from "../HotelFeatures/HotelFeatures";

const About = () => {
  return (
    <div className="w-full bg-[#F0FDFD] border-t-[20px] border-white pb-[100px]">
      <HotelFeatures />
      <div className="max-w-[1440px]  mx-auto px-2 sm:px-4 py-2 sm:py-4 mt-[100px] bg-white rounded-2xl">
        <div className="grid grid-cols-1 col-span-1 lg:grid-cols-2">
          <div className="col-span-1">
            <img
              className="w-full rounded-lg lg:rounded-none lg:rounded-tl-lg"
              src="/assets/about-t1.jpg"
              alt="img"
            />
          </div>
          <div className="col-span-1 pl-[15px] sm:pl-[30px] flex items-center">
            <div className="my-[40px] md:my-[60px] md:m-0">
              <h1 className="text-[#383a4e] text-[24px] lg:text-[38px] font-bold leading-[40px] lg:leading-[50px]">
                We have 17+ years of Experience
              </h1>
              <p className="mt-[20px] mb-[30px]">
                Over 17 years of proven expertise and success in our field.
                Delivering unparalleled service and solutions tailored to your
                needs. Trust our experience to guide your journey to success.
              </p>
              <div className="bg-[#3B61DD] w-fit text-[15px] text-white tracking-[2px] px-[20px] sm:px-[30px] py-3 sm:py-4 z-20 hover:bg-[#4470FE] rounded-full flex items-center justify-around gap-3">
                More about us
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 col-span-1 lg:grid-cols-2">
          <div className="col-span-1 order-2 lg:order-1 pl-[15px] sm:pl-[30px] md:pr-[50px] flex items-center">
            <div className="my-[40px] md:my-[60px] md:m-0">
              <h1 className="text-[#383a4e] text-[24px] lg:text-[38px] font-bold leading-[40px] lg:leading-[50px]">
                Start your Amazing Adventure!
              </h1>
              <p className="mt-[20px] mb-[30px]">
                Over 17 years of proven expertise and success in our field.
                Delivering unparalleled service and solutions tailored to your
                needs. Trust our experience to guide your journey to success.
              </p>
              <div className="bg-[#3B61DD] w-fit text-[15px] text-white tracking-[2px] px-[20px] sm:px-[30px] py-3 sm:py-4 z-20 hover:bg-[#4470FE] rounded-full flex items-center justify-around gap-3">
                Choose a room
              </div>
            </div>
          </div>
          <div className="order-1 col-span-1 lg:order-2">
            <img
              className="w-full rounded-lg lg:rounded-none lg:rounded-br-lg"
              src="/assets/about-t2.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
