/* eslint-disable react/prop-types */
import ViewRoomChatsSearchHeader from "./ViewRoomChatsSearchHeader";
import ViewRoomNeedsAuth from "../ViewRoom/ViewRoomNeedsAuth";
import { ViewRoomChatsContextProvider } from "./ViewRoomChatsSearchContext";
import ViewRoomChatsSearchResults from "./ViewRoomChatsSearchResults";

const ViewRoomChatsSearch = () => (
  <div className="page">
    <ViewRoomChatsContextProvider>
      <ViewRoomChatsSearchHeader />
      <div className="pageContent">
        <ViewRoomNeedsAuth>
          <ViewRoomChatsSearchResults />
        </ViewRoomNeedsAuth>
      </div>
    </ViewRoomChatsContextProvider>
  </div>
);

export default ViewRoomChatsSearch;
