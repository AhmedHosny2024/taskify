// import {createStore, applyMiddleware } from 'redux';
// import Reducer from './Reducer/index';
// import reduxThunk from "redux-thunk"

// const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store=createStore(Reducer,enhancer())
import drowerSlice from './drowerSlice';
import { configureStore } from '@reduxjs/toolkit';
const store =configureStore({
    reducer:{
        drower : drowerSlice,
    }
})
export default store