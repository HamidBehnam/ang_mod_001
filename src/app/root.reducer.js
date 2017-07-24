import { combineReducers } from "redux";
import infoReducer from "./info/shared/redux/info.reducer"
import summaryReducer from "./summary/shared/redux/summary.reducer.js"

const rootReducer = combineReducers({
    info: infoReducer,
    summary: summaryReducer
});

export default rootReducer;