// import {createStore, applyMiddleware } from 'redux';
// import Reducer from './Reducer/index';
// import reduxThunk from "redux-thunk"

// const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store=createStore(Reducer,enhancer())
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import {
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
  } from 'redux-persist'


import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './dataSlice';


const persistConfig = {
    key: 'root',
    // version: 1,
    storage,
  }
  // const reducer=combineReducers({
  //   drower : drowerSlice,
  //   todo   : todoSlice,
  //   newtask : newtaskSlice,
  //   data   : dataSlice,
  //   search : seacrhSlice,
  //   Ids    : IdsSlice,
  //   User   : UserSlice,
  //   filter : filterSlice,
  // })
const persistedReducer=persistReducer(persistConfig, dataSlice)
// const store =configureStore({
//     reducer:{
//         // drower : drowerSlice,
//         // filter : filterSlice,
//         // todo   : todoSlice,
//         // newtask : newtaskSlice,
//         // data   : dataSlice,
//         // search : seacrhSlice,
//         // Ids    : IdsSlice,
//         // User   : UserSlice

//         drower : persisteddrowerSlice,
//         filter : persistedfilterSlice,
//         todo   : persistedtodoSlice,
//         newtask : persistednewtaskSlice,
//         data   : persisteddataSlice,
//         search : persistedseacrhSlice,
//         Ids    : persistedIdsSlice,
//         User   : persistedUserSlice
//     },
//     middleware: [thunk]
// })
const store = configureStore({
reducer : persistedReducer
// middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
})
export default store
