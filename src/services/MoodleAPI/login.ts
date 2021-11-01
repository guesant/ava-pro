import { AxiosInstance } from "axios";
import { logout } from "./logout";

export const login =
  (http: AxiosInstance) => async (username: string, password: string) => {
    await logout(http)();

    const data = new FormData();
    data.set("username", username);
    data.set("password", password);

    await http({
      data,
      method: "post",
      url: "/login/index.php",
    });
  };
