import React, { useEffect } from "react";
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
  selectTagsBrowserShowMenu,
  selectTagsBrowserSort,
} from "../../slice";
import { fetchDataTags } from "../../getData";
import { RequestOptionsContainer } from "./requestOptionsContainer";

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
  const showMenu = useSelector(selectTagsBrowserShowMenu);

  useEffect(() => {
    dispatch(
      fetchDataTags({
        page,
        pageSize,
        dateFrom,
        dateTo,
        order,
        min,
        max,
        sort,
        inname,
      })
    );
  }, []);

  return <RequestOptionsContainer $showMenu={showMenu} />;
};
