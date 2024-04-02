export const createUrlLink = ({
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
  const urlPrefix = "https://api.stackexchange.com/2.3/tags?";
  const urlSufix = "&site=stackoverflow";

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

  return `${urlPrefix}${queryParams}${urlSufix}`;
};
