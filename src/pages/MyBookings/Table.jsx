import TableData from "./TableData";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  if (data?.length === 0) {
    return <p>You haven{"'"}t booked a room yet!</p>;
  }
  return (
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
          {data?.map((table) => {
            return <TableData key={table?._id} table={table} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  data: PropTypes.array,
};
export default Table;
