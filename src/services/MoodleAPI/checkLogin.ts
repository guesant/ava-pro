import { AxiosInstance } from "axios";

const verifyIsLoggedIn = (data: string) => {
  const [body = ""] = data.match(/<body[^>]*>/g) || [];
  return !body.includes("notloggedin");
};

export const checkLogin = (http: AxiosInstance) => async () => {
  const { data } = await http({ method: "get", url: "/login/index.php" });
  return verifyIsLoggedIn(data);
};
