import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { FC } from "react"
import * as classes from "./MessageBlockTime.module.css"

type IMessageBlockTimeProps = {
  blockTime: string
}

const MessageBlockTime: FC<IMessageBlockTimeProps> = ({ blockTime }) => (
  <Box className={classes.blockTime} sx={{ my: 0.5 }}>
    <Typography sx={{ textAlign: "center" }}>{blockTime}</Typography>
  </Box>
)

export default MessageBlockTime
