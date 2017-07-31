import {fixSummaryCodeType} from "./summary.actions.js"

const initialState = {
  summaryCode: "the default value for summary code",
};

const summaryReducer = function (state = initialState, {type: actionType}) {
    switch (actionType) {
        case fixSummaryCodeType:
            return Object.assign({}, state, { // you can use Object.freeze to make sure (test) that you're not modifying the state: https://egghead.io/lessons/angular-1-x-angular-1-x-redux-avoid-state-mutation-with-immutable-operations
                summaryCode: state.summaryCode + " is fixed."
            });
        default:
            return state;
    }
};

export default summaryReducer;