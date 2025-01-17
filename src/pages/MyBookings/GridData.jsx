import GridCard from "./GridCard";
import PropTypes from "prop-types";

const GridData = ({ data, refetch }) => {
  if (data?.length === 0) {
    return <p>You haven{"'"}t booked a room yet!</p>;
  }
  return (
    <div className="grid items-center justify-center w-full grid-cols-1 gap-3 mt-5 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((table) => {
        return <GridCard key={table?._id} data={table} refetch={refetch} />;
      })}
    </div>
  );
};
GridData.propTypes = {
  data: PropTypes.array,
  refetch: PropTypes.func,
};
export default GridData;
