import { IMessageAreaMessage } from "./IMessageAreaMessage";

export type IMessageArea = {
  currentuserid: number;
  isblocked: boolean;
  iscurrentuser: boolean;
  isonline: boolean;
  messages: IMessageAreaMessage[];
  otheruserfullname: string;
  otheruserid: number;
  showonlinestatus: boolean;
};
