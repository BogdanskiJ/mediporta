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
    dataFaq: null,
    dataRel: null,
    dataSyn: null,
    dataType: "dataFaq",
    showMenu: true,
  },
  reducers: {
    fetchDataRequest: (state, { payload: data }) => {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    fetchDataQuestionRequest: (state, { payload: data }) => {
      state.loading = true;
      state.error = null;
      state.dataFaq = null;
      state.dataRel = null;
      state.dataSyn = null;
    },
    fetchDataSuccess: (state, { payload: data }) => {
      state.loading = false;
      state.data = data;
    },
    fetchDataFaqSuccess: (state, { payload: data }) => {
      state.loading = false;
      state.dataFaq = data;
      state.dataType = "dataFaq";
    },
    fetchDataRelSuccess: (state, { payload: data }) => {
      state.loading = false;
      state.dataRel = data;
      state.dataType = "dataRel";
    },
    fetchDataSynSuccess: (state, { payload: data }) => {
      state.loading = false;
      state.dataSyn = data;
      state.dataType = "dataSyn";
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setOrder: (state, { payload: newOrder }) => {
      state.order = newOrder;
    },
    setSort: (state, { payload: newSort }) => {
      state.sort = newSort;
    },
    setPage: (state, { payload: newPage }) => {
      state.page = newPage;
    },
    setPageSize: (state, { payload: newPageSize }) => {
      state.pageSize = newPageSize;
    },
    setMin: (state, { payload: newMin }) => {
      state.min = newMin;
    },
    setMax: (state, { payload: newMax }) => {
      state.max = newMax;
    },
    setInname: (state, { payload: newInname }) => {
      state.inname = newInname;
    },
    setDateFrom: (state, { payload: newDateFrom }) => {
      state.dateFrom = newDateFrom;
    },
    setDateTo: (state, { payload: newDateTo }) => {
      state.dateTo = newDateTo;
    },
    setSelectedTag: (state, { payload: newTag }) => {
      state.selectedTag = newTag;
    },
    setShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const {
  fetchDataRequest,
  fetchDataQuestionRequest,
  fetchDataSuccess,
  fetchDataFaqSuccess,
  fetchDataRelSuccess,
  fetchDataSynSuccess,
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
  setShowMenu,
} = tagsBrowser.actions;

export const selectTagsBrowserState = (state) => state.tagsBrowser;
export const selectTagsBrowserData = (state) =>
  selectTagsBrowserState(state).data;
export const selectTagsBrowserLoading = (state) =>
  selectTagsBrowserState(state).loading;
export const selectTagsBrowserError = (state) =>
  selectTagsBrowserState(state).error;
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
export const selectTagsBrowserDataFaq = (state) =>
  selectTagsBrowserState(state).dataFaq;
export const selectTagsBrowserDataRel = (state) =>
  selectTagsBrowserState(state).dataRel;
export const selectTagsBrowserDataSyn = (state) =>
  selectTagsBrowserState(state).dataSyn;
export const selectTagsBrowserDataType = (state) =>
  selectTagsBrowserState(state).dataType;
export const selectTagsBrowserShowMenu = (state) =>
  selectTagsBrowserState(state).showMenu;

export default tagsBrowser.reducer;
