import { SendInstantMessages } from "@ava-pro/crawlers/lib/Scrappers/AjaxServices/CoreMessage/SendInstantMessages"
import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import SendIcon from "@mui/icons-material/Send"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import { RoomChatContext } from "../../Components/RoomChatContext"
import { RoomContext } from "../../Components/RoomContext"

type IFormData = {
  text: string
}

const ShowRoomChatContentTypeMessage = () => {
  const refetch = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { refetch } }) => refetch
  )

  const contactId = useContextSelector(
    RoomChatContext,
    ({ contactId }) => contactId
  )

  const crawlerFetch = useContextSelector(
    RoomContext,
    ({ crawlerFetch }) => crawlerFetch
  )

  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid, isDirty, isSubmitting }
  } = useForm({ mode: "onChange" })

  const sendMessage = useCallback(
    async (text: string) => {
      if (text.trim().length > 0) {
        const createdMessages = await SendInstantMessages(crawlerFetch)({
          text,
          touserid: contactId
        })

        if (createdMessages.length > 0) {
          reset()
          await refetch()
        }
      }
    },
    [crawlerFetch, contactId, refetch]
  )

  const onSubmitMessage = ({ text }: IFormData) => sendMessage(text)

  const canSubmit = isDirty && isValid && !isSubmitting

  return (
    <form onSubmit={handleSubmit(onSubmitMessage)}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1 }}>
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            multiline
            autoFocus
            maxRows={3}
            variant={"standard"}
            disabled={isSubmitting}
            inputProps={{ ...register("text", { required: true }) }}
            placeholder={getMessage("page_showRoom_chat_input_typeMessage")}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                if (!e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(onSubmitMessage)(e)
                }
              }
            }}
          />
        </Box>
        <Box>
          <IconButton
            type={"submit"}
            disabled={!canSubmit}
            title={getMessage("page_showRoom_chat_submit")}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </form>
  )
}

export default ShowRoomChatContentTypeMessage
