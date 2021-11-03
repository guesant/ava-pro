import Divider from "@mui/material/Divider";
import clsx from "clsx";
import classes from "./ViewRoomChat.module.css";
import { ViewRoomChatContextProvider } from "./ViewRoomChatContext";
import { ViewRoomChatFallback } from "./ViewRoomChatFallback";
import ViewRoomChatHeader from "./ViewRoomChatHeader";
import ViewRoomChatMessages from "./ViewRoomChatMessages";
import { ViewRoomChatTypeMessage } from "./ViewRoomChatTypeMessage";

const ViewRoomChat = () => (
  <ViewRoomChatContextProvider>
    <ViewRoomChatFallback>
      <div className="page">
        <ViewRoomChatHeader />
        <div className={clsx("pageContent", classes.page)}>
          <ViewRoomChatMessages />
          <Divider />
          <ViewRoomChatTypeMessage />
        </div>
      </div>
    </ViewRoomChatFallback>
  </ViewRoomChatContextProvider>
);

export default ViewRoomChat;
