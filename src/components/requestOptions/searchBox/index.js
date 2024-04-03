import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { useCallback } from "react";
import { fetchDataTags } from "../../../getData";
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
  setSelectedTag,
  setShowMenu,
} from "../../../slice";
import { SearchBoxContainer } from "./searchBoxContainer";

export const SearchBox = () => {
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

  const debouncedFetchDataTags = useCallback(
    debounce((params) => {
      dispatch(fetchDataTags(params));
    }, 1000),
    []
  );

  const $handleClick = () => {
    debouncedFetchDataTags({
      page,
      pageSize,
      dateFrom,
      dateTo,
      order,
      min,
      max,
      sort,
      inname,
    });
    dispatch(setShowMenu());
    dispatch(setSelectedTag(null));
  };

  return <SearchBoxContainer $handleClick={$handleClick} />;
};
