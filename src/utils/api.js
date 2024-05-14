import axios from "axios";

export const allRoomsAsc = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/all-rooms/asc`);
  const result = await res?.data;
  return result;
};

export const allRoomsDes = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SITE_URL}/all-rooms/des`);
  const result = await res?.data;
  return result;
};
