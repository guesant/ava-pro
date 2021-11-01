import { AxiosInstance } from "axios";
import { checkLogin } from "./checkLogin";
import { login } from "./login";

export const smartLogin =
  (http: AxiosInstance) => async (username: string, password: string) => {
    let isLoggedIn = await checkLogin(http)();

    if (!isLoggedIn && username && password) {
      await login(http)(username, password);
      isLoggedIn = await checkLogin(http)();
    }

    return isLoggedIn;
  };
