import axios from "axios";

//all rooms ascending order
export const allRoomsAsc = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/all-rooms/asc`);
  const result = await res?.data;
  return result;
};

//all rooms descending order
export const allRoomsDes = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/all-rooms/des`);
  const result = await res?.data;
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
