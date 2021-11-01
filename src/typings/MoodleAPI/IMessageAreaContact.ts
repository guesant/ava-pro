export type IMessageAreaContact = {
  userid: number;
  fullname: string;
  profileimageurl: string;
  profileimageurlsmall: string;
  ismessaging: boolean;
  sentfromcurrentuser: boolean;
  lastmessage: string | null;
  messageid: number | null;
  showonlinestatus: boolean;
  isonline: boolean | null;
  isread: boolean;
  isblocked: boolean;
  unreadcount: number | null;
};
