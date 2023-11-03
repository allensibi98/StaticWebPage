import { combineReducers } from "redux";
import mainContentReducer from "./reducers/mainContentReducer";

export default function createReducer(injectedReducers) {
    return combineReducers({
        mainContentReducer,
        
    });
}