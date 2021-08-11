import {combineReducers} from "redux";
import userReducer from "./userReducer";
import languageReducer from "./languageReducer";
import assistantReducer from "./assistantReducer";

export default combineReducers({
    userReducer,
    languageReducer,
    assistantReducer
})



