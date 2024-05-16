import axios from "axios";

//featured
export const featuredRooms = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/featured`);
  const result = res?.data;
  return result;
};
//all rooms
export const allRooms = async (path) => {
  let apiUrl = `${import.meta.env.VITE_SITE_URL}/all-rooms`;

  if (path === "ascending") {
    apiUrl = `${import.meta.env.VITE_SITE_URL}/all-rooms/asc`;
  } else if (path === "descending") {
    apiUrl = `${import.meta.env.VITE_SITE_URL}/all-rooms/des`;
  }

  const res = await axios.get(`${apiUrl}`);
  const result = res?.data;
  // console.log(result);
  return result;
};

//all rooms ascending order
export const allRoomsAsc = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/all-rooms/asc`);
  const result = res?.data;
  return result;
};

//all rooms descending order
export const allRoomsDes = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/all-rooms/des`);
  const result = res?.data;
  return result;
};

//single room
export const singleRoomDetails = async (id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_SITE_URL}/room-details/${id}`,
    { withCredentials: true }
  );
  const result = res?.data;
  return result;
};
//book a room
export const bookARoom = async ({ roomID, bookData }) => {
  const res = await axios.post(
    `${import.meta.env.VITE_SITE_URL}/roomBooking/${roomID}`,
    bookData,
    {
      withCredentials: true,
    }
  );
  const result = res?.data;
  return result;
};

// list of your rooms
export const myBookedRoom = async (email) => {
  const res = await axios.get(
    `${import.meta.env.VITE_SITE_URL}/myRoomBooked/${email}`,
    {
      withCredentials: true,
    }
  );
  const result = res?.data;
  return result;
};

//update your room
export const updateARoom = async ({ roomID, bookData }) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_SITE_URL}/updateRoomBooking/${roomID}`,
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
  const res = await axios.post(
    `${import.meta.env.VITE_SITE_URL}/deleteRoomBooking/${roomID}`,
    {
      withCredentials: true,
    }
  );
  const result = res?.data;
  return result;
};

//generate token
export const generateToken = async (user) => {
  const res = await axios.post(`${import.meta.env.VITE_SITE_URL}/jwt`, user, {
    withCredentials: true,
  });
  const result = res?.data;
  return result;
};

//generate token
export const removeToken = async (user) => {
  const res = await axios.post(
    `${import.meta.env.VITE_SITE_URL}/logout`,
    user,
    {
      withCredentials: true,
    }
  );
  const result = res?.data;
  return result;
};
