// import {createStore, applyMiddleware } from 'redux';
// import Reducer from './Reducer/index';
// import reduxThunk from "redux-thunk"

// const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store=createStore(Reducer,enhancer())
import drowerSlice from './drowerSlice';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import todoSlice from './todoSlice';
import newtaskSlice  from './newtaskSlice';
import dataSlice from './dataSlice';
const store =configureStore({
    reducer:{
        drower : drowerSlice,
        filter : filterSlice,
        todo   : todoSlice,
        newtask : newtaskSlice,
        data   : dataSlice
    }
})
export default store