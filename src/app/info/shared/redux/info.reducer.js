//the reason for defining the file in: module > shared > redux is because we don't define actions and reducers necessarily for a specific component. Instead we define them for parts of the module, it could be a combination of different components.

import {
    addNameToTitleType,
    addNumberToTitleType,
    replaceTheMessageType,
    addInfoProducerType,
    loadInfoVerifiersType,
    isLoadingType
} from "./info.actions";

const initialState = {
    isLoading: false,
    infoTitle: "awesome info title",
    infoMessage: {
        text: "default text",
        code: "default code"
    },
    infoProducers: ["Hamid", "John", "Smith"],
    infoVerifiers: []
};

const infoReducer = function (state = initialState, {type: actionType, payload}) {
    switch (actionType) {
        case addNameToTitleType:
            return Object.assign({}, state, { // you can use Object.freeze to make sure (test) that you're not modifying the state: https://egghead.io/lessons/angular-1-x-angular-1-x-redux-avoid-state-mutation-with-immutable-operations
                infoTitle: state.infoTitle + " " + "hamid"
            });
        case addNumberToTitleType:
            return Object.assign({}, state, {
                infoTitle: state.infoTitle + " " + "234"
            });
        case replaceTheMessageType:
            return Object.assign({}, state, {
                infoMessage: Object.assign({}, state.infoMessage, payload.message)
            });
        case addInfoProducerType:
            return Object.assign({}, state, {
                infoProducers: [...state.infoProducers, payload.producer]
            });
        case loadInfoVerifiersType:
            return Object.assign({}, state, {
                infoVerifiers: payload.infoVerifiers,
                isLoading: false
            });
        case isLoadingType:
            return Object.assign({}, state, {
                isLoading: payload.isLoading
            });
        default:
            return state;
    }
};

export default infoReducer;