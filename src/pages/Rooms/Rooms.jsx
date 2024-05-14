import { Helmet } from "react-helmet-async";
import PageHeading from "../../components/PageHeading/PageHeading";
import RoomCard from "../../components/Home/AllRooms/RoomCard";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Newsletter from "../../components/Newsletter";
import Featured from "../../components/Home/Featured/Featured";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import Loader from "../../components/Loaders/Loader";
import { useContext } from "react";

const Rooms = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
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
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-white border w-[200px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2.5"
              >
                <option defaultChecked>Filter By</option>
                <option value="US">Price</option>
              </select>
            </form>
          </div>
          {/* //cards */}
          <div className="grid items-center justify-center w-full grid-cols-1 gap-3 mt-5 md:grid-cols-2 lg:grid-cols-3">
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
                review: 5,
              }}
            />
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
                review: 5,
              }}
            />
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
                review: 5,
              }}
            />
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
                review: 5,
              }}
            />
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
                review: 5,
              }}
            />
            <RoomCard
              data={{
                title: "Deluxe room",
                image: "/assets/room-1.jpg",
                des: "Image for cattle earth. May one Which life divide sea. Optio veniam quibusdam fugit aspernatur ratione rerum necessitatibus ipsa eligendi? Laudantium beatae aut earum ab doloribus tempore veritatis repellat natus illo, veniam quibusdam fugit aspernatur cumque harum quos esse libero nesciunt, molestiae saepe, possimus a suscipit.",
                price: "49",
                limit: "4",
                size: "100 sft",
                id: 1,
                review: 5,
              }}
            />
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
