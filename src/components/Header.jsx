import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseAuthProvider";
import BtnLoader from "./Loaders/BtnLoader";
import { Bounce, toast } from "react-toastify";

const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  //logout
  const handlelogOut = () => {
    logOut();
    toast.success("Logout Success", {
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
  };
  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="800"
      className="w-full bg-primary shadow-md shadow-b-[5px] -shadow-spread-2"
    >
      <div className="navbar max-w-[1440px] mx-auto justify-between flex items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        <div className="navbar-start">
          <Link to={"/"} className="">
            <img
              src="/assets/logo.png"
              className="max-w-[120px] md:max-w-[150px]"
              alt="logo"
            />
          </Link>
        </div>
        {/* desktop-menu */}
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-3 lg:gap-[25px] xl:gap-[30px]">
            <li>
              <NavLink
                to={"/"}
                className="text-[#383a4e] md:text-[16px]   hover:text-[#3B61DD] transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="text-[#383a4e] md:text-[16px]   hover:text-[#3B61DD] transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/rooms"}
                className="text-[#383a4e] md:text-[16px]   hover:text-[#3B61DD] transition-colors"
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/gallery"}
                className="text-[#383a4e] md:text-[16px]   hover:text-[#3B61DD] transition-colors"
              >
                Gallery
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to={"/my-bookings"}
                  className="text-[#383a4e] md:text-[16px]   hover:text-[#3B61DD] transition-colors"
                >
                  My Bookings
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to={"/contact"}
                className="text-[#383a4e] md:text-[16px]   hover:text-[#3B61DD] transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* desktop-menu */}

        <div className="navbar-end">
          <div className="flex items-center justify-end gap-6">
            {/* search & cart*/}
            <div className="relative py-2 cursor-pointer">
              <div className="absolute t-0 left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#3b61dd] p-3 text-xs text-white">
                  3
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>

            {/* search & cart*/}
            {/* Profile */}
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center justify-center rounded-full avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="avatar"
                      className="object cover "
                      src={`${user?.photoURL || "/assets/noProfile.svg"} `}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[999] px-3 py-4 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="pl-2 my-2 text-left text-secondary">
                    Profile
                  </li>
                  <button
                    onClick={() => handlelogOut()}
                    className="pl-2 my-2 text-left cursor-pointer text-secondary"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            )}
            {/* Profile */}
            {loading ? (
              <BtnLoader />
            ) : (
              !user && (
                <Link
                  to={"/login"}
                  className="hidden sm:flex px-5 py-[8px] md:px-8 md:py-[10px] hover:bg-transparent bg-[#3b61dd] transition-colors border-[#3b61dd] border rounded-full font-medium hover:text-[#3b61dd] text-[#fff]"
                >
                  Login
                </Link>
              )
            )}
          </div>

          {/* drawer */}
          <div className="z-50 drawer drawer-end w-fit">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button lg:hidden">
                <img
                  className="w-10 h-10 ml-4 sm:ml-2"
                  src="/assets/navicon.svg"
                  alt="icon"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* mobile */}
              <div>
                <Link href={"/"} className="">
                  <img
                    src="/assets/logo.webp"
                    className="max-w-[130px] md:max-w-[150px] xl:max-w-[180px]"
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className="w-64 min-h-screen px-2 sm:w-72 right-2 bg-[#F2F2F2] text-[#383a4e] md:text-[16px]-content">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                >
                  <img
                    src="/assets/closeBtn.svg"
                    className="w-8 h-8 mt-2 mb-8"
                    alt="icon"
                  />
                </label>
                <li className="mb-5 ">
                  <NavLink
                    to={"/"}
                    className="my-1 text-[#1e1e1e] border border-transparent   hover:text-[#3B61DD] transition-colors"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/about"}
                    className="my-1 text-[#1e1e1e] border border-transparent   hover:text-[#3B61DD] transition-colors"
                  >
                    About
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/rooms"}
                    className="my-1 text-[#1e1e1e] border border-transparent   hover:text-[#3B61DD] transition-colors"
                  >
                    Rooms
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/gallery"}
                    className="my-1 text-[#1e1e1e] border border-transparent   hover:text-[#3B61DD] transition-colors"
                  >
                    Gallery
                  </NavLink>
                </li>
                {user && (
                  <li className="mb-5 ">
                    <NavLink
                      to={"/my-bookings"}
                      className="my-1 text-[#1e1e1e] border border-transparent   hover:text-[#3B61DD] transition-colors"
                    >
                      My Bookings
                    </NavLink>
                  </li>
                )}
                <li className="mb-5 ">
                  <NavLink
                    to={"/contact"}
                    className="my-1 text-[#1e1e1e] border border-transparent   hover:text-[#3B61DD] transition-colors"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <Link
                    to={"/login"}
                    className="sm:hidden text-center flex px-4  py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] hover:bg-transparent bg-[#3b61dd] transition-colors border-[#3b61dd] border rounded-full justify-center  font-medium hover:text-[#3b61dd] text-[#fff]"
                  >
                    Login
                  </Link>
                </li>
              </ul>
              {/* mobile */}
            </div>
          </div>
          {/* drawer */}
        </div>
      </div>
    </header>
  );
};

export default Header;
