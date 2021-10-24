import { useContextSelector } from "use-context-selector";
import { ViewRoomCredentialsContextProvider } from "./ViewRoomCredentialsContext";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";
import ViewRoomFallback from "../ViewRoomFallback/ViewRoomFallback";
import { ViewRoomCredentialsHeader } from "./ViewRoomCredentialsHeader";
import ViewRoomCredentialsForm from "./ViewRoomCredentialsForm";

const ViewRoomCredentials = () => {
  const room = useContextSelector(ViewRoomContext, ({ room }) => room);

  if (!room) {
    return <ViewRoomFallback />;
  }

  return (
    <div>
      <ViewRoomCredentialsContextProvider>
        <ViewRoomCredentialsHeader />
        <div className="pageSpacing">
          <ViewRoomCredentialsForm />
        </div>
      </ViewRoomCredentialsContextProvider>
    </div>
  );
};

export default ViewRoomCredentials;
