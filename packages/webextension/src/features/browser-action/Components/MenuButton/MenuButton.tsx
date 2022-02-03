import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import { FC, ReactNode, useCallback, useState } from "react"

type IMenuButtonProps = {
  icon?: ReactNode
  menuContent?: ReactNode
}

const MenuButton: FC<IMenuButtonProps> = ({ icon, menuContent }) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleClose = useCallback(() => setAnchorEl(null), [])

  const handleOpenClick = useCallback(
    (e: any) => setAnchorEl(e.currentTarget),
    []
  )

  const isOpen = anchorEl !== null

  return (
    <>
      <IconButton onClick={handleOpenClick} color="inherit">
        {icon}
      </IconButton>
      <Menu open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
        {menuContent}
      </Menu>
    </>
  )
}

export default MenuButton
