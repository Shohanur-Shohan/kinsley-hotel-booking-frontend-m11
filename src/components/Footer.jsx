import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="relative z-0 w-full border-t border-secondary/30">
        <div
          className="absolute z-10 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("/assets/hero2.png")',
          }}
        >
          <div className="absolute z-20 w-full h-full bg-overlay2"></div>
        </div>

        {/* Grid */}
        <div className="w-full pt-[60px] z-40 relative">
          <div className="grid z-10 grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5 max-w-[1536px] mx-auto px-4 lg:px-7.5 xl:px-10 pb-4 pt-8">
            <div className="justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-start lg:col-span-2">
              <div className="">
                <a
                  className="z-20 flex-none text-xl font-semibold text-white"
                  aria-label="Brand"
                >
                  <img
                    className="max-w-[120px] md:max-w-[150px] mx-auto sm:mx-0"
                    src="/assets/logo-white.png"
                    alt="logo"
                  />
                </a>
                <ul className="mt-8">
                  <li className="my-2 text-white">
                    <span>33 New Montgomery St. CA, USA</span>
                  </li>
                  <li className="my-2 text-white">
                    <span>(+91)012-345-6789</span>
                  </li>

                  <li className="my-2 text-white">
                    <a href="mailto:artistic@exampledemo.com">
                      artistic@exampledemo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Col */}
            <div className="flex justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-end">
              <div>
                <h4 className="text-2xl font-semibold text-white">
                  Quick Links
                </h4>
                <div className="grid mt-3 space-y-3">
                  <p>
                    <Link
                      to={"/"}
                      className="z-10 inline-flex text-white gap-x-2"
                    >
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link
                      to={"/about"}
                      className="inline-flex text-white gap-x-2"
                    >
                      About
                    </Link>
                  </p>
                  <p>
                    <Link
                      to={"/rooms"}
                      className="inline-flex text-white gap-x-2"
                    >
                      Rooms
                    </Link>
                  </p>
                  <p>
                    <Link
                      to={"/my-bookings"}
                      className="inline-flex text-white gap-x-2"
                    >
                      My Bookings
                    </Link>
                  </p>
                  <p>
                    <Link
                      to={"/contact"}
                      className="inline-flex text-white gap-x-2"
                    >
                      Contact
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="flex justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-end">
              <div>
                <h4 className="text-2xl font-semibold text-white">Services</h4>
                <div className="grid mt-3 space-y-3">
                  <p>
                    <a className="inline-flex text-white gap-x-2" href="#">
                      Terms Conditions
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-white gap-x-2" href="#">
                      Policy for Sellers
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-white gap-x-2" href="#">
                      Shipping & Refund
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className="flex justify-center col-span-1 text-center sm:text-left sm:justify-start md:justify-end">
              <div>
                <h4 className="text-2xl font-semibold text-white">
                  Information
                </h4>
                <div className="grid mt-3 space-y-3">
                  <p>
                    <a className="inline-flex text-white gap-x-2" href="#">
                      Delivery Information
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-white gap-x-2" href="#">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a className="inline-flex text-white gap-x-2" href="#">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Col */}
            {/* End Col */}
          </div>

          <div className="absolute top-0 left-0 z-0 w-full h-full"></div>

          {/* bottom */}
          <div className="relative flex justify-center w-full py-5 mt-[60px]">
            <p className="z-40 text-sm text-center text-white sm:m-0">
              © 2024 Shohan. All rights reserved.
            </p>
            <div className="absolute top-0 left-0 z-20 w-full h-full bg-overlay3"></div>
          </div>
          {/* </bottom> */}
        </div>

        {/* End Grid */}
      </footer>
    </>
  );
};

export default Footer;
