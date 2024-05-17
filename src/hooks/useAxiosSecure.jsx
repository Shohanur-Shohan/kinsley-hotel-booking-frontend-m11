import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseAuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "https://kinsley-hotel-booking-backend-m11.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  //axios interceptor

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log("interceptor", error);
      if (error.response.status === 401 || error.response.status === 403) {
        // console.log("logout the user");
        logOut();
        navigate("/login");
      }
    }
  );

  //axios interceptor

  return axiosSecure;
};

export default useAxiosSecure;
