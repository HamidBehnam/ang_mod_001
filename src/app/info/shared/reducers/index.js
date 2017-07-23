import { addNameToTitleType, addNumberToTitleType } from "../actions";

const initialState = {
    infoTitle: "the info title"
};

const infoReducer = function (state = initialState, {type}) {
    switch (type) {
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