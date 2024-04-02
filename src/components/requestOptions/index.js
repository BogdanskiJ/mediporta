import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { unix } from "dayjs";
import "dayjs/locale/pl";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTagsBrowserDateFrom,
  selectTagsBrowserDateTo,
  selectTagsBrowserInname,
  selectTagsBrowserMax,
  selectTagsBrowserMin,
  selectTagsBrowserOrder,
  selectTagsBrowserPage,
  selectTagsBrowserPageSize,
  selectTagsBrowserSort,
  setDateFrom,
  setDateTo,
  setInname,
  setMax,
  setMin,
  setOrder,
  setPage,
  setPageSize,
  setSort,
} from "../../slice";
import { StyledRequestOptionsBox } from "./styled";

export const RequestOptions = () => {
  const dispatch = useDispatch();

  const order = useSelector(selectTagsBrowserOrder);
  const sort = useSelector(selectTagsBrowserSort);
  const page = useSelector(selectTagsBrowserPage);
  const pageSize = useSelector(selectTagsBrowserPageSize);
  const min = useSelector(selectTagsBrowserMin);
  const max = useSelector(selectTagsBrowserMax);
  const inname = useSelector(selectTagsBrowserInname);
  const dateFrom = useSelector(selectTagsBrowserDateFrom);
  const dateTo = useSelector(selectTagsBrowserDateTo);

  const dateFromDayjs = dateFrom ? dayjs.unix(dateFrom) : null;
  const dateToDayjs = dateTo ? dayjs.unix(dateTo) : null;

  const [cleared, setCleared] = useState(false);

  const handleChangeDataFrom = (newValue) => {
    if (newValue && newValue.isValid()) {
      const unixTimestamp = newValue.unix();
      dispatch(setDateFrom(unixTimestamp));
    } else {
      dispatch(setDateFrom(null));
    }
  };

  const handleChangeDataTo = (newValue) => {
    if (newValue) {
      const unixTimestamp = newValue.unix();
      dispatch(setDateTo(unixTimestamp));
    } else {
      dispatch(setDateTo(null));
    }
  };

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <StyledRequestOptionsBox>
      <Tooltip title="Delete">
        <Box sx={{ minWidth: 120, maxWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="order-select-label">Order</InputLabel>
            <Select
              labelId="order-select-label"
              id="order-select"
              value={order}
              size="small"
              label="Order"
              onChange={(event) => dispatch(setOrder(event.target.value))}
            >
              <MenuItem value={"asc"}>Ascending</MenuItem>
              <MenuItem value={"desc"}>Descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Tooltip>

      <Tooltip title="Delete">
        <Box sx={{ minWidth: 120, maxWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="sort-select-label">Sort</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sort}
              label="Sort"
              size="small"
              onChange={(event) => dispatch(setSort(event.target.value))}
            >
              <MenuItem value={"popular"}>Popular</MenuItem>
              <MenuItem value={"activity"}>Activity</MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Tooltip>

      <Tooltip title="Delete">
        <TextField
          id="outlined-textField-page"
          label="Page"
          variant="outlined"
          type="number"
          size="small"
          onChange={(event) => dispatch(setPage(event.target.value))}
        />
      </Tooltip>

      <Tooltip title="Delete">
        <TextField
          id="outlined-textField-pageSize"
          label="PageSize"
          variant="outlined"
          type="number"
          size="small"
          onChange={(event) => dispatch(setPageSize(event.target.value))}
        />
      </Tooltip>

      <Tooltip title="Delete">
        <TextField
          id="outlined-textField-min"
          label="Min"
          variant="outlined"
          type="number"
          size="small"
          onChange={(event) => dispatch(setMin(event.target.value))}
        />
      </Tooltip>

      <Tooltip title="Delete">
        <TextField
          id="outlined-textField-max"
          label="Max"
          variant="outlined"
          type="number"
          size="small"
          onChange={(event) => dispatch(setMax(event.target.value))}
        />
      </Tooltip>
      <Tooltip title="Delete">
        <TextField
          id="outlined-textField-inname"
          label="Inname"
          variant="outlined"
          size="small"
          onChange={(event) => dispatch(setInname(event.target.value))}
        />
      </Tooltip>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
        <Tooltip title="Delete">
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="From Date"
              name="startDate"
              inputFormat="dd/MM/yyyy"
              value={dateFromDayjs}
              onChange={handleChangeDataFrom}
              slotProps={{
                textField: {
                  helperText: "DD/MM/YYYY",
                },
                field: { clearable: true, onClear: () => setCleared(true) },
              }}
            />
          </DemoContainer>
        </Tooltip>
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
        <Tooltip title="Delete">
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="To Date"
              name="endDate"
              inputFormat="DD/MM/YYYY"
              value={dateToDayjs}
              onChange={handleChangeDataTo}
              slotProps={{
                textField: {
                  helperText: "DD/MM/YYYY",
                },
                field: { clearable: true, onClear: () => setCleared(true) },
              }}
            />
          </DemoContainer>
        </Tooltip>
      </LocalizationProvider>
    </StyledRequestOptionsBox>
  );
};
