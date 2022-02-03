import { getMessage } from "@ava-pro/shared/lib/features/i18n"
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

const ShowRoomConversationContentTypeMessage = () => {
  const refetch = useContextSelector(
    RoomChatContext,
    ({ chatQuery: { refetch } }) => refetch
  )

  const conversationId = useContextSelector(
    RoomChatContext,
    ({ conversationId }) => conversationId
  )

  const moodleClient = useContextSelector(
    RoomContext,
    ({ moodleClient }) => moodleClient
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
        const createdMessages = await moodleClient.sendMessagesToConversation({
          messages: [{ text }],
          conversationid: conversationId
        })

        if (createdMessages.length > 0) {
          reset()
          await refetch()
        }
      }
    },
    [conversationId, refetch, moodleClient]
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
            placeholder={getMessage(
              "page_showRoom_conversation_input_typeMessage"
            )}
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
            title={getMessage("page_showRoom_conversation_submit")}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </form>
  )
}

export default ShowRoomConversationContentTypeMessage
