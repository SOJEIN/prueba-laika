import { combineReducers } from "redux";
import historialReducer from "./historialReducers";

export default combineReducers({
    Historial: historialReducer
})