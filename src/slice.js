import { createSlice } from "@reduxjs/toolkit";

const tagsBrowser = createSlice({
  name: "data",
  initialState: {
    loading: false,
    error: null,
    data: null,
    order: "desc",
    sort: "popular",
    page: null,
    pageSize: null,
    min: null,
    max: null,
    inname: null,
    dateFrom: null,
    dateTo: null,
    selectedTag: null,
  },
  reducers: {
    fetchDataRequest: (state, { payload: data }) => {
      state.loading = true;
      state.error = null;
      state.data = data;
    },
    fetchDataSuccess: (state, { payload: data }) => {
      state.loading = false;
      state.data = data;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setOrder: (state, { payload: newOrder }) => {
      state.order = newOrder;
      // console.log("order", state.order);
    },
    setSort: (state, { payload: newSort }) => {
      state.sort = newSort;
      // console.log("sort", state.sort);
    },
    setPage: (state, { payload: newPage }) => {
      state.page = newPage;
      // console.log("page", state.page);
    },
    setPageSize: (state, { payload: newPageSize }) => {
      state.pageSize = newPageSize;
      // console.log("pageSize", state.pageSize);
    },
    setMin: (state, { payload: newMin }) => {
      state.min = newMin;
      // console.log("min", state.min);
    },
    setMax: (state, { payload: newMax }) => {
      state.max = newMax;
      // console.log("max", state.max);
    },
    setInname: (state, { payload: newInname }) => {
      state.inname = newInname;
      // console.log("inname", state.inname);
    },
    setDateFrom: (state, { payload: newDateFrom }) => {
      state.dateFrom = newDateFrom;
      // console.log("dateFrom", state.dateFrom);
    },
    setDateTo: (state, { payload: newDateTo }) => {
      state.dateTo = newDateTo;
      // console.log("dateTo", state.dateTo);
    },
    setSelectedTag: (state, { payload: newTag }) => {
      state.selectedTag = newTag;
    },
  },
});

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  setOrder,
  setSort,
  setPage,
  setPageSize,
  setMin,
  setMax,
  setInname,
  setDateFrom,
  setDateTo,
  setSelectedTag,
} = tagsBrowser.actions;

export const selectTagsBrowserState = (state) => state.tagsBrowser;
export const selectTagsBrowserData = (state) =>
  selectTagsBrowserState(state).data;
export const selectTagsBrowserOrder = (state) =>
  selectTagsBrowserState(state).order;
export const selectTagsBrowserSort = (state) =>
  selectTagsBrowserState(state).sort;
export const selectTagsBrowserPage = (state) =>
  selectTagsBrowserState(state).page;
export const selectTagsBrowserPageSize = (state) =>
  selectTagsBrowserState(state).pageSize;
export const selectTagsBrowserMin = (state) =>
  selectTagsBrowserState(state).min;
export const selectTagsBrowserMax = (state) =>
  selectTagsBrowserState(state).max;
export const selectTagsBrowserInname = (state) =>
  selectTagsBrowserState(state).inname;
export const selectTagsBrowserDateFrom = (state) =>
  selectTagsBrowserState(state).dateFrom;
export const selectTagsBrowserDateTo = (state) =>
  selectTagsBrowserState(state).dateTo;
export const selectTagsBrowserSelectedTag = (state) =>
  selectTagsBrowserState(state).selectedTag;

export default tagsBrowser.reducer;
