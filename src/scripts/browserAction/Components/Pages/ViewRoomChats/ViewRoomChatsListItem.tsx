import React, { Fragment, useCallback } from "react";
import { IMessageAreaContact } from "../../../../../typings/MoodleAPI/IMessageAreaContact";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import { routes } from "../../Routes";
import { useCurrentRoomId } from "../ViewRoom/ViewRoomContext";
import { useHistory } from "react-router";

type IViewRoomChatsListItemProps = { contact: IMessageAreaContact };

const ViewRoomChatsListItem: React.FC<IViewRoomChatsListItemProps> = ({
  contact,
}) => {
  const history = useHistory();
  const id = useCurrentRoomId(false);

  const goToChat = useCallback(
    (contactId: string) => {
      history.push(routes.viewRoomChat({ id, contactId }));
    },
    [id, history]
  );

  return (
    <Fragment>
      <ListItem onClick={() => goToChat(String(contact.userid))} button>
        <ListItemAvatar>
          <Avatar
            alt={`Foto de perfil de ${contact.fullname}.`}
            src={contact.profileimageurlsmall}
          />
        </ListItemAvatar>
        <ListItemText>
          <Typography noWrap>{contact.fullname}</Typography>
          <Typography noWrap variant="body2">
            <span style={{ fontWeight: "bold" }}>
              {contact.sentfromcurrentuser ? "Você: " : ""}
            </span>
            {contact.lastmessage}
          </Typography>
        </ListItemText>
        {!contact.isread && (
          <ListItemSecondaryAction style={{ marginRight: "16px" }}>
            <Badge color="primary" badgeContent={contact.unreadcount} />
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <Divider />
    </Fragment>
  );
};

export default ViewRoomChatsListItem;
