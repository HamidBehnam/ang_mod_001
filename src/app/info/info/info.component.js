import template from "./info.component.html"
import {
    addNameToTitle,
    addNumberToTitle,
    replaceTheMessage,
    addInfoProducer,
    loadInfoVerifiersAsync
} from "../shared/redux/info.actions";
import {
    getInfoState,
    getInfoTitle,
    getInfoTitleLength,
    getInfoMessage,
    getInfoProducers,
    getInfoVerifiers,
    getLoadingStatus
} from "../shared/redux/info.selectors";

const InfoComponent = {
    template: template,
    bindings: {},
    controller: class InfoController {
        /*@ngInject*/
        constructor($timeout, $ngRedux, ApiService) {
            this.$timeout = $timeout;
            this.$ngRedux = $ngRedux;
            this.ApiService = ApiService;
            this.unsubscribe = this.$ngRedux.connect(this.mapState, {})(this);
            const infoMessage = {
                text: "My message text.",
                code: "My message code."
            };

            this.infoMessage = infoMessage;
        }

        $onInit() {
            this.replaceTheMessage({
                text: "Hamid",
                code: "Behnam"
            });

            this.loadInfoVerifiers();
        }

        $onDestroy() {
            this.unsubscribe();
        }

        mapState(state) {
            return {
                info: getInfoState(state),
                infoTitle: getInfoTitle(state),
                infoTitleLength: getInfoTitleLength(state),
                infoMessage: getInfoMessage(state),
                infoProducers: getInfoProducers(state),
                infoVerifiers: getInfoVerifiers(state),
                isLoading: getLoadingStatus(state)
            };
        }

        addNameToTitle() {
            this.$ngRedux.dispatch(addNameToTitle());
        }

        addNumberToTitle() {
            this.$ngRedux.dispatch(addNumberToTitle());
        }

        replaceTheMessage(message) {
            this.$ngRedux.dispatch(replaceTheMessage(message));
        }

        addInfoProducer(producer) {
            this.$ngRedux.dispatch(addInfoProducer(producer));
        }

        loadInfoVerifiers() {
            this.$ngRedux.dispatch(loadInfoVerifiersAsync(this.ApiService));
        }

        acceptTheMessage($event) {
            console.log("this is accept the message method! event: ", $event);
        }
    }
};

export default InfoComponent;