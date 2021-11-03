import { createContext, useContextSelector } from "use-context-selector";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import StorageRoomsService from "../../../../services/StorageRoomsService";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";

type IViewRoomCredentialsContext = {
  hasChanges: boolean;

  username: string;
  password: string;
  isAutoLoginEnabled: boolean;

  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsAutoLoginEnabled: React.Dispatch<React.SetStateAction<boolean>>;

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

  const isAutoLoginEnabled = useContextSelector(
    ViewRoomContext,
    ({ room }) => room!.credentials.isAutoLoginEnabled
  );

  return { url, username, password, isAutoLoginEnabled };
};

export const ViewRoomCredentialsContextProvider: React.FC = ({ children }) => {
  const {
    url: roomUrl,
    username: roomUsername,
    password: roomPassword,
    isAutoLoginEnabled: roomIsAutoLoginEnabled,
  } = useCurrentRoomCredentials();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAutoLoginEnabled, setIsAutoLoginEnabled] = useState(false);

  useEffect(() => setUsername(roomUsername), [roomUsername]);
  useEffect(() => setPassword(roomPassword), [roomPassword]);
  useEffect(
    () => setIsAutoLoginEnabled(Boolean(roomIsAutoLoginEnabled)),
    [roomIsAutoLoginEnabled]
  );

  const saveCredentials = useCallback(() => {
    if (roomUrl) {
      return StorageRoomsService.update(roomUrl, (room) => {
        room.credentials.username = username;
        room.credentials.password = password;
        room.credentials.isAutoLoginEnabled = isAutoLoginEnabled;
      });
    }
  }, [roomUrl, username, password, isAutoLoginEnabled]);

  const hasChanges = useMemo(
    () =>
      username !== roomUsername ||
      password !== roomPassword ||
      isAutoLoginEnabled !== roomIsAutoLoginEnabled,
    [
      username,
      password,
      roomUsername,
      roomPassword,
      isAutoLoginEnabled,
      roomIsAutoLoginEnabled,
    ]
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

          isAutoLoginEnabled,
          setIsAutoLoginEnabled,
        }}
      >
        {children}
      </ViewRoomCredentialsContext.Provider>
    </>
  );
};
