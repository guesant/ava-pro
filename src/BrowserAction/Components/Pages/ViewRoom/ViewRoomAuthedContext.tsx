import { createContext, useContextSelector } from "use-context-selector";
import { AxiosInstance } from "axios";
import { ViewRoomContext } from "./ViewRoomContext";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import StorageRoomsService from "../../../../services/StorageRoomsService";
import { getRoomHTTP } from "../../../../services/MoodleAPI/getRoomHTTP";
import { checkLogin } from "../../../../services/MoodleAPI/checkLogin";
import { smartLogin } from "../../../../services/MoodleAPI/smartLogin";

type IViewRoomAuthedContext = {
  isLoggedIn: boolean;
  http: AxiosInstance | null;
  authedHttp: AxiosInstance | null;
};

export const ViewRoomAuthedContext = createContext(
  {} as IViewRoomAuthedContext
);

export const ViewRoomAuthedContextProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const roomUrl = useContextSelector(ViewRoomContext, ({ room }) => room?.url);

  const username = useContextSelector(
    ViewRoomContext,
    ({ room }) => room?.credentials?.username
  );

  const password = useContextSelector(
    ViewRoomContext,
    ({ room }) => room?.credentials?.password
  );

  const isAutoLoginEnabled = useContextSelector(
    ViewRoomContext,
    ({ room }) => room?.credentials?.isAutoLoginEnabled
  );

  const http = useMemo(
    () => (roomUrl ? getRoomHTTP(roomUrl) : null),
    [roomUrl]
  );

  const authedHttp = useMemo(
    () => (isLoggedIn ? http : null),
    [http, isLoggedIn]
  );

  const autoLogin = useCallback(async () => {
    if (roomUrl && http) {
      let isLoggedIn = await checkLogin(http)();
      if (!isLoggedIn && isAutoLoginEnabled && username && password) {
        isLoggedIn = await smartLogin(http)(username, password);
        if (!isLoggedIn) {
          await StorageRoomsService.update(roomUrl, (room) => {
            room.credentials.isAutoLoginEnabled = false;
          });
        }
      }
      setIsLoggedIn(isLoggedIn);
    }
  }, [isAutoLoginEnabled, username, password, http, roomUrl]);

  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return (
    <ViewRoomAuthedContext.Provider value={{ isLoggedIn, authedHttp, http }}>
      {children}
    </ViewRoomAuthedContext.Provider>
  );
};
