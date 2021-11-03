import { useContextSelector } from "use-context-selector";
import { ViewRoomChatContext } from "./ViewRoomChatContext";
import Header from "../../Header/Header";
import ViewRoomCoursesSearchHeaderGoBack from "../ViewRoomCoursesSearch/ViewRoomCoursesSearchHeaderGoBack";

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
          <ViewRoomCoursesSearchHeaderGoBack />
        </>
      }
    />
  );
};

export default ViewRoomChatHeader;
