import { IDetectedRoom } from "../../typings/ISettings";
import { RuntimeMessageType } from "./RuntimeMessageType";
import { GenericRuntimeMessage } from "./GenericRuntimeMessage";

export type RuntimeMessageNewRoomDetected = GenericRuntimeMessage<
  IDetectedRoom,
  RuntimeMessageType.NEW_ROOM_DETECTED
>;

export type RuntimeMessage =
  | RuntimeMessageNewRoomDetected
  | GenericRuntimeMessage;
