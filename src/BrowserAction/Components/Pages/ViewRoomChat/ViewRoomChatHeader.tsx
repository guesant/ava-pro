import { useContextSelector } from "use-context-selector";
import { ViewRoomChatContext } from "./ViewRoomChatContext";
import Header from "../../Header/Header";
import ViewRoomChatHeaderGoBack from "./ViewRoomChatHeaderGoBack";

const ViewRoomChatHeader = () => {
  const lastMessageArea = useContextSelector(
    ViewRoomChatContext,
    ({ messageAreaQuery: { lastMessageArea } }) => lastMessageArea!
  );
  return (
    <Header
      title={lastMessageArea.otheruserfullname}
      startContent={
        <>
          <ViewRoomChatHeaderGoBack />
        </>
      }
    />
  );
};

export default ViewRoomChatHeader;
