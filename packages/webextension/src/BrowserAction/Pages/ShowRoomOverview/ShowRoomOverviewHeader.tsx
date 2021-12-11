import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { Link } from "react-router-dom"
import { useContextSelector } from "use-context-selector"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { ShowRoomContext } from "../ShowRoom/ShowRoomContext"
import { ShowRoomOverviewHeaderContext } from "./ShowRoomOverviewHeaderContext"
import ShowRoomOverviewHeaderOptions from "./ShowRoomOverviewHeaderOptions"

const ShowRoomOverviewHeader = () => {
  const name = useContextSelector(ShowRoomContext, ({ room }) => room!.name)

  const setAfterTitleRef = useContextSelector(
    ShowRoomOverviewHeaderContext,
    ({ setAfterTitleRef }) => setAfterTitleRef
  )

  return (
    <PageHeader
      title={name}
      beforeTitle={
        <>
          <Link to={"/rooms"}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </>
      }
      afterTitle={
        <>
          <Box
            ref={(ref: any) => {
              setAfterTitleRef(ref)
            }}
            sx={{ display: "flex", alignItems: "center", gap: 0.25 }}
          />
          <ShowRoomOverviewHeaderOptions />
        </>
      }
    />
  )
}

export default ShowRoomOverviewHeader
