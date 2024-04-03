import { OptionsBoxSelect } from "./select";
import { useDispatch } from "react-redux";
import {
  setInname,
  setMax,
  setMin,
  setOrder,
  setPage,
  setPageSize,
  setSort,
} from "../../../slice";
import { OptionsBoxTextField } from "./textField";
import { OptionsBoxDataPicker } from "./dataPicker";

import { StyledOptionsBox } from "./styled";

export const OptionsBoxContainer = ({
  $order,
  $sort,
  $page,
  $pageSize,
  $min,
  $max,
  $inname,
  $dateFromDayjs,
  $dateToDayjs,
  $handleChangeDataFrom,
  $handleChangeDataTo,
  $setCleared,
}) => {
  const dispatch = useDispatch();

  return (
    <StyledOptionsBox>
      <OptionsBoxSelect
        $title={"Delete"}
        $name={"Order"}
        $value={$order}
        $onChange={(event) => dispatch(setOrder(event.target.value))}
        $valueArray={[
          { atr: "asc", name: "Ascending" },
          { atr: "desc", name: "Descending" },
        ]}
      />
      <OptionsBoxSelect
        $title={"Delete"}
        $name={"Sort"}
        $value={$sort}
        $onChange={(event) => dispatch(setSort(event.target.value))}
        $valueArray={[
          { atr: "popular", name: "Popular" },
          { atr: "activity", name: "Activity" },
          { atr: "name", name: "Name" },
        ]}
      />
      <OptionsBoxTextField
        $title={"Delete"}
        $id={"outlined-textField-page"}
        $label={"Page"}
        $type={"number"}
        $onChange={(event) => dispatch(setPage(event.target.value))}
        $value={$page}
        $onClick={() => dispatch(setPage(""))}
      />
      <OptionsBoxTextField
        $title={"Delete"}
        $id={"outlined-textField-pageSize"}
        $label={"PageSize"}
        $type={"number"}
        $onChange={(event) => dispatch(setPageSize(event.target.value))}
        $value={$pageSize}
        $onClick={() => dispatch(setPageSize(""))}
      />
      <OptionsBoxTextField
        $title={"Delete"}
        $id={"outlined-textField-min"}
        $label={"Min"}
        $type={"number"}
        $onChange={(event) => dispatch(setMin(event.target.value))}
        $value={$min}
        $onClick={() => dispatch(setMin(""))}
      />
      <OptionsBoxTextField
        $title={"Delete"}
        $id={"outlined-textField-max"}
        $label={"Max"}
        $type={"number"}
        $onChange={(event) => dispatch(setMax(event.target.value))}
        $value={$max}
        $onClick={() => dispatch(setMax(""))}
      />
      <OptionsBoxTextField
        $title={"Delete"}
        $id={"outlined-textField-inname"}
        $label={"Inname"}
        $type={""}
        $onChange={(event) => dispatch(setInname(event.target.value))}
        $value={$inname}
        $onClick={() => dispatch(setInname(""))}
      />
      <OptionsBoxDataPicker
        $title={"Delete"}
        $label={"From Date"}
        $name={"startDate"}
        $value={$dateFromDayjs}
        $onChange={$handleChangeDataFrom}
        $onClear={$setCleared()}
      />
      <OptionsBoxDataPicker
        $title={"Delete"}
        $label={"To Date"}
        $name={"endDate"}
        $value={$dateToDayjs}
        $onChange={$handleChangeDataTo}
        $onClear={$setCleared()}
      />
    </StyledOptionsBox>
  );
};
