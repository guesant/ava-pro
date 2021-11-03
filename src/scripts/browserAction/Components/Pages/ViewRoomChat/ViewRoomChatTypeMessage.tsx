import { useParams } from "react-router";
import { FormEvent, useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import classes from "./ViewRoomChatTypeMessage.module.css";
import { useSendMessage } from "./useSendMessage";

export const ViewRoomChatTypeMessage = () => {
  const params = useParams<{ contactId: string }>();
  const contactId = +params.contactId;

  const [messageContent, setMessageContent] = useState("");
  const { sendMessage, isBusy } = useSendMessage();

  const handleSendMessage = useCallback(
    () =>
      sendMessage(contactId, messageContent).then(
        (success) => success && setMessageContent("")
      ),
    [contactId, messageContent]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSendMessage();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.container}>
          <TextField
            fullWidth
            disabled={isBusy}
            variant="standard"
            value={messageContent}
            className={classes.input}
            placeholder="Digite uma mensagem"
            onChange={(e) => setMessageContent(e.target.value)}
          />
          <IconButton type={"submit"} disabled={isBusy}>
            <SendIcon />
          </IconButton>
        </div>
      </form>
    </>
  );
};
