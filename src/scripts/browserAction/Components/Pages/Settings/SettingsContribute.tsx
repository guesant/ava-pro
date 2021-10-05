import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const CONTRIBUTE = {
  AUTHOR_PIX: "42b01653-2b72-44d1-b485-e290a6088a66",
  AUTHOR_PIX_QRCODE:
    "https://github.com/guesant/assets/raw/project-improved-moodle/pix.jpg",
};

const SettingsContribute = () => (
  <>
    <ListSubheader>Contribuir</ListSubheader>
    <ListItem>
      <ListItemText
        secondary="Você pode contribuir com o projeto compartilhando às pessoas que
      possam se beneficiar com essa extensão."
      />
    </ListItem>
    <ListItem>
      <ListItemText secondary="O projeto aceita contribuições no repositório do GitHub. Eu, Gabriel, também aceito doações no Pix." />
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
);

export default SettingsContribute;
