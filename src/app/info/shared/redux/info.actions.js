//the reason for defining the file in: module > shared > redux is because we don't define actions and reducers necessarily for a specific component. Instead we define them for parts of the module, it could be a combination of different components.

export const addNameToTitleType = "addNameToTitleType";
export const addNumberToTitleType = "addNumberToTitleType";
export const replaceTheMessageType = "replaceTheMessageType";
export const addInfoProducerType = "addInfoProducerType";
export const loadInfoVerifiersType = "loadInfoVerifiersType";
export const isLoadingType = "isLoadingType";

export const addNameToTitle = () => ({
    type: addNameToTitleType
});

export const addNumberToTitle = () => ({
    type: addNumberToTitleType
});

export const replaceTheMessage = (message) => ({
    type: replaceTheMessageType,
    payload: {
        message
    }
});

export const addInfoProducer = (producer) => ({
    type: addInfoProducerType,
    payload: {
        producer
    }
});

export const loadInfoVerifiers = (infoVerifiers) => ({
    type: loadInfoVerifiersType,
    payload: {
        infoVerifiers
    }
});

export const isLoading = (isLoading) => ({
    type: isLoadingType,
    payload: {
        isLoading
    }
});

export const loadInfoVerifiersAsync = (ApiService) => (dispatch) => {
    dispatch(isLoading(true));
    ApiService.queryInfoVerifiers(
        {},
        data => dispatch(loadInfoVerifiers(data)),
        error => console.log("error, ", error)
    );
};

