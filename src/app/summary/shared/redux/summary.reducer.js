import {fixSummaryCodeType} from "./summary.actions.js"

const initialState = {
  summaryCode: "the default value for summary code",
};

const summaryReducer = function (state = initialState, {type: actionType}) {
    switch (actionType) {
        case fixSummaryCodeType:
            return Object.assign({}, state, {
                summaryCode: state.summaryCode + " is fixed."
            });
        default:
            return state;
    }
};

export default summaryReducer;