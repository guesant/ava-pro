import Header from "../../Header/Header";
import Loading from "../../Loading";
import ViewRoomChatHeaderGoBack from "./ViewRoomChatHeaderGoBack";

const ViewRoomChatFallbackLoading = () => {
  return (
    <div className="page">
      <Header
        title="Carregando..."
        startContent={
          <>
            <ViewRoomChatHeaderGoBack />
          </>
        }
      />
      <div className="pageContent">
        <Loading />
      </div>
    </div>
  );
};

export default ViewRoomChatFallbackLoading;
