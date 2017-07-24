//the reason for defining the file in: module > shared > redux is because we don't define actions and reducers necessarily for a specific component. Instead we define them for parts of the module, it could be a combination of different components.

import { addNameToTitleType, addNumberToTitleType } from "./info.actions";

const initialState = {
    infoTitle: "the info title"
};

const infoReducer = function (state = initialState, {type: actionType}) {
    switch (actionType) {
        case addNameToTitleType:
            return Object.assign({}, state, {
                infoTitle: state.infoTitle + " " + "hamid"
            });
        case addNumberToTitleType:
            return Object.assign({}, state, {
                infoTitle: state.infoTitle + " " + "234"
            });
        default:
            return state;
    }
};

export default infoReducer;