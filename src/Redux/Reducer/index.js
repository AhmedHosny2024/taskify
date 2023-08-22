import { combineReducers } from "redux";
import changeDrower from "./changeDrower";

export default combineReducers({
    drower: changeDrower,
})