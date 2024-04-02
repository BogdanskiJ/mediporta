import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

import tagsBrowserReducer from "./slice";

const store = configureStore(
  {
    reducer: {
      tagsBrowser: tagsBrowserReducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;

// import {configureStore} from '@reduxjs/toolkit'
// import createSagaMiddleware from '@redux-saga/core'
// import rootSaga from './rootSaga'
// import teritorialUnitReducer from './features/teritorialUnit/teritorialUnitSlice'
// import manyVariablesReducer from './features/manyVariables/manyVariablesSlice'
// import RegionAndProvincesMapsReducer from './features/maps/mapsSlice'

// const sagaMiddleWare = createSagaMiddleware()

// const store = configureStore({
//   reducer: {
//     teritorialUnit: teritorialUnitReducer,
//     manyVariables: manyVariablesReducer,
//     RegionAndProvincesMaps: RegionAndProvincesMapsReducer,
//   },
//   middleware: [sagaMiddleWare],
// })

// sagaMiddleWare.run(rootSaga)

// export default store
