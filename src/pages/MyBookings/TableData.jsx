import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";

const TableData = () => {
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleBook = (date) => {
    console.log(date, "clicked");
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center w-8 h-8">
              <img src="/assets/room-2.jpg" alt="img" />
            </div>
            <div>
              <h2 className="font-normal text-gray-800 ">
                Tech requirements.pdf
              </h2>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        Jan 4, 2022
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        Jan 4, 2022
      </td>
      <td>
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

          <h2 className="text-sm font-normal text-emerald-500">Success</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center justify-center gap-x-6">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>

          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>

          <dialog id="my_modal_3" className="w-11/12 max-w-4xl modal-box">
            <form method="dialog">
              <button className="absolute bg-[#4470FE] btn btn-md btn-circle right-2 top-2 text-white">
                ✕
              </button>
            </form>
            <div className="bg-[#FEFEFE] my-shadow px-[15px] sm:px-[25px] py-5 rounded-[8px] my-[20px]">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateState([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={addDays(new Date(), -30)}
                maxDate={addDays(new Date(), 60)}
                ranges={dateState}
              />
              <div
                onClick={() => handleBook(dateState)}
                className="bg-[#3B61DD] px-[20px] cursor-pointer w-full text-center sm:px-[30px] py-3 sm:py-3 hover:bg-[#4470FE] rounded-full"
              >
                <p className="text-[15px] text-white tracking-[2px]">
                  Update Date
                </p>
              </div>
            </div>
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
