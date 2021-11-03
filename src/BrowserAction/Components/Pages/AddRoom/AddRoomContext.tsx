import normalizeUrl from "normalize-url";
import { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { createContext } from "use-context-selector";
import StorageRoomsService from "../../../../services/StorageRoomsService";
import URLService from "../../../../services/URLService";
import { routes } from "../../Routes";

export const useAddRoomForm = () => {
  const history = useHistory();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const isValidName = useMemo(() => name.trim().length > 0, [name]);
  const isValidURL = useMemo(() => URLService.isValid(url), [url]);

  const isValid = useMemo(
    () => isValidName && isValidURL,
    [isValidName, isValidURL]
  );

  const saveRoom = useCallback(async () => {
    if (!isValid) return;

    const roomUrl = normalizeUrl(url);
    const room = await StorageRoomsService.add({
      name: name || roomUrl,
      url: roomUrl,
    });

    StorageRoomsService.fetchCourses(room.url);
    history.push(routes.listRooms());
  }, [url, isValid]);

  return {
    url,
    setUrl,
    name,
    setName,
    isValid,
    saveRoom,
  };
};

export const AddRoomContext = createContext(
  {} as ReturnType<typeof useAddRoomForm>
);

export const AddRoomContextProvider: React.FC = ({ children }) => {
  const form = useAddRoomForm();

  return (
    <AddRoomContext.Provider value={form}>{children}</AddRoomContext.Provider>
  );
};
