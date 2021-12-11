import { getMessage } from "@ava-pro/shared/lib/i18n/getMessage"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"

const CONTRIBUTE = {
  AUTHOR_PIX: "42b01653-2b72-44d1-b485-e290a6088a66",
  AUTHOR_PIX_QRCODE:
    "https://github.com/guesant/assets/raw/project-improved-moodle/pix.jpg"
}

const SettingsContribute = () => (
  <>
    <ListSubheader>{getMessage("page_settings_contribute")}</ListSubheader>
    <ListItem>
      <ListItemText
        secondary={getMessage("page_settings_contribute_message_help_share")}
      />
    </ListItem>
    <ListItem>
      <ListItemText
        secondary={getMessage(
          "page_settings_contribute_message_help_donate_byPix"
        )}
      />
    </ListItem>
    <ListItem>
      <img
        title={CONTRIBUTE.AUTHOR_PIX}
        src={CONTRIBUTE.AUTHOR_PIX_QRCODE}
        style={{ width: "60%", margin: "0 auto" }}
        alt={`Chave Pix: ${CONTRIBUTE.AUTHOR_PIX}`}
      />
    </ListItem>
  </>
)

export default SettingsContribute
