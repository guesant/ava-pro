import { AxiosInstance, AxiosRequestConfig } from "axios";
import { MayBePromise } from "../../typings/MayBePromise";
import { fetchSessKey } from "./fetchSessKey";

export const ajaxService =
  (http: AxiosInstance) =>
  async <T extends any, Args = any>(
    methodName: string,
    args: Args,
    requestOptions: AxiosRequestConfig = {},
    incomingSessKey: MayBePromise<string | null> = fetchSessKey(http)()
  ) => {
    const sessKey = await incomingSessKey;

    if (!sessKey) {
      throw new Error("Invalid Session Key.");
    }

    const requestData = [
      {
        args,
        methodname: methodName,
        index: 0,
      },
    ];

    const params = new URLSearchParams();
    params.set("sesskey", sessKey);
    params.set("info", methodName);

    const response = await http({
      data: requestData,
      url: "/lib/ajax/service.php?" + params.toString(),
      ...requestOptions,
    });

    const responseData = response.data[0];

    if (responseData.error) {
      throw responseData.exception;
    }

    return responseData.data as T;
  };
