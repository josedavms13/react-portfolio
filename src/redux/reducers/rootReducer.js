import {combineReducers} from "redux";
import userReducer from "./userReducer";
import languageReducer from "./languageReducer";

export default combineReducers({
    userReducer,
    languageReducer
})



