import { useContextSelector } from "use-context-selector";
import React, { useMemo } from "react";
import ListRoomsListFallbackNoRooms from "./ListRoomsListFallbackNoRooms";
import { RoomsContext } from "../../../Hooks/RoomsContext";
import { useDetectedRoomsWithoutResponse } from "./useDetectedRoomsWithoutResponse";

const useShowFallbackNoRooms = () => {
  const detectedRoomsNotRegisteredWithoutResponse =
    useDetectedRoomsWithoutResponse();

  const registeredRooms = useContextSelector(
    RoomsContext,
    ({ rooms }) => rooms
  );

  const showFallbackNoRooms = useMemo(
    () =>
      registeredRooms.length === 0 &&
      detectedRoomsNotRegisteredWithoutResponse.length === 0,
    [registeredRooms.length, detectedRoomsNotRegisteredWithoutResponse.length]
  );

  return showFallbackNoRooms;
};

const ListRoomsListFallback: React.FC = ({ children }) => {
  const showFallbackNoRooms = useShowFallbackNoRooms();

  if (showFallbackNoRooms) {
    return <ListRoomsListFallbackNoRooms />;
  }

  return <>{children}</>;
};

export default ListRoomsListFallback;
