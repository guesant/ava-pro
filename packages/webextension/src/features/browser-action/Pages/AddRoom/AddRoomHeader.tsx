import { getMessage } from "@ava-pro/shared/lib/features/i18n"
import ArrowBack from "@mui/icons-material/ArrowBack"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

import { useFormContext } from "react-hook-form"
import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

const AddRoomHeader = () => {
  const {
    formState: { isValid, isDirty }
  } = useFormContext()

  const canSubmit = isDirty && isValid

  return (
    <PageHeader
      title={getMessage("page_addRoom")}
      beforeTitle={
        <>
          <Link to={-1 as any}>
            <IconButton color={"inherit"}>
              <ArrowBack />
            </IconButton>
          </Link>
        </>
      }
      afterTitle={
        <>
          <Button
            type={"submit"}
            color={"inherit"}
            variant={"outlined"}
            disabled={!canSubmit}
          >
            {getMessage("page_addRoom_form_submit")}
          </Button>
        </>
      }
    />
  )
}

export default AddRoomHeader
