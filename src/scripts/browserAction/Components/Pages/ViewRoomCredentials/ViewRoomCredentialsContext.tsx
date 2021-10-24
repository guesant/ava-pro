import { createContext, useContextSelector } from "use-context-selector";
import { useCallback, useEffect, useState, useMemo } from "react";
import StorageRoomsService from "../../../../../services/StorageRoomsService";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";

type IViewRoomCredentialsContext = {
  hasChanges: boolean;
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;

  saveCredentials: () => void;
};

export const ViewRoomCredentialsContext = createContext(
  {} as IViewRoomCredentialsContext
);

const useCurrentRoomCredentials = () => {
  const url = useContextSelector(ViewRoomContext, ({ room }) => room!.url);

  const username = useContextSelector(
    ViewRoomContext,
    ({ room }) => room!.credentials.username
  );
  const password = useContextSelector(
    ViewRoomContext,
    ({ room }) => room!.credentials.password
  );

  return { url, username, password };
};

export const ViewRoomCredentialsContextProvider: React.FC = ({ children }) => {
  const {
    url: roomUrl,
    username: roomUsername,
    password: roomPassword,
  } = useCurrentRoomCredentials();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => setUsername(roomUsername), [roomUsername]);
  useEffect(() => setPassword(roomPassword), [roomPassword]);

  const saveCredentials = useCallback(() => {
    if (roomUrl) {
      return StorageRoomsService.update(roomUrl, (room) => {
        room.credentials.username = username;
        room.credentials.password = password;
      });
    }
  }, [roomUrl, username, password]);

  const hasChanges = useMemo(
    () => username !== roomUsername || password !== roomPassword,
    [username, password, roomUsername, roomPassword]
  );

  return (
    <>
      <ViewRoomCredentialsContext.Provider
        value={{
          hasChanges,
          username,
          setUsername,
          password,
          setPassword,
          saveCredentials,
        }}
      >
        {children}
      </ViewRoomCredentialsContext.Provider>
    </>
  );
};
