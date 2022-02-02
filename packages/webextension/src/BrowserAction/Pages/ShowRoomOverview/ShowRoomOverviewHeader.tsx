import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { useContextSelector } from "use-context-selector"
import PageHeader from "../../Components/PageHeader/PageHeader"
import { AppRouteLink, appRoutes } from "../../Hooks/useAppRoutes"
import { ShowRoomContext } from "../ShowRoom/ShowRoomContext"
import { ShowRoomOverviewHeaderContext } from "./ShowRoomOverviewHeaderContext"
import ShowRoomOverviewHeaderHome from "./ShowRoomOverviewHeaderHome"
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
          <AppRouteLink route={appRoutes.rooms}>
            <IconButton color={"inherit"}>
              <ArrowBackIcon />
            </IconButton>
          </AppRouteLink>
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
          <ShowRoomOverviewHeaderHome />
          <ShowRoomOverviewHeaderOptions />
        </>
      }
    />
  )
}

export default ShowRoomOverviewHeader
