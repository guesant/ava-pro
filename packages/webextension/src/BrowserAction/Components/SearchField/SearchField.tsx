import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import InputBase from "@mui/material/InputBase"
import { InputBaseProps } from "@mui/material/InputBase/InputBase"
import { FC, useCallback, useRef } from "react"
import { handleSelectAllOnFocus } from "../../Hooks/handleSelectAllOnFocus"

type ISearchFieldProps = {
  value: string
  setValue: (value: string) => void
} & InputBaseProps

const SearchField: FC<ISearchFieldProps> = ({ value, setValue, ...props }) => {
  const inputRef = useRef<HTMLInputElement>()

  const clearValue = useCallback(() => {
    setValue("")
    inputRef.current?.focus()
  }, [setValue, inputRef])

  return (
    <>
      <InputBase
        autoFocus
        fullWidth
        value={value}
        margin={"none"}
        inputRef={inputRef}
        onFocus={handleSelectAllOnFocus}
        sx={{ ml: 1, flex: 1, color: "inherit" }}
        onChange={(e) => setValue(e.target.value)}
        inputProps={{ style: { color: "inherit" } }}
        endAdornment={
          <InputAdornment sx={{ color: "inherit" }} position="end">
            {value.length > 0 && (
              <IconButton color={"inherit"} onClick={clearValue}>
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        }
        {...props}
      />
    </>
  )
}

export default SearchField
