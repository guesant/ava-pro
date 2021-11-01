import { MessagePosition } from "./MessagePosition";

export type IMessageAreaMessage = {
  id: number;
  useridfrom: number;
  useridto: number;
  text: string;
  displayblocktime: true;
  blocktime: string;
  position: MessagePosition;
  timesent: string;
  timecreated: number;
  isread: boolean;
};
