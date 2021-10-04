import { useMemo } from "react";
import { useParams } from "react-router";
import { createContext, useContextSelector } from "use-context-selector";
import { IRoom } from "../../../../../typings/IRoom";
import { RoomsContext } from "../../../Hooks/RoomsContext";

type IViewRoom = {
  room: IRoom | null;
};

export const ViewRoomContext = createContext({} as IViewRoom);

const useCurrentRoomId = () => {
  const params = useParams<{ id: string }>();
  const id = useMemo(() => decodeURIComponent(params.id), [params.id]);
  return id;
};

const useCurrentRoom = () => {
  const id = useCurrentRoomId();
  const rooms = useContextSelector(RoomsContext, ({ rooms }) => rooms);

  const room = useMemo(
    () => rooms.find((room) => room.url === id) || null,
    [rooms, id]
  );

  return room;
};

export const ViewRoomContextProvider: React.FC = ({ children }) => {
  const room = useCurrentRoom();

  return (
    <ViewRoomContext.Provider value={{ room }}>
      {children}
    </ViewRoomContext.Provider>
  );
};
