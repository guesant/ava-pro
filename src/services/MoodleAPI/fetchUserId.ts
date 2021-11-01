import { AxiosInstance } from "axios";
import { fetchTokens } from "./fetchTokens";

export const fetchUserId = (http: AxiosInstance) => async () => {
  const { userid } = await fetchTokens(http)();
  return userid;
};
