import Header from "../../Header/Header";
import ViewRoomGenericHeaderCloseRoom from "./ViewRoomGenericHeaderCloseRoom";
import ViewRoomGenericHeaderOptions, {
  IViewRoomGenericHeaderOptionsProps,
} from "./ViewRoomGenericHeaderOptions";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { ViewRoomContext } from "../ViewRoom/ViewRoomContext";
import { ViewRoomGenericHeaderOptionsContextProvider } from "./ViewRoomGenericHeaderOptionsContext";

export type IViewRoomGenericHeaderProps = {
  title?: string;

  startContentStart?: React.ReactNode;
  startContentEnd?: React.ReactNode;

  endContentStart?: React.ReactNode;
  endContentEnd?: React.ReactNode;

  optionsMenuProps?: IViewRoomGenericHeaderOptionsProps;
};

const ViewRoomGenericHeader: React.FC<IViewRoomGenericHeaderProps> = ({
  title,

  startContentStart,
  startContentEnd,

  endContentEnd,
  endContentStart,

  optionsMenuProps,
}) => {
  const roomName = useContextSelector(
    ViewRoomContext,
    ({ room }) => room?.name
  );

  return (
    <Header
      title={title ?? roomName}
      startContent={
        <>
          {startContentStart}
          <ViewRoomGenericHeaderCloseRoom />
          {startContentEnd}
        </>
      }
      endContent={
        <div>
          {endContentStart}
          <ViewRoomGenericHeaderOptionsContextProvider>
            <ViewRoomGenericHeaderOptions {...optionsMenuProps} />
          </ViewRoomGenericHeaderOptionsContextProvider>
          {endContentEnd}
        </div>
      }
    />
  );
};

export default ViewRoomGenericHeader;
