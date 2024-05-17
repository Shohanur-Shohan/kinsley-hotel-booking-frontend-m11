import { Helmet } from "react-helmet-async";
import { useState } from "react";
import GridData from "./GridData";
import PageHeading from "../../components/PageHeading/PageHeading";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import { useContext } from "react";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import Loader from "../../components/Loaders/Loader";
import { useQuery } from "@tanstack/react-query";
import { myBookedRoom } from "../../utils/api";
import Table from "./Table";

const MyBookings = () => {
  const [tableGrid, settableGrid] = useState(false);
  const { loading, user } = useContext(AuthContext);

  const { data, isLoading, isPending } = useQuery({
    queryKey: ["myBookedRooms", user?.email],
    queryFn: () => myBookedRoom(user?.email),
  });

  // console.log(data);

  if (loading) {
    return <Loader />;
  }
  // if ((isLoading, isPending))
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
        {isLoading || isPending ? (
          <Loader />
        ) : (
          !tableGrid && (
            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <Table data={data} />
                </div>
              </div>
            </div>
          )
        )}
        {isLoading || isPending ? (
          <Loader />
        ) : (
          tableGrid && <GridData data={data} />
        )}

        {/* table */}
        {/* grid */}
        {/* grid */}
      </section>

      <Testimonials />
    </main>
  );
};

export default MyBookings;
