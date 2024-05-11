const Hero = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <div
        className="bg-center bg-no-repeat bg-cover h-[350px] md:h-[90vh] relative z-0 flex flex-col items-center"
        style={{
          backgroundImage: 'url("/assets/hero1.png")',
          animation: "scaleBackground 10s ease-in-out infinite",
        }}
      >
        {/* content */}
        <div className="z-10 grid items-center justify-center max-w-[1440px] mx-auto mt-[280px]">
          <div className="mx-auto w-fit bg-[#ffffff33] px-2 py-1 rounded-full">
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
          <h1 className="text-white text-[78px] font-bold text-center z-10 leading-[80px]">
            Welcome to Kinsley
          </h1>
          <p className="max-w-[650px] text-[14px] md:text-[15px] px-3 md:px-2 mx-auto text-center text-[#ecfafb] z-10">
            Experience the epitome of luxury by booking your stay at Hoteller.
            Whether it’s a romantic getaway, a family vacation, or a business
            trip,.
          </p>
        </div>
        {/* content */}
        {/* grid */}
        <div className="max-w-[1440px] mx-auto justify-between items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4"></div>
        {/* grid */}
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
