//the reason for defining the file in: module > shared > redux is because we don't define actions and reducers necessarily for a specific component. Instead we define them for parts of the module, it could be a combination of different components.

export const addNameToTitleType = "addNameToTitleType";
export const addNumberToTitleType = "addNumberToTitleType";
export const replaceTheMessageType = "replaceTheMessageType";
export const addInfoProducerType = "addInfoProducerType";
export const loadInfoVerifiersType = "loadInfoVerifiersType";
export const isLoadingType = "isLoadingType";

export const InfoActionsService = (ApiService) => { // the reason for creating a factory service and not a service service is because this service is gonna be used in $ngRedux.connect() method and that method accepts a pure object which is the output of the factory service and not a service service.
    `ngInject`;

    const addNameToTitle = () => ({
        type: addNameToTitleType
    });

    const addNumberToTitle = () => ({
        type: addNumberToTitleType
    });

    const replaceTheMessage = (message) => ({
        type: replaceTheMessageType,
        payload: {
            message
        }
    });

    const addInfoProducer = (producer) => ({
        type: addInfoProducerType,
        payload: {
            producer
        }
    });

    const loadInfoVerifiers = (infoVerifiers) => ({
        type: loadInfoVerifiersType,
        payload: {
            infoVerifiers
        }
    });

    const isLoading = (isLoading) => ({
        type: isLoadingType,
        payload: {
            isLoading
        }
    });

    const loadInfoVerifiersAsync = () => (dispatch) => {
        dispatch(isLoading(true));
        ApiService.queryInfoVerifiers(
            {},
            data => dispatch(loadInfoVerifiers(data)),
            error => console.log("error, ", error)
        );
    };

    return {
        addNameToTitle,
        addNumberToTitle,
        replaceTheMessage,
        addInfoProducer,
        loadInfoVerifiers,
        isLoading,
        loadInfoVerifiersAsync
    };
};

export default InfoActionsService;

