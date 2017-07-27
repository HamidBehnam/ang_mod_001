import { combineReducers } from "redux";
import infoReducer from "./info/shared/redux/info.reducer"
import summaryReducer from "./summary/shared/redux/summary.reducer.js"
import { router } from "redux-ui-router"

const rootReducer = combineReducers({
    info: infoReducer,
    summary: summaryReducer,
    router
});

export default rootReducer;