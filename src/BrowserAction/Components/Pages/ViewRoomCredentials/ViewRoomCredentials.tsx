import { ViewRoomCredentialsContextProvider } from "./ViewRoomCredentialsContext";
import ViewRoomCredentialsHeader from "./ViewRoomCredentialsHeader";
import ViewRoomCredentialsForm from "./ViewRoomCredentialsForm";

const ViewRoomCredentials = () => {
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
