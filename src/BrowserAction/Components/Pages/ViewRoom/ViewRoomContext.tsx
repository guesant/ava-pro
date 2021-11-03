import React, { useMemo } from "react";
import { useParams } from "react-router";
import { createContext, useContextSelector } from "use-context-selector";
import { IRoom } from "../../../../typings/IRoom";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import ViewRoomFallback from "../ViewRoomFallback/ViewRoomFallback";

type IViewRoom = {
  room: IRoom | null;
};

export const ViewRoomContext = createContext({} as IViewRoom);

export const useCurrentRoomId = (decode = true) => {
  const params = useParams<{ id: string }>();
  return useMemo(
    () => (decode ? decodeURIComponent(params.id) : params.id),
    [decode, params.id]
  );
};

export const useCurrentRoom = () => {
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
      {room ? children : <ViewRoomFallback />}
    </ViewRoomContext.Provider>
  );
};
