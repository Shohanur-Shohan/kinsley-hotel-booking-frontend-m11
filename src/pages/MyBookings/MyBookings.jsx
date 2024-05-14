import { Helmet } from "react-helmet-async";
import TableData from "./TableData";
import { useState } from "react";
import GridData from "./GridData";
import PageHeading from "../../components/PageHeading/PageHeading";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import { useContext } from "react";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import Loader from "../../components/Loaders/Loader";

const MyBookings = () => {
  const [tableGrid, settableGrid] = useState(false);

  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | My Bookings</title>
      </Helmet>
      <PageHeading title={"My Bookings"} btn={"Home > My Bookings"} />
      <section className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 h-fit mb-[60px] md:mb-[100px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-lg font-medium text-gray-800 "></h2>
          <div className="flex items-center mt-4 gap-x-3">
            <button
              onClick={() => settableGrid(true)}
              className={`px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto hover:bg-gray-100`}
            >
              <img
                src="/assets/dot.svg"
                className="w-[25px] h-[25px]"
                alt="icon"
              />
            </button>
            <button
              onClick={() => settableGrid(false)}
              className={`px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto hover:bg-gray-100`}
            >
              <img
                src="/assets/lines.svg"
                className="w-[25px] h-[25px]"
                alt="icon"
              />
            </button>
          </div>
        </div>
        {/* table */}
        {!tableGrid && (
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50 ">
                      <tr>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          Room Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          Booked Date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          End Date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                        ></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      <TableData />
                      <TableData />
                      <TableData />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* table */}
        {/* grid */}
        {tableGrid && <GridData />}
        {/* grid */}
      </section>

      <Testimonials />
    </main>
  );
};

export default MyBookings;
