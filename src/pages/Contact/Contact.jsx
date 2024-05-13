import { Helmet } from "react-helmet-async";
import PageHeading from "../../components/PageHeading/PageHeading";
import ContactFeatures from "./ContactFeatures";
import Heading from "../../components/Heading";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Kinsley-Hotel | Contact</title>
      </Helmet>
      <PageHeading
        title={"Get in Touch"}
        des={
          "Select your perfect retreat from our range of meticulously curated rooms. Find comfort, style, and convenience tailored to your preferences."
        }
        btn={"Home > Contact"}
      />
      <div className="w-full bg-[#F2FFFF]  py-[40px] px-2 sm:px-4">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
          <ContactFeatures />
        </div>
      </div>

      <div className="w-full bg-[#ECFAFB]  py-[40px] px-2 sm:px-4">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
          {/* Form */}
          <Heading
            title={"Kinsley is Waiting for You!"}
            des={
              "Meet our dedicated team of professionals, committed to delivering exceptional service. Experience personalized care and expertise from our knowledgeable staff"
            }
            btn={"Contact us"}
          />

          <div className="grid pt-[60px] pb-[100px]">
            <form>
              {/* price and rating */}
              <div className="mb-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="col-span-1">
                    <label
                      htmlFor="name"
                      className="block mb-2 font-medium text-gray-900 text-md"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full p-4 text-gray-900 bg-white border-none rounded-lg my-shadow sm:text-sm focus:ring-primary-600 focus:border-primary-600"
                      placeholder="Enter your name.."
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
                      className="block w-full p-4 text-gray-900 bg-white border-none rounded-lg my-shadow sm:text-sm focus:ring-primary-600 focus:border-primary-600"
                      placeholder="Enter your email.."
                      required
                    />
                  </div>
                </div>
              </div>
              {/* price and rating */}
              {/* price and rating */}

              <div className="mb-3">
                <div className="grid grid-cols-1 gap-3">
                  <div className="col-span-1">
                    <textarea
                      name="message"
                      id="message"
                      className=" h-[150px] bg-[#fff] border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                      placeholder="Enter youe message.."
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
            </form>
          </div>

          {/* End Form */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
