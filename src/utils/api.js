import { axiosSecure } from "../hooks/useAxiosSecure";
//featured
export const featuredRooms = async () => {
  const res = await axiosSecure.get(`/featured`);
  const result = res?.data;
  return result;
};
//all rooms
export const allRooms = async (path) => {
  let apiUrl = `/all-rooms`;

  if (path === "ascending") {
    apiUrl = `/all-rooms/asc`;
  } else if (path === "descending") {
    apiUrl = `/all-rooms/des`;
  }

  const res = await axiosSecure.get(`${apiUrl}`);
  const result = res?.data;
  // console.log(result);
  return result;
};

//all rooms ascending order
export const allRoomsAsc = async () => {
  const res = await axiosSecure.get(`/all-rooms/asc`);
  const result = res?.data;
  return result;
};

//all rooms descending order
export const allRoomsDes = async () => {
  const res = await axiosSecure.get(`/all-rooms/des`);
  const result = res?.data;
  return result;
};

//single room
export const singleRoomDetails = async (id) => {
  const res = await axiosSecure.get(`/room-details/${id}`);
  const result = res?.data;
  return result;
};
//book a room
export const bookARoom = async ({ roomID, bookData }) => {
  const res = await axiosSecure.post(`/roomBooking/${roomID}`, bookData);
  const result = res?.data;
  return result;
};

// list of your rooms
export const myBookedRoom = async (email) => {
  const res = await axiosSecure.get(`/myRoomBooked/${email}`);
  const result = res?.data;
  return result;
};

//update your room
export const updateARoom = async ({ roomID, bookData }) => {
  const res = await axiosSecure.patch(
    `/updateRoomBooking/${roomID}`,
    bookData,
    {
      withCredentials: true,
    }
  );
  const result = res?.data;
  return result;
};

//delete your room
export const deleteARoom = async (roomID) => {
  const res = await axiosSecure.post(`/deleteRoomBooking/${roomID}`);
  const result = res?.data;
  return result;
};

//generate token
export const generateToken = async (user) => {
  const res = await axiosSecure.post(`/jwt`, user);
  const result = res?.data;
  return result;
};

//generate token
export const removeToken = async (user) => {
  const res = await axiosSecure.post(`/logout`, user);
  const result = res?.data;
  return result;
};

//post review
export const postReview = async ({ roomId, userReview }) => {
  const res = await axiosSecure.post(`/giveReview/${roomId}`, userReview);
  const result = res?.data;
  return result;
};
