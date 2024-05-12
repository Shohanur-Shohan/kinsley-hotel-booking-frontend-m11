const HotelFeatures = () => {
  return (
    <div className="w-full px-3 md:px-6">
      <div className="max-w-[1440px] z-30 mx-auto grid grid-cols-1 -mt-[100px] rounded-xl sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-white px-5 py-5 items-center">
        <div className="flex flex-col items-center justify-center col-span-1 z-30 rounded-xl h-[135px] bg-[#F0FDFD] py-[35px]">
          <img src="/assets/f-1.png" className="w-[50px] mb-2" alt="img" />
          <h1 className="text-[#383a4e] font-semibold">Airport transfer </h1>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1 z-30 rounded-xl h-[135px] bg-[#F0FDFD] py-[35px]">
          <img src="/assets/f-2.png" className="w-[50px] mb-2" alt="img" />
          <h1 className="text-[#383a4e] font-semibold">All inclusive </h1>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1 z-30 rounded-xl h-[135px] bg-[#F0FDFD] py-[35px]">
          <img src="/assets/f-3.png" className="w-[50px] mb-2" alt="img" />
          <h1 className="text-[#383a4e] font-semibold">Air-conditioned </h1>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1 z-30 rounded-xl h-[135px] bg-[#F0FDFD] py-[35px]">
          <img src="/assets/f-4.png" className="w-[50px] mb-2" alt="img" />
          <h1 className="text-[#383a4e] font-semibold">Under protection </h1>
        </div>
      </div>
    </div>
  );
};

export default HotelFeatures;
