import { Helmet } from "react-helmet-async";
import PageHeading from "../../components/PageHeading/PageHeading";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Newsletter from "../../components/Newsletter";
import Featured from "../../components/Home/Featured/Featured";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import Loader from "../../components/Loaders/Loader";
import { useContext, useState } from "react";
import RoomCard from "../../components/Home/AllRooms/RoomCard";
import { useQuery } from "@tanstack/react-query";
import { allRooms } from "../../utils/api";
import { useForm } from "react-hook-form";

const Rooms = () => {
  const { loading } = useContext(AuthContext);
  const [order, setOrder] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending, isLoading, data, refetch } = useQuery({
    queryKey: ["roomRoomPage", order],
    queryFn: () => allRooms(order),
  });
  const handleFilter = async (data) => {
    const filter = data?.filter_name;
    setOrder(filter);
    refetch();
  };

  if (loading) {
    return <Loader />;
  }

  if (isPending || isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <Helmet>
        <title>Kinsley-Hotel | Rooms</title>
      </Helmet>
      <PageHeading
        title={"Choose your Room"}
        des={
          "Select your perfect retreat from our range of meticulously curated rooms. Find comfort, style, and convenience tailored to your preferences."
        }
        btn={"Home > Rooms"}
      />
      <div className="w-full bg-[#F2FFFF] py-[60px] md:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
          <div className="mr-auto w-fit">
            <form
              onChange={handleSubmit(handleFilter)}
              className="max-w-sm mx-auto"
            >
              <select
                id="countries"
                {...register("filter_name")}
                className="bg-white border w-[200px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2.5"
              >
                <option>Filter By</option>
                <option value="ascending">Price Asc</option>
                <option value="descending">Price Dsc</option>
              </select>
            </form>
          </div>
          {/* //cards */}
          <div className="grid items-center justify-center w-full grid-cols-1 gap-3 mt-5 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <Loader />
            ) : (
              data?.map((room) => {
                return <RoomCard key={room?._id} roomdata={room} />;
              })
            )}
            {/*          */}
          </div>
          {/* //cards */}
        </div>

        <Featured />
        {/* reviews */}
        <Testimonials />
        {/* newsletter */}
        <Newsletter />
      </div>
    </main>
  );
};

export default Rooms;
