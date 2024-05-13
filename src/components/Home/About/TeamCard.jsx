const TeamCard = ({ image, name, role }) => {
  return (
    <div className=" rounded-[8px] col-span-1">
      <div className="w-full overflow-hidden rounded-[8px] relative border-[8px] border-white">
        <img
          src={image}
          className="w-full rounded-[8px] hover:scale-[1.05] transition-all duration-300 max-h-[330px] object-cover"
          alt="img"
        />
      </div>
      <div className="px-[10px] md:px-[20px] py-[10px] md:py-[20px] bg-white rounded-[8px]">
        <h1 className="text-[#383a4e] font-semibold text-[24px] line-clamp-1 mt-1 mb-1">
          {name}
        </h1>
        <p>{role}</p>

        <div className="mt-2 bg-white max-w-[300px]">
          <ul className="flex items-center justify-start gap-4 py-1 text-sm">
            <li>
              <img src="/assets/fb.svg" className="w-6 h-6" alt="icon" />
            </li>
            <li>
              <img src="/assets/ig.svg" className="w-6 h-6" alt="icon" />
            </li>
            <li>
              <img src="/assets/ln.svg" className="w-6 h-6" alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
