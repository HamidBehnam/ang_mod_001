import {createSelector} from "reselect"

export const getInfoState = (state) => state.info;

export const getInfoTitle = createSelector(
    getInfoState,
    (infoState) => infoState.infoTitle
);

export const getInfoTitleLength = createSelector(
    getInfoTitle,
    (infoTitle) => infoTitle.length
);

export const getInfoMessage = createSelector(
    getInfoState,
    (infoState) => infoState.infoMessage
);

export const getInfoProducers = createSelector(
    getInfoState,
    (infoState) => infoState.infoProducers
);

