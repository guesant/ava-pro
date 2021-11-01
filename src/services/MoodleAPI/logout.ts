import { AxiosInstance } from "axios";
import { MayBePromise } from "../../typings/MayBePromise";
import { fetchSessKey } from "./fetchSessKey";

export const logout =
  (http: AxiosInstance) =>
  async (
    incomingSessKey: MayBePromise<string | null> = fetchSessKey(http)()
  ) => {
    const sessKey = await incomingSessKey;
    await http(`/login/logout.php?sesskey=${sessKey}`);
  };
