import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import { InputBaseProps } from "@mui/material/InputBase/InputBase";
import React, { useCallback, useRef } from "react";

type ISearchFieldProps = {
  value: string;
  setValue: (value: string) => void;
} & InputBaseProps;

const SearchField: React.FC<ISearchFieldProps> = ({ value, setValue }) => {
  const inputRef = useRef<HTMLInputElement>();

  const clearValue = useCallback(() => {
    setValue("");
    inputRef.current?.focus();
  }, [setValue, inputRef]);

  return (
    <>
      <InputBase
        autoFocus
        fullWidth
        value={value}
        inputRef={inputRef}
        sx={{ ml: 1, flex: 1 }}
        onFocus={(e) => e.target.select()}
        onChange={(e) => setValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            {value.length > 0 && (
              <IconButton onClick={clearValue}>
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        }
      />
    </>
  );
};

export default SearchField;
