import { useDispatch, useSelector } from "react-redux";
import { OptionsBoxContainer } from "./optionsBoxContainer";
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
} from "../../../slice";
import dayjs, { unix } from "dayjs";
import "dayjs/locale/pl";
import { useEffect, useState } from "react";

export const OptionsBox = () => {
  const dispatch = useDispatch();
  const $order = useSelector(selectTagsBrowserOrder);
  const $sort = useSelector(selectTagsBrowserSort);
  const $page = useSelector(selectTagsBrowserPage);
  const $pageSize = useSelector(selectTagsBrowserPageSize);
  const $min = useSelector(selectTagsBrowserMin);
  const $max = useSelector(selectTagsBrowserMax);
  const $inname = useSelector(selectTagsBrowserInname);
  const $dateFrom = useSelector(selectTagsBrowserDateFrom);
  const $dateTo = useSelector(selectTagsBrowserDateTo);

  const dateFromDayjs = $dateFrom ? dayjs.unix($dateFrom) : null;
  const dateToDayjs = $dateTo ? dayjs.unix($dateTo) : null;

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

  const [cleared, setCleared] = useState(false);

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
    <OptionsBoxContainer
      $order={$order}
      $sort={$sort}
      $page={$page}
      $pageSize={$pageSize}
      $min={$min}
      $max={$max}
      $inname={$inname}
      $dateFrom={$dateFrom}
      $dateTo={$dateTo}
      $dateFromDayjs={dateFromDayjs}
      $dateToDayjs={dateToDayjs}
      $handleChangeDataFrom={handleChangeDataFrom}
      $handleChangeDataTo={handleChangeDataTo}
      $setCleared={setCleared}
    />
  );
};
