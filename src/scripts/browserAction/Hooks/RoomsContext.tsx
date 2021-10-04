import { createContext } from "use-context-selector";
import StorageService from "../../../services/StorageService";
import { IRoom } from "../../../typings/IRoom";
import { useStorage } from "./useStorage";

type IRoomsContext = {
  rooms: IRoom[];
  isLoading: boolean;
};

export const RoomsContext = createContext({} as IRoomsContext);

export const RoomsContextProvider: React.FC<{ defaultRooms?: IRoom[] }> = ({
  children,
  defaultRooms = [],
}) => {
  const { data: rooms, isLoading } = useStorage(
    ["storage.rooms"],
    () => StorageService.getItem("rooms", defaultRooms),
    defaultRooms
  );

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        isLoading,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};
