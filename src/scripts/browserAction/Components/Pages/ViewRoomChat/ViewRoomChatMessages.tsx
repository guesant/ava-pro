import { useContextSelector } from "use-context-selector";
import { ViewRoomChatContext } from "./ViewRoomChatContext";
import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from "./ViewRoomChatMessages.module.css";
import ViewRoomChatMessage from "./ViewRoomChatMessage";
import { nanoid } from "nanoid";
import Loading from "../../Loading";

const ViewRoomChatMessagesAutoScroll: React.FC<
  { id: string } & React.HTMLAttributes<HTMLDivElement>
> = ({ id, ...props }) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = messagesContainerRef.current;
    if (div) {
      div.scrollTo(0, div.scrollHeight);
    }
  }, [messagesContainerRef]);

  return (
    <div
      id={id}
      ref={messagesContainerRef}
      className={classes.autoScroll}
      {...props}
    />
  );
};

const ViewRoomChatMessagesInfiniteScroll: React.FC = ({ children }) => {
  const [id] = useState(() => nanoid());

  const infiniteQuery = useContextSelector(
    ViewRoomChatContext,
    ({ messageAreaQuery: { infiniteQuery } }) => infiniteQuery
  );

  const dataLength = useContextSelector(
    ViewRoomChatContext,
    ({ messages }) => messages.length
  );

  const { hasNextPage, fetchNextPage } = infiniteQuery;

  return (
    <ViewRoomChatMessagesAutoScroll id={id}>
      <InfiniteScroll
        inverse
        scrollableTarget={id}
        hasMore={hasNextPage!}
        dataLength={dataLength}
        next={() => fetchNextPage()}
        className={classes.messages}
        loader={
          <div className={classes.infiniteScrollLoading}>
            <Loading />
          </div>
        }
      >
        {children}
      </InfiniteScroll>
    </ViewRoomChatMessagesAutoScroll>
  );
};

const ViewRoomChatMessages = () => {
  const messages = useContextSelector(
    ViewRoomChatContext,
    ({ messages }) => messages
  );
  return (
    <ViewRoomChatMessagesInfiniteScroll>
      {messages.map((message) => (
        <ViewRoomChatMessage key={message.id} message={message} />
      ))}
    </ViewRoomChatMessagesInfiniteScroll>
  );
};

export default ViewRoomChatMessages;
