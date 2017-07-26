import {createSelector} from "reselect"

export const getSummaryState = (state) => state.summary;

export const getSummaryCode = createSelector(
    getSummaryState,
    (summaryState) => summaryState.summaryCode
);