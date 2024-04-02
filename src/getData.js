import axios from "axios";
import { urlPrefix, urlSufix } from "./links";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from "./slice";

export const fetchDataTags = ({
  page,
  pageSize,
  dateFrom,
  dateTo,
  order,
  min,
  max,
  sort,
  inname,
}) => {
  const urlPage = page ? `page=${page}` : null;
  const urlPageSize = pageSize ? `pagesize=${pageSize}` : null;
  const urlDateFrom = dateFrom ? `fromdate=${dateFrom}` : null;
  const urlDateTo = dateTo ? `todate=${dateTo}` : null;
  const urlOrder = order ? `order=${order}` : "desc";
  const urlMin = min ? `min=${min}` : null;
  const urlMax = max ? `max=${max}` : null;
  const urlSort = sort ? `sort=${sort}` : "popular";
  const urlInname = inname ? `inname=${inname}` : null;

  const queryParams = [
    urlPage,
    urlPageSize,
    urlDateFrom,
    urlDateTo,
    urlOrder,
    urlMin,
    urlMax,
    urlSort,
    urlInname,
  ]
    .filter((param) => param)
    .join("&");

  const link = `${urlPrefix}?${queryParams}&${urlSufix}`;

  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest());
      const response = await axios.get(link);
      const data = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchDataTagQuestions = ({ tag }) => {
  const link = `${urlPrefix}/${tag}/faq?${urlSufix}`;

  console.log(link, "link w quest");

  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest());
      const response = await axios.get(link);
      const data = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchDataTagRelated = ({ tag }) => {
  const link = `${urlPrefix}/${tag}/related?${urlSufix}`;

  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest());
      const response = await axios.get(link);
      const data = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchDataTagSynonyms = ({ tag }) => {
  const link = `${urlPrefix}/${tag}/synonyms?order=desc&sort=applied&${urlSufix}`;

  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest());
      const response = await axios.get(link);
      const data = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
