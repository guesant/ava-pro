import { MessagePosition } from "../../../../typings/MoodleAPI/MessagePosition";
import classes from "./ViewRoomChatMessage.module.css";
import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { IMessageAreaMessage } from "../../../../typings/MoodleAPI/IMessageAreaMessage";

const getClassNameForMessagePosition = (position: MessagePosition) => {
  switch (position) {
    case MessagePosition.LEFT:
      return classes.byOther;
    case MessagePosition.RIGHT:
      return classes.byMe;
  }
};

type IViewRoomChatMessageProps = { message: IMessageAreaMessage };

const ViewRoomChatMessage: React.FC<IViewRoomChatMessageProps> = ({
  message,
}) => (
  <Fragment>
    {message.displayblocktime && (
      <Typography
        component={"p"}
        style={{ textAlign: "center", gridColumn: "1/-1" }}
      >
        {message.blocktime}
      </Typography>
    )}
    <div
      className={clsx(
        classes.message,
        getClassNameForMessagePosition(message.position)
      )}
    >
      <div dangerouslySetInnerHTML={{ __html: message.text }} />
      <Typography
        component={"p"}
        variant={"caption"}
        style={{ textAlign: "right" }}
      >
        {message.timesent}
      </Typography>
    </div>
  </Fragment>
);

export default ViewRoomChatMessage;
