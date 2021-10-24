import { useContextSelector } from "use-context-selector";
import ViewRoomDashboardHeader from "../ViewRoomDashboard/ViewRoomDashboardHeader";
import { RoomsContext } from "../../../Hooks/RoomsContext";

export const ViewRoomFallbackLoading = () => (
  <div className="page">
    <ViewRoomDashboardHeader title="Sala" />
    <div className="pageSpacing">Carregando..</div>
  </div>
);

export const ViewRoomFallbackNotFound = () => (
  <div className="page">
    <ViewRoomDashboardHeader title="Sala" />
    <div className="pageSpacing">Ambiente não encontrado.</div>
  </div>
);

const ViewRoomFallback = () => {
  const isLoading = useContextSelector(
    RoomsContext,
    ({ isLoading: isFetchingRooms }) => isFetchingRooms
  );

  if (isLoading) {
    return <ViewRoomFallbackLoading />;
  }

  return <ViewRoomFallbackNotFound />;
};

export default ViewRoomFallback;
