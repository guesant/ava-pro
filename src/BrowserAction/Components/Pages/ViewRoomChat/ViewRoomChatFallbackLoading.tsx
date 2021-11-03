import Header from "../../Header/Header";
import ViewRoomCoursesSearchHeaderGoBack from "../ViewRoomCoursesSearch/ViewRoomCoursesSearchHeaderGoBack";
import Loading from "../../Loading";

const ViewRoomChatFallbackLoading = () => {
  return (
    <div className="page">
      <Header
        title="Carregando..."
        startContent={
          <>
            <ViewRoomCoursesSearchHeaderGoBack />
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
