const Hero = () => {
  return (
    <div className="w-full min-h-[95vh] overflow-hidden">
      <div className="relative z-0 flex flex-col items-center w-full overflow-hidden bg-center bg-no-repeat bg-cover">
        {/* Video Background */}
        <video
          src="/assets/hotel.mp4"
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        ></video>
        {/* content */}
        <div className="z-10 grid items-center justify-center max-w-[1440px] mx-auto mt-[100px] sm:mt-[150px] md:mt-[200px]">
          <div className="mx-auto w-fit bg-[#ffffff33] px-2 py-1 rounded-full mb-[20px]">
            <ul className="flex gap-2">
              <li>
                <img
                  src="/assets/stars.svg"
                  className="w-[14px] h-[14px]"
                  alt="img"
                />
              </li>
              <li>
                <img
                  src="/assets/stars.svg"
                  className="w-[14px] h-[14px]"
                  alt="img"
                />
              </li>
              <li>
                <img
                  src="/assets/stars.svg"
                  className="w-[14px] h-[14px]"
                  alt="img"
                />
              </li>
              <li>
                <img
                  src="/assets/stars.svg"
                  className="w-[14px] h-[14px]"
                  alt="img"
                />
              </li>
              <li>
                <img
                  src="/assets/stars.svg"
                  className="w-[14px] h-[14px]"
                  alt="img"
                />
              </li>
            </ul>
          </div>
          <h1 className="text-white text-[36px] sm:text-[48px] md:text-[56px] xl:text-[78px] font-bold text-center z-10 leading-[40px] sm:leading-[50px] md:leading-[60px] xl:leading-[80px]">
            Welcome to Kinsley
          </h1>
          <p className="max-w-[400px] md:max-w-[600px] mt-5 mb-[30px] text-[14px] md:text-[15px] px-3 md:px-2 mx-auto text-center text-[#ecfafb] z-10">
            Experience the epitome of luxury by booking your stay at Hoteller.
            Whether it’s a romantic getaway, a family vacation, or a business
            trip,.
          </p>
        </div>
        {/* content */}
        {/* grid */}
        <div className="z-20 items-center justify-center sm:w-full gap-4 mx-auto flex flex-col sm:flex-row w-[320px]">
          <div className="bg-[#ffffff33] rounded-full  px-2 py-2">
            <div className="bg-[#3B61DD] px-[20px] sm:px-[30px] py-3 sm:py-4 z-20 hover:bg-[#4470FE] rounded-full flex items-center justify-around gap-3">
              <img src="/assets/play.svg" className="w-6 h-6 " alt="img" />
              <p className="text-[15px] text-white tracking-[2px]">
                Watch Video
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff33] rounded-full  px-2 py-2">
            <div className="bg-[#eba744] px-[20px] sm:px-[30px] py-3 sm:py-4 z-20 hover:bg-[#FFC04E] rounded-full flex items-center justify-around gap-3">
              <img src="/assets/booking.svg" className="w-5 h-5 " alt="img" />
              <p className="text-[15px] text-white tracking-[2px]">Book Now</p>
            </div>
          </div>
        </div>
        {/* scroll */}
        <div className="flex mt-[30px] md:mt-[60px]">
          <p className="text-[14px] md:text-[15px] text-center text-[#ecfafb] z-10 mb-[20px]">
            Scroll Down
          </p>
        </div>
        <div className="border-2 border-[#EBA843] z-10 rounded-full px-2 py-[30px] mb-[120px] sm:mb-[150px] md:mb-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[10px] h-[10px] updown-dot"
            x="0"
            y="0"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                fill="#fff"
                d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
              ></path>
            </g>
          </svg>
        </div>
        {/* grid */}
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
