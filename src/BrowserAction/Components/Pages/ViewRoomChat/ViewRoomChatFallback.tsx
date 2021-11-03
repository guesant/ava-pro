import React from "react";
import { useContextSelector } from "use-context-selector";
import { ViewRoomChatContext } from "./ViewRoomChatContext";
import ViewRoomChatFallbackLoading from "./ViewRoomChatFallbackLoading";
import ViewRoomChatFallbackError from "./ViewRoomChatFallbackError";

export const ViewRoomChatFallback: React.FC = ({ children }) => {
  const isLoading = useContextSelector(
    ViewRoomChatContext,
    ({
      messageAreaQuery: {
        lastMessageArea,
        infiniteQuery: { isLoading, data },
      },
    }) => Boolean(!lastMessageArea || !data || isLoading)
  );

  const isError = useContextSelector(
    ViewRoomChatContext,
    ({
      messageAreaQuery: {
        infiniteQuery: { isError },
      },
    }) => isError
  );

  if (isLoading) {
    return <ViewRoomChatFallbackLoading />;
  }

  if (isError) {
    return <ViewRoomChatFallbackError />;
  }

  return <>{children}</>;
};
