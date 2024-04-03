import { IconButton, TextField } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import ClearIcon from "@mui/icons-material/Clear";

export const OptionsBoxTextField = ({
  $title,
  $id,
  $label,
  $type,
  $onChange,
  $value,
  $onClick,
}) => {
  return (
    <Tooltip title={$title}>
      <TextField
        id={$id}
        label={$label}
        variant="outlined"
        type={$type}
        size="small"
        onChange={$onChange}
        value={$value ? $value : ""}
        InputProps={{
          endAdornment:
            $value && $value !== null ? (
              <IconButton size="small" onClick={$onClick}>
                <ClearIcon />
              </IconButton>
            ) : undefined,
        }}
      />
    </Tooltip>
  );
};
