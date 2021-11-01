import axios from "axios";

export const getRoomHTTP = (roomUrl: string) =>
  axios.create({ baseURL: roomUrl, withCredentials: true });
