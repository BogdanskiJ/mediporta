import Tooltip from "@mui/material/Tooltip";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const OptionsBoxDataPicker = ({
  $title,
  $label,
  $name,
  $value,
  $onChange,
  $onClear,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
      <Tooltip title={$title}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label={$label}
            name={$name}
            inputFormat="dd/MM/yyyy"
            value={$value}
            onChange={$onChange}
            slotProps={{
              textField: {
                helperText: "DD/MM/YYYY",
                size: "small",
              },
              //   field: { clearable: true, onClear: { $onClear } },
            }}
          />
        </DemoContainer>
      </Tooltip>
    </LocalizationProvider>
  );
};
