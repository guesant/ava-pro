import { AxiosInstance } from "axios";
import { IMoodleTokens } from "../../typings/MoodleAPI/IMoodleTokens";

const extractSessKey = (data: string) => {
  const [, sesskey = null] = data.match(/"sesskey":"([^"]+)"/) || [];
  return sesskey;
};

const extractUserId = (data: string) => {
  const [, userid = null] = data.match(/data-userid="([\d]+)"/) || [];
  return userid ? +userid : null;
};

export const fetchTokens =
  (http: AxiosInstance) => async (): Promise<IMoodleTokens> => {
    try {
      const { data } = await http({ method: "get", url: "/my/" });

      const sesskey = extractSessKey(data);
      const userid = extractUserId(data);

      return { sesskey, userid };
    } catch (e) {} // eslint-disable-line no-empty
    return { sesskey: null, userid: null };
  };
