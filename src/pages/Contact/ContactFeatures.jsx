const ContactFeatures = () => {
  return (
    <div className="w-full px-3 md:px-6">
      <div className="max-w-[1440px] z-30 mx-auto grid grid-cols-1 rounded-xl sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
        <div className="flex flex-col items-center justify-center col-span-1 z-30 rounded-xl h-[135px] bg-[#F0FDFD] border-[8px] border-white py-[40px]">
          <img src="/assets/f-9.png" className="w-[50px] mb-2" alt="img" />
          <h1 className="text-[#383a4e] font-semibold">Welcome </h1>
          <p className="text-[#64688c] text-[14px] md:text-[15px]">
            Santo Domingo 9479 Magarto st.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1 z-30 rounded-xl h-[135px] bg-[#F0FDFD] border-[8px] border-white py-[40px]">
          <img src="/assets/f-10.png" className="w-[50px] mb-2" alt="img" />
          <h1 className="text-[#383a4e] font-semibold">Call </h1>
          <p className="text-[#64688c] text-[14px] md:text-[15px]">
            +93 (736) 6X8 84 84
          </p>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1 z-30 rounded-xl h-[135px] bg-[#F0FDFD] border-[8px] border-white py-[40px]">
          <img src="/assets/f-11.png" className="w-[50px] mb-2" alt="img" />
          <h1 className="text-[#383a4e] font-semibold">Write </h1>
          <p className="text-[#64688c] text-[14px] md:text-[15px]">
            kinsley.inbox@mail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFeatures;
