import { AxiosInstance } from "axios";
import { fetchTokens } from "./fetchTokens";

export const fetchSessKey = (http: AxiosInstance) => async () => {
  const { sesskey } = await fetchTokens(http)();
  return sesskey;
};
