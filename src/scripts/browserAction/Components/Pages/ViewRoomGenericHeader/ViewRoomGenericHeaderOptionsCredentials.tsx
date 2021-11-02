import { useCurrentRoomId } from "../ViewRoom/ViewRoomContext";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";
import MenuItem from "@mui/material/MenuItem";

const ViewRoomGenericHeaderOptionsCredentials = () => {
  const id = useCurrentRoomId(false);

  return (
    <Link to={routes.viewRoomCredentials({ id })}>
      <MenuItem dense>Credenciais</MenuItem>
    </Link>
  );
};

export default ViewRoomGenericHeaderOptionsCredentials;
