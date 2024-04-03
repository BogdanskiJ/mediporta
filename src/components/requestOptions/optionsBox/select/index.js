import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
export const OptionsBoxSelect = ({
  $title,
  $name,
  $value,
  $onChange,
  $valueArray,
}) => {
  return (
    <Tooltip title={$title}>
      <Box sx={{ minWidth: 120, maxWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="order-select-label">{$name}</InputLabel>
          <Select
            labelId="order-select-label"
            id="order-select"
            value={$value}
            size="small"
            label="Order"
            onChange={$onChange}
          >
            {$valueArray.map((val) => (
              <MenuItem key={val.name} value={val.atr}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Tooltip>
  );
};
