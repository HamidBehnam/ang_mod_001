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

export const getInfoVerifiers = createSelector(
    getInfoState,
    (infoState) => infoState.infoVerifiers
);

export const getLoadingStatus = createSelector(
    getInfoState,
    (infoStatus) => infoStatus.isLoading
);

