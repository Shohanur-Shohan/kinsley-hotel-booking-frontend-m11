import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import PropTypes from "prop-types";
import { Bounce, toast } from "react-toastify";
import { fixDate } from "../../utils/GetDate";
import { postReview } from "../../utils/api";

const ReviewForm = ({ roomdata }) => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const roomId = roomdata?._id;
  const username = email.substring(0, email.indexOf("@"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = new Date();

  const SubmitReview = async (data) => {
    const condition = roomdata?.customers.find(
      (customerEmail) => customerEmail == email
    );
    if (condition) {
      //   console.log(email, data);
      const userName = data?.userName;
      const email = data?.email;
      const message = data?.message;
      const rating = data?.rating;
      const review_date = fixDate(date);

      const userReview = {
        user_email: email,
        review: {
          userName: userName,
          user_email: email,
          message: message,
          rating: rating,
          review_date: review_date,
        },
      };
      //   console.log(userReview);

      const result = await postReview({ roomId, userReview });
      if (result) {
        toast.success("Review Success", {
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
      }
    } else {
      toast.warn("Something went Wrong!", {
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
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(SubmitReview)}>
        <div className="grid gap-y-4">
          {/* price and rating */}
          <div className="mb-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="col-span-1">
                <label
                  htmlFor="userName"
                  className="block mb-2 font-medium text-gray-900 text-md"
                >
                  Username
                </label>
                {user ? (
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    {...register("userName", { value: username })}
                    className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your username.."
                    disabled
                    required
                  />
                ) : (
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your username.."
                    disabled
                    required
                  />
                )}
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-900 text-md"
                >
                  Email
                </label>
                {user ? (
                  <input
                    type="text"
                    name="email"
                    id="email"
                    {...register("email", { value: email })}
                    className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your email.."
                    disabled
                    required
                  />
                ) : (
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your email.."
                    disabled
                    required
                  />
                )}
              </div>
            </div>
          </div>
          {/* price and rating */}
          <div className="mb-3">
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <label
                  htmlFor="rating"
                  className="block mb-2 font-medium text-gray-900 text-md"
                >
                  Room Rating
                </label>

                <select
                  name="rating"
                  id="rating"
                  {...register("rating")}
                  className="bg-white border-none my-shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Rating"
                  required
                >
                  <option disabled>Rating</option>
                  <option value={5}>5 Star</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Stars</option>
                </select>
              </div>
            </div>
          </div>
          {/* End Form Group */}
          <div className="mb-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="col-span-1">
                <textarea
                  name="message"
                  id="message"
                  {...register("message")}
                  className=" h-[150px] bg-[#fff] border border-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter youe review.."
                  required
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
        </div>
      </form>
    </>
  );
};
ReviewForm.propTypes = {
  roomdata: PropTypes.object,
};
export default ReviewForm;
