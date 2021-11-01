import { addRuntimeMessageListener } from "../../services/RuntimeMessage/addRuntimeMessageListener";
import { handleNewRoomDetected } from "./handleNewRoomDetected";
import { RuntimeMessageType } from "../../services/RuntimeMessage/RuntimeMessageType";

export const setupEventListeners = () => {
  addRuntimeMessageListener(
    RuntimeMessageType.NEW_ROOM_DETECTED,
    handleNewRoomDetected
  );
};
